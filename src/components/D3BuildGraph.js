import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { parseLogArray } from "../utils/D3DataLogic";

export default function ScatterPlot({ logArray }) {
    const svgRef = useRef();
    // Parse the raw logArray data into structured data
    const data = parseLogArray(logArray);

    // Identify numeric keys to plot lines for,
    const numericKeys = (() => {
        if (!data.length) return [];
        const blacklist = ["timeRange", "gain"]; 
        const first = data[0];

        // Return keys that are numeric and not blacklisted
        return Object.keys(first).filter(
            (k) => !blacklist.includes(k) && typeof first[k] === "number"
        );
    })();

    useEffect(() => {
        if (!data.length) return;
        // Select SVG and set up width, height, and margins
        const svg = d3.select(svgRef.current);
        const width = 700;
        const height = 700;
        const margin = { top: 60, right: 60, bottom: 120, left: 60 };

      
        svg.attr("width", width).attr("height", height).style("background-color", "black");

        // Clear any previous content
        svg.selectAll("*").remove();

        // Add title text to the top center
        svg.append("text")
            .attr("x", width / 2)
            .attr("y", margin.top / 2)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .style("font-size", "24px")
            .style("font-weight", "bold")
            .text("Audio Signal Over Time");

        // Create x-axis scale
        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.timeRange))
            .range([margin.left, width - margin.right])
            .padding(0.25);

        const allValues = data.flatMap((d) =>
            numericKeys.concat("gain").map((k) => d[k])
        );
        // Create linear y-axis scale from 0 to max value found in data
        const y = d3.scaleLinear()
            .domain([0, d3.max(allValues)])  
            .nice()
            .range([height - margin.bottom, margin.top]);

       
        svg.append("g")
            .attr("transform", `translate(0, ${height - margin.bottom})`)
            .attr("fill", "white")
            .call(d3.axisBottom(x).tickSizeOuter(0))
            .selectAll("text")
            .attr("transform", "rotate(-40)")
            .style("text-anchor", "end")
            .attr("font-size", "14px")
            .attr("fill", "white")

        svg.select(`g[transform="translate(0, ${height - margin.bottom})"] .domain`)
            .attr("stroke", "white")
            .attr("stroke-width", 2);
       
        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .attr("fill", "white")
            .call(d3.axisLeft(y))
            .selectAll("text")
            .style("font-size", "14px")
            .attr("fill", "white")
        svg.select(`g[transform="translate(${margin.left}, 0)"] .domain`)
            .attr("stroke", "white")
            .attr("stroke-width", 2);
        // Draw bars for the 'gain' value at each timeRange
        svg.append("g")
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", (d) => x(d.timeRange))
            .attr("y", (d) => y(d.gain))
            .attr("width", x.bandwidth())
            .attr("height", (d) => y(0) - y(d.gain))
            .attr("fill", "white")
            .attr("opacity", 0.7);

        
       
        const customColorsArr = [
            "#f178fa",
            "#fa1470",
            "#30ff3b",
            "#f9fc3d",
            "#ff8800",
            "#dad7fc",
            "#0559f5"
        ];
        // Color scale mapping each numeric key
        const colorScale = d3.scaleOrdinal()
            .domain(numericKeys)
            .range(customColorsArr);

     
        numericKeys.forEach((key, i) => {
            const line = d3.line()
                .x(d => x(d.timeRange) + x.bandwidth() / 2)
                .y(d => y(d[key]))
                .curve(d3.curveMonotoneX);

            svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", colorScale(key))
                .attr("stroke-width", 2.5)
                .attr("d", line)
                .attr("opacity", 0.9);
        });

        // Create legend group positioned near the top right
        const legend = svg.append("g")
            .attr("transform", `translate(${width - 200}, ${margin.top + 10})`)
            .attr("font-size", 14);

       
        const gainLegend = legend.append("g");

        gainLegend.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 22)
            .attr("height", 14)
            .attr("fill", "white")
            .attr("opacity", 0.7)
            .attr("stroke", "white")
            .attr("stroke-width", 2);

        gainLegend.append("text")
            .attr("x", 35)
            .attr("y", 12)
            .attr("fill", "white")
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .text("gain (bar)");


      
        numericKeys.forEach((key, i) => {
            const rowY = 35 + i * 26;

            const keyLegend = legend.append("g")
                .attr("transform", `translate(0, ${rowY})`);

            // Colored line sample
            keyLegend.append("line")
                .attr("x1", 0)
                .attr("x2", 25)
                .attr("y1", 7)
                .attr("y2", 7)
                .attr("stroke", colorScale(key))
                .attr("stroke-width", 3);

            
            keyLegend.append("text")
                .attr("x", 35)
                .attr("y", 10)
                .attr("fill", "white")
                .style("font-size", "15px")
                .style("font-weight", "bold")
                .text(key);
        });
    }, [data]);

    return <svg ref={svgRef}></svg>;
}
