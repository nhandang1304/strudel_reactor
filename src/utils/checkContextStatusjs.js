import { getAudioContext } from '@strudel/webaudio';

async function checkContextStatus(setPause) {
    const context = getAudioContext();
    //if (context && context.state === "suspended") {
    //    context.resume();

    //    setPause(false);
    //}
    return context;

}
export default checkContextStatus;