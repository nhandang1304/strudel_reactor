import ProcessText from "./ProcessTextLogic";
export function ProcAndPlay( globalEditor ) {
    if (globalEditor != null /*&& globalEditor.repl.state.started === true*/) {
        console.log(globalEditor )
        Proc(globalEditor)
        globalEditor.evaluate();
    }
}

export function Proc( globalEditor ) {

    let proc_text = document.getElementById('proc').value
    let proc_text_replaced = proc_text.replaceAll('<p1_Radio>', ProcessText);
    ProcessText(proc_text);
    globalEditor.setCode(proc_text_replaced)
    return proc_text_replaced;
}
