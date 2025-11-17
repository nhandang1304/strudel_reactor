
let canvas, ctx;
const colors = {};


export function initVisualizer(canvasElement) {
    canvas = canvasElement;
    if (!canvas) return;
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    ctx = canvas.getContext('2d');
}


export function extractNumericData(logLines) {
    const dataByKey = {};
    const regex = /(\w+):([\d.]+)/g;

    logLines.forEach(line => {
        if (!line.includes('[hap]')) return;
        let match;
        while ((match = regex.exec(line)) !== null) {
            const key = match[1];
            const value = parseFloat(match[2]);
            if (!dataByKey[key]) {
                dataByKey[key] = [];
            }
            dataByKey[key].push(value);
        }
    });

    return dataByKey;
}

export function calculateAverages(dataByKey) {
    const averages = {};
    for (const key in dataByKey) {
        const values = dataByKey[key];
        const sum = values.reduce((a, b) => a + b, 0);
        averages[key] = sum / values.length;
    }
    return averages;
}

export function drawBarChartFromAverages(averages) {
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const keys = Object.keys(averages);
    if (keys.length === 0) return;

    const chartPadding = 40;
    const barWidth = 40;
    const barGap = 30;
    const maxBarHeight = canvas.height - chartPadding * 2;

    let maxValue = Math.max(...keys.map(k => averages[k]));
    if (maxValue === 0) maxValue = 1;

    let x = chartPadding;

    keys.forEach(key => {
        const value = averages[key];
        const barHeight = (value / maxValue) * maxBarHeight;

        if (!colors[key]) {
            colors[key] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        }

        ctx.fillStyle = colors[key];
        ctx.fillRect(x, canvas.height - chartPadding - barHeight, barWidth, barHeight);

        ctx.fillStyle = '#fff';
        ctx.font = '20px Arial';
        ctx.fillText(key, x, canvas.height - 10);

        x += barWidth + barGap;
    });
}
