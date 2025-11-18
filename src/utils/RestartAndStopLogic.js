export function Restart(setPlayingAudio, globalEditor, setPause, context) {
    let proc_text = document.getElementById('proc').value;
    if (proc_text === "") {
        alert("No code to run");
        return;
    }
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