export function Restart(setPlayingAudio, globalEditor, setPause, context) {
    let proc_text = document.getElementById('proc').value;
    // Show alert if there's no code
    if (proc_text === "") {
        alert("No code to run");
        return;
    }
    // Stop any current playback in the editor
    globalEditor.stop();
    setPlayingAudio(true)
        
    context.resume();
    // Evaluate (run) the current code in the editor
        globalEditor.evaluate();
        setPause(false);
    }

export function Stop(setPlayingAudio, globalEditor, setPause, context) {
    // Ensure pause state is false (stopped)
    setPause(false);
    // Indicate audio is no longer playing
    setPlayingAudio(false)
    globalEditor.stop();
    context.resume();
}