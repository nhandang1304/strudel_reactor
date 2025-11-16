import { useEffect, useRef, useState } from "react";

function extractNumericData(logLines) {
    const dataByKey = {};
    const regex = /(\w+):([\d.]+)/g;

    logLines.forEach(line => {
        let match;
        while ((match = regex.exec(line)) !== null) {
            const key = match[1];
            const value = parseFloat(match[2]);
            if (!dataByKey[key]) return;
            dataByKey[key].push(value);
        }
    });

    return dataByKey;
}
