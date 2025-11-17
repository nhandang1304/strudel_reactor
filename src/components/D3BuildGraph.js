import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { parseLogArray } from "../utils/D3DataLogic";

export default function ScatterPlot({ logArray }) {
    const svgRef = useRef();

    const data = parseLogArray(logArray);

    useEffect(() => {
        if (!data.length) return;

        const svg = d3.select(svgRef.current);
        const width = 700;
        const height = 550;
        const margin = { top: 30, right: 40, bottom: 60, left: 60 };

        svg.attr("width", width).attr("height", height);
        svg.selectAll("*").remove();

        // X scale: categorical timeRange
        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.timeRange))
            .range([margin.left, width - margin.right])
            .padding(0.2);

        // Y scale: numeric, max từ tất cả key cần vẽ
        const yMax = d3.max(data, (d) => Math.max(d.gain, d.duration, d.postgain));
        const y = d3.scaleLinear().domain([0, yMax]).nice().range([height - margin.bottom, margin.top]);

        // Vẽ trục X
        svg
            .append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "rotate(-40)")
            .style("text-anchor", "end");

        // Vẽ trục Y
        svg.append("g").attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y));

        // Vẽ bar cho gain
        svg
            .append("g")
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", (d) => x(d.timeRange))
            .attr("y", (d) => y(d.gain))
            .attr("width", x.bandwidth())
            .attr("height", (d) => y(0) - y(d.gain))
            .attr("fill", "steelblue")
            .attr("opacity", 0.7);

        // Chuẩn bị symbol generator cho các điểm scatter
        const symbolMap = {
            duration: { symbol: d3.symbolCircle, color: "orange" },
            postgain: { symbol: d3.symbolTriangle, color: "green" },
        };

        Object.entries(symbolMap).forEach(([key, { symbol, color }]) => {
            const symbolGenerator = d3.symbol().type(symbol).size(100);

            svg
                .append("g")
                .selectAll("path")
                .data(data)
                .join("path")
                .attr(
                    "transform",
                    (d) => `translate(${x(d.timeRange) + x.bandwidth() / 2},${y(d[key])})`
                )
                .attr("d", symbolGenerator)
                .attr("fill", color)
                .attr("opacity", 0.8);
        });

        // Vẽ legend
        const legend = svg.append("g").attr("transform", `translate(${width - margin.right - 140},${margin.top})`);

        // Bar gain trong legend
        legend
            .append("rect")
            .attr("x", 10)
            .attr("y", 0)
            .attr("width", 20)
            .attr("height", 15)
            .attr("fill", "steelblue")
            .attr("opacity", 0.7);
        legend
            .append("text")
            .attr("x", 35)
            .attr("y", 12)
            .text("gain (bar)")
            .style("font-size", "14px")
            .attr("alignment-baseline", "middle");

        // Scatter legend cho các key khác
        Object.entries(symbolMap).forEach(([key, { symbol, color }], i) => {
            const symGen = d3.symbol().type(symbol).size(100);
            legend
                .append("path")
                .attr("d", symGen())
                .attr("fill", color)
                .attr("transform", `translate(20, ${30 + i * 25})`);

            legend
                .append("text")
                .attr("x", 40)
                .attr("y", 30 + i * 25 + 5)
                .text(key)
                .style("font-size", "14px")
                .attr("alignment-baseline", "middle");
        });
    }, [data]);

    return <svg ref={svgRef}></svg>;
}
