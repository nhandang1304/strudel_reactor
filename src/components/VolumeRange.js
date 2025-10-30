import { FaVolumeUp } from "react-icons/fa";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

function VolumeRange({ globalEditor }) {

    const [mutedSound, setMutedSound] = useState(false);
    const [volumeValue, setVolumeValue] = useState(0.5);

    function toggleMute() {
       /* if (globalEditor != null && globalEditor.repl.state.started === true) {*/
            if (mutedSound) {
                setMutedSound(false);
                setVolumeValue(0.5);
            }
            else {
                setMutedSound(true);
                setVolumeValue(0);
            }
        }
    //    else {
    //        console.log(globalEditor);
    //        console.warn("⚠️ Strudel editor has not started yet");
    //    }
    //}
    useEffect(() => {
        if (globalEditor && globalEditor.repl.state.started === true) {
           
                globalEditor.audio.volume = volumeValue;
            
        }
    }, [volumeValue, globalEditor]);
    return (        
        <div className="row">
            <div className="col-1">
                {mutedSound ? <IoVolumeMuteSharp size={20} style={{ cursor: "pointer" }} onClick={toggleMute} /> : <FaVolumeUp size={20} style={{ cursor: "pointer" }} onClick={toggleMute} />}
    
            </div>
            {/*<div className="col-4">*/}
            {/*    <input type="range" className="form-range" id="customRange1" onchange={setVolumeValue} />*/}
            {/*</div>*/}
            
        </div>
       
        
    )
};
export default VolumeRange;
