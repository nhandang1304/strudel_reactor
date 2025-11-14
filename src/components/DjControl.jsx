import { useState, useEffect } from "react";
import { Proc, ProcAndPlay } from "../utils/ProcAudioLogic";
import  removeInstrument  from "../utils/RemoveInstrument"; 


function DjControl({speed, pause, globalEditor, setPause, context }) {
   
    function handleMute(instr) {
       
     
            if (context.state === "running") {
                ProcAndPlay(globalEditor.current, setPause, context, speed, instr);
            } else {
                Proc(globalEditor.current, setPause, context, speed, instr);
            }
            return instr;
        };
    


    return (
        <>
            <div className="form-check form-switch">
                <input
                    onChange={() => handleMute("square")}
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
                    onChange={() => handleMute("baseline")}
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
                    onChange={() => handleMute("drum")}
                    className="form-check-input"
                    type="checkbox"
                    id="flexRadioDefault2"
                />
                <label className="fw-bold text-light" htmlFor="flexRadioDefault2">
                    Drum
                </label>
            </div>
        </>
    );
}

export default DjControl;
