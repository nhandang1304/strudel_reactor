import ProcessText from "./ProcessTextLogic";
import checkContextStatus from "../utils/checkContextStatusjs";

export /*async*/ function ProcAndPlay( globalEditor, setPause, pause, context ) {
    if (globalEditor != null /*&& globalEditor.repl.state.started === true*/) {
        console.log(globalEditor)
        /*await checkContextStatus(setPause)*/
        context.resume();
        setPause(false)
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
