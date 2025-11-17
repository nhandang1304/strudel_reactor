export function parseLog(log) {
    const [timeRange, rest] = log.split(': ');
    const keyValues = rest.split(' ');

    const data = {};
    data.timeRange = timeRange;

    keyValues.forEach(kv => {
        const [key, value] = kv.split(':');
        const numValue = Number(value);
        data[key] = isNaN(numValue) ? value : numValue;
    });

    return data;
}

export function parseLogArray(logArray) {
    return logArray.map(parseLog);
}
