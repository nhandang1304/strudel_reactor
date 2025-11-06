export function Restart(globalEditor, setPause, context) {

        globalEditor.stop();
        /*checkContextStatus(setPause);*/
        context.resume();
        globalEditor.evaluate();
        setPause(false);
    }

export function Stop(globalEditor, setPause, context) {
    setPause(false);
    globalEditor.stop();
    context.resume();
}