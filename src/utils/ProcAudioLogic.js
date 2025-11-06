import ProcessText from "./ProcessTextLogic";
import checkContextStatus from "../utils/checkContextStatusjs";
import { Restart, Stop } from "../utils/RestartAndStopLogic";

export /*async*/ function ProcAndPlay( globalEditor, setPause, pause, context ) {
    if (globalEditor != null /*&& globalEditor.repl.state.started === true*/) {
        console.log(globalEditor)
        /*await checkContextStatus(setPause)*/
        context.resume();
        setPause(false)
        Proc(globalEditor, setPause, context)         
        /*globalEditor.evaluate();*/
        Restart(globalEditor, setPause, context)
            

       
    }
}

export function Proc( globalEditor, setPause, context ) {
    if (context.state === "running") {
        Stop(globalEditor, setPause, context)
    }
    let proc_text = document.getElementById('proc').value
    let proc_text_replaced = proc_text.replaceAll('<p1_Radio>', ProcessText);
    ProcessText(proc_text);
    globalEditor.setCode(proc_text_replaced)
    
    return proc_text_replaced;
}
