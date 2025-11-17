function drawMusicWave({ ctx, time }) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    ctx.clearRect(0, 0, width, height);

    const numWaves = 6;
    const waveSpacing = height / (numWaves + 1);
    const amplitude = waveSpacing * 0.8;
    const waveLength = width;

    for (let i = 0; i < numWaves; i++) {
        const yBase = (i + 1) * waveSpacing;

      
        const gradient = ctx.createLinearGradient(0, yBase - amplitude, width, yBase + amplitude);
        gradient.addColorStop(0, `hsl(${(i * 360) / numWaves}, 100%, 70%)`);
        gradient.addColorStop(1, `hsl(${((i + 1) * 360) / numWaves}, 100%, 70%)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 8;

        ctx.shadowColor = `hsl(${(i * 360) / numWaves}, 100%, 70%)`;
        ctx.shadowBlur = 15;

        ctx.beginPath();
        for (let x = 0; x <= width; x++) {
            const y = yBase + amplitude*Math.sin((x/waveLength) * 2 * Math.PI - time * 3 + i);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
    }
}
export default drawMusicWave