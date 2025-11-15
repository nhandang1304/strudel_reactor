export function Restart(setPlayingAudio, globalEditor, setPause, context) {

    globalEditor.stop();
    setPlayingAudio(true)
        /*checkContextStatus(setPause);*/
        context.resume();
        globalEditor.evaluate();
        setPause(false);
    }

export function Stop(setPlayingAudio, globalEditor, setPause, context) {
    setPause(false);
    setPlayingAudio(false)
    globalEditor.stop();
    context.resume();
}