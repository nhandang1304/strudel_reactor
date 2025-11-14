import ProcessText from "./ProcessTextLogic";
import checkContextStatus from "../utils/checkContextStatusjs";
import { Restart, Stop } from "../utils/RestartAndStopLogic";
import Speed from "../utils/SpeedLogic";
import updateCodeVolume from "../utils/VolumeLogic"

export /*async*/ function ProcAndPlay(globalEditor, setPause, context, speed = null, volume = null ) {
    if (globalEditor != null /*&& globalEditor.repl.state.started === true*/) {
        console.log(globalEditor)
        console.log("ProcAndPlay context:", context.resume);
        /*await checkContextStatus(setPause)*/
        //if (context.state === "running") {
        //    Stop(globalEditor, setPause, context);
        //}

        
        context.resume();
        setPause(false)
        Proc(globalEditor, setPause, context, speed, volume)         
        /*globalEditor.evaluate();*/
        Restart(globalEditor, setPause, context)
            

       
    }
}

export function Proc(globalEditor, setPause, context, speed = null, volume = null) {
    if (context.state === "running" ) {
        Stop(globalEditor, setPause, context)
    }
    let proc_text = document.getElementById('proc').value
    
    let proc_text_replaced = proc_text.replaceAll('<p1_Radio>', ProcessText);


    ProcessText(proc_text);

    if (volume !== null) {
        proc_text_replaced = updateCodeVolume(proc_text_replaced, volume);

        console.log("Volumn in Proc:" + volume);
    }
    if (speed !== null) {
         
        proc_text_replaced = Speed(speed, globalEditor, proc_text_replaced);
       
        console.log("Speed" + speed);
    }
    
    globalEditor.setCode(proc_text_replaced)
   
    return proc_text_replaced;
}
