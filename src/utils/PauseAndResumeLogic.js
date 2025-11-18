

async function pauseAudio(context, setPause ) {
    // If the audio is currently playing, suspend (pause) it
    if (context.state === "running") {
        await context.suspend(); 
        console.log(context.state)
        setPause(true);
        // If the audio is paused, resume playback
    } else if (context.state === "suspended") {
        await context.resume(); 
        console.log(context.state)
        setPause(false);
    }
}
export default pauseAudio;