import { useState, useEffect } from "react";
import { Proc, ProcAndPlay } from "../utils/ProcAudioLogic";
import  removeInstrument  from "../utils/RemoveInstrument"; 
import { stranger_tune } from "../data/stranger_tune"; 

function DjControl({ pause, globalEditor, setPause, context }) {
    const [muteDrum, setDrum] = useState(false);
    const [muteBaseline, setBaseline] = useState(false);
    const [muteSquare, setSquare] = useState(false);

    useEffect(() => {
       
        let modifiedCode = document.getElementById('proc').value;

       
        if (muteDrum) modifiedCode = removeInstrument(modifiedCode, "drums");
        if (muteBaseline) modifiedCode = removeInstrument(modifiedCode, "bassline");
        if (muteSquare) modifiedCode = removeInstrument(modifiedCode, "main_arp");

       
        if (globalEditor) {
            globalEditor.setCode(modifiedCode);
        }

        if (context && context.state === "running") {
            ProcAndPlay(globalEditor, setPause, context);
        } else {
            Proc(globalEditor, setPause, context);
        }
    }, [muteDrum, muteBaseline, muteSquare, globalEditor, setPause, context]);

    return (
        <>
            <div className="form-check form-switch">
                <input
                    onChange={() => setSquare(!muteSquare)}
                    className="form-check-input"
                    type="checkbox"
                    id="squareSwitch"
                />
                <label className="fw-bold text-light" htmlFor="squareSwitch">
                    Square
                </label>
            </div>

            <div className="form-check form-switch">
                <input
                    onChange={() => setBaseline(!muteBaseline)}
                    className="form-check-input"
                    type="checkbox"
                    id="baselineSwitch"
                />
                <label className="fw-bold text-light" htmlFor="baselineSwitch">
                    Baseline
                </label>
            </div>

            <div className="form-check form-switch">
                <input
                    onChange={() => setDrum(!muteDrum)}
                    className="form-check-input"
                    type="checkbox"
                    id="drumSwitch"
                />
                <label className="fw-bold text-light" htmlFor="drumSwitch">
                    Drum
                </label>
            </div>
        </>
    );
}

export default DjControl;
