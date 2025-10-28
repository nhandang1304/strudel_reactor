import { getAudioContext } from '@strudel/webaudio';

async function pauseAudio(SetPaused ) {

    const context = getAudioContext();
    if (context.state === "running") {
        await context.suspend(); 
        SetPaused(true);
    } else if (context.state === "suspended") {
        await context.resume(); 
        SetPaused(false);
    }
}
export default pauseAudio;