import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { parseLogArray } from "../utils/D3DataLogic";

export default function ScatterPlot({ logArray }) {
    const svgRef = useRef();

    const data = parseLogArray(logArray);


    const numericKeys = (() => {
        if (!data.length) return [];

        const blacklist = ["timeRange", "gain"]; 
        const first = data[0];

 
        return Object.keys(first).filter(
            (k) => !blacklist.includes(k) && typeof first[k] === "number"
        );
    })();

    useEffect(() => {
        if (!data.length) return;

        const svg = d3.select(svgRef.current);
        const width = 1000;
        const height = 700;
        const margin = { top: 60, right: 60, bottom: 60, left: 60 };

      
        svg.attr("width", width).attr("height", height).style("background-color", "black");

    
        svg.selectAll("*").remove();

        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.timeRange))
            .range([margin.left, width - margin.right])
            .padding(0.25);

        const allValues = data.flatMap((d) =>
            numericKeys.concat("gain").map((k) => d[k])
        );

        const y = d3.scaleLinear()
            .domain([0, d3.max(allValues)])  
            .nice()
            .range([height - margin.bottom, margin.top]);

       
        svg.append("g")
            .attr("transform", `translate(0, ${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0))
            .selectAll("text")
            .attr("transform", "rotate(-40)")
            .style("text-anchor", "end")
            .style("font-size", "16px")

       
        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y))
            .style("font-size", "16px")

       
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

        
        const symbolTypes = [
            d3.symbolCircle,
            d3.symbolTriangle,
            d3.symbolSquare,
            d3.symbolDiamond,
            d3.symbolStar,
            d3.symbolCross,
            d3.symbolWye
        ];

        
        const colorScale = d3.scaleOrdinal()
            .domain(numericKeys)
            .range(d3.schemeSet2.concat(d3.schemeTableau10));

     
        numericKeys.forEach((key, i) => {
            const symbolGen = d3.symbol()
                .type(symbolTypes[i % symbolTypes.length])
                .size(300);

            const symbols = svg.append("g")
                .selectAll("path")
                .data(data)
                .join("path")
                .attr("d", symbolGen)
                .attr("fill", colorScale(key))
                .attr("opacity", 0.9);

            function animate() {
                symbols
                    .transition()
                    .duration(3000)
                    .attrTween("transform", function (d) {
                        const xPos = x(d.timeRange) + x.bandwidth() / 2;
                        const yStart = y(d[key]);
                       
                        return function (t) {
                            const dy = Math.sin(t * 2 * Math.PI) * 20;
                            return `translate(${xPos}, ${yStart + dy})`;
                        };
                    })
                    .on("end", animate); 
            }

            animate();
        });

    
        const legend = svg.append("g")
            .attr("transform", `translate(${width - 150}, ${margin.top})`);

       
        legend.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 20)
            .attr("height", 12)
            .attr("fill", "white")
            .attr("opacity", 0.7);

        legend.append("text")
            .attr("x", 30)
            .attr("y", 10)
            .attr("fill", "white")
            .text("gain (bar)")
            .style("font-size", "14px");

        
        numericKeys.forEach((key, i) => {
            const symbolGen = d3.symbol()
                .type(symbolTypes[i % symbolTypes.length])
                .size(110);

            legend.append("path")
                .attr("d", symbolGen())
                .attr("transform", `translate(10, ${30 + i * 22})`)
                .attr("fill", colorScale(key));

            legend.append("text")
                .attr("x", 30)
                .attr("fill", "white")
                .attr("y", 35 + i * 22)
                .text(key)
                .style("font-size", "13px");
        });

    }, [data]);

    return <svg ref={svgRef}></svg>;
}
