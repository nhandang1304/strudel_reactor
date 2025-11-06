import { getAudioContext } from '@strudel/webaudio';

async function pauseAudio(context, setPause ) {

    /*const context = getAudioContext();*/
    if (context.state === "running") {
        await context.suspend(); 
        console.log(context.state)
        setPause(true);
    } else if (context.state === "suspended") {
        await context.resume(); 
        console.log(context.state)
        setPause(false);
    }
}
export default pauseAudio;