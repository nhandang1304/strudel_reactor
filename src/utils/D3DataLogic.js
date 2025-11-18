export function parseLog(log) {
    const [timeRange, rest] = log.split(': ');
    const keyValues = rest.split(' ');

    const data = {};
    data.timeRange = timeRange;

    keyValues.forEach(kv => {
        const [key, value] = kv.split(':');
        const numValue = Number(value);
        // Try converting value to number, if NaN keep as string
        data[key] = isNaN(numValue) ? value : numValue;
    });

    return data;
}
// Parse an array of log strings using parseLog
export function parseLogArray(logArray) {
    return logArray.map(parseLog);
}
