import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { parseLogArray } from "../utils/D3DataLogic";

export default function ScatterPlot({ logArray }) {
    const svgRef = useRef();

    const data = parseLogArray(logArray);

    useEffect(() => {
        if (!data.length) return;

        const svg = d3.select(svgRef.current);
        const width = 600;
        const height = 400;
        const margin = { top: 20, right: 30, bottom: 40, left: 50 };

        svg.attr("width", width).attr("height", height);
        svg.selectAll("*").remove();

        const x = d3.scaleBand()
            .domain(data.map(d => d.timeRange))
            .range([margin.left, width - margin.right])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.gain)])
            .nice()
            .range([height - margin.bottom, margin.top]);

        // X Axis
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "rotate(-40)")
            .style("text-anchor", "end");

        // Y Axis
        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        // Bars
        svg.append("g")
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", d => x(d.timeRange))
            .attr("y", d => y(d.gain))
            .attr("height", d => y(0) - y(d.gain))
            .attr("width", x.bandwidth())
            .attr("fill", "steelblue");
    }, [data]);

    return <svg ref={svgRef}></svg>;
}
