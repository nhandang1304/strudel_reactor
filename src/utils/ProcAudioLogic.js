import ProcessText from "./ProcessTextLogic";
import checkContextStatus from "../utils/checkContextStatusjs";
import { Restart, Stop } from "../utils/RestartAndStopLogic";
import Speed from "../utils/SpeedLogic";
import updateCodeVolume from "../utils/VolumeLogic"

export /*async*/ function ProcAndPlay(setPlayingAudio, globalEditor, setPause, context, speed = null, volume = null ) {
    if (globalEditor != null) {
        console.log(globalEditor)
        console.log("ProcAndPlay context:", context.resume);
        /*await checkContextStatus(setPause)*/
        //if (context.state === "running") {
        //    Stop(globalEditor, setPause, context);
        //}

        setPlayingAudio(true);
        context.resume();
        setPause(false)
        Proc(setPlayingAudio, globalEditor, setPause, context, speed, volume)         
        /*globalEditor.evaluate();*/
        Restart(setPlayingAudio, globalEditor, setPause, context)
            

       
    }
}

export function Proc(setPlayingAudio, globalEditor, setPause, context, speed = null, volume = null) {
    if (context.state === "running" ) {
        Stop(setPlayingAudio, globalEditor, setPause, context)
    }
    setPlayingAudio(false);
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
    console.log("Proc: " + proc_text_replaced)
    return proc_text_replaced;
}
