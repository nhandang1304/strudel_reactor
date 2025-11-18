import { getAudioContext } from '@strudel/webaudio';

async function checkContextStatus(setPause) {
    const context = getAudioContext();
    return context;

}
export default checkContextStatus;