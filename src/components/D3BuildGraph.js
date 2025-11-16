import { useEffect, useRef, useState } from "react";

function extractNumericData(logLines) {
    const dataByKey = {};
    const regex = /(\w+):([\d.]+)/g;

    logLines.forEach(line => {
        let match = regex.exec(line);
        while (match !== null) {

            const key = match[1];
            const value = parseFloat(match[2]);

            if (!dataByKey[key]) {
                dataByKey[key] = [];
            }
            dataByKey[key].push(value);
            match = regex.exec(line);
        }
    });

    return dataByKey;
}

