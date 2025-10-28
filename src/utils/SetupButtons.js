import { Proc } from "./ProcAudioLogic";
import pauseAudio from "../utils/PauseAndResumeLogic";
import { getAudioContext } from '@strudel/webaudio';
function SetupButtons(globalEditor, setPause) {
    
    async function checkContextStatus() {
        const context = getAudioContext();
        if (context && context.state === "suspended") {
            context.resume();
            
            setPause(false);
        }
        
    }
    document.getElementById('play').addEventListener('click', async () => {
        
        globalEditor.stop();
        await checkContextStatus();
        globalEditor.evaluate();
    });

     
    document.getElementById('stop').addEventListener('click', () => globalEditor.stop());
    document.getElementById('process').addEventListener('click', () => {
        Proc(globalEditor)
    }
    )
    document.getElementById('process_play').addEventListener('click', async () => {
        if (globalEditor != null) {
            globalEditor.stop();
            Proc(globalEditor)           
            await checkContextStatus();
            globalEditor.evaluate()
        }
    }

    )

}
export default SetupButtons;