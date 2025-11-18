import removeInstrument from "./ProcessTextLogic";
import { Restart, Stop } from "../utils/RestartAndStopLogic";
import Speed from "../utils/SpeedLogic";
import updateCodeVolume from "../utils/VolumeLogic"

export /*async*/ function ProcAndPlay(setPlayingAudio, globalEditor, setPause, setCurrentMelody, context, speed = null, volume = null) {
    if (globalEditor != null) {
        const proc_text = document.getElementById('proc').value;

        if (!proc_text || proc_text.trim() === "") {
            alert("No code to run");
            return;
        }

        setPlayingAudio(true);
        context.resume();
        setPause(false)
        Proc(setPlayingAudio, globalEditor, setPause, setCurrentMelody, context, speed, volume)         
       
        Restart(setPlayingAudio, globalEditor, setPause, context)
        console.log("Present code: " + document.getElementById('proc').value)    

       
    }
}

export function Proc(setPlayingAudio, globalEditor, setPause, setCurrentMelody, context, speed = null, volume = null) {
    if (context.state === "running" ) {
        Stop(setPlayingAudio, globalEditor, setPause, context)
    }
    setPlayingAudio(false);
    let proc_text = document.getElementById('proc').value
    if (proc_text === "") {
        alert("No code to run");
        return;
    }



    if (volume !== null) {
        proc_text = updateCodeVolume(proc_text, volume);

        console.log("Volumn in Proc:" + volume);
    }
    if (speed !== null) {
         
        proc_text = Speed(speed, globalEditor, proc_text);
       
        console.log("Speed" + speed);
    }
    setCurrentMelody(proc_text)
    globalEditor.setCode(proc_text)
    console.log("Proc: " + proc_text)
    return proc_text;
}
