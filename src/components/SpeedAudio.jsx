import { RiSpeedFill } from "react-icons/ri";
import { MdSlowMotionVideo } from "react-icons/md";
import Tooltips from "./TooltipDes"
import SpeedLogic from "../utils/SpeedLogic"
import { Proc, ProcAndPlay } from "../utils/ProcAudioLogic"
import { useState } from "react"
import "../css/NewDesign.css"
function SpeedAudio({ pause, globalEditor, setPause, context, setSpeed }) {
    const [activeSpeed, setActiveSpeed] = useState(1);
    
    function handleSpeedChange(speed) {
        
        setSpeed(speed);
        setActiveSpeed(speed);
        if (context.state === "suspended") {
            Proc(globalEditor.current, setPause, context, speed)
        }
        else {
            ProcAndPlay(globalEditor.current, setPause, context, speed);
        }
        
    };
    return (
        <>
            <div className="d-flex gap-2">
                <Tooltips title="x1.5 Speed Audio">
                    <button onClick={() => handleSpeedChange(1.5)} className={`btn btn-light fw-bold speed-btn ${activeSpeed === 1.5 ? "active" : ""}`}>X1.5 <RiSpeedFill size="20"/> </button>
                </Tooltips>
                <Tooltips title="x2 Speed Audio">
                    <button onClick={() => handleSpeedChange(2)} className={`btn btn-light fw-bold speed-btn ${activeSpeed === 2 ? "active" : ""}`}>X2 <RiSpeedFill size="20" /></button>
                </Tooltips>
                <Tooltips title="Normal Speed Audio">
                    <button onClick={() => handleSpeedChange(1)} className={`btn btn-light fw-bold speed-btn ${activeSpeed === 1 ? "active" : ""}`}>Normal (X1) </button>
                </Tooltips>
                <Tooltips title="x0.5 Speed Audio">
                    <button onClick={() => handleSpeedChange(0.5)} className={`btn btn-light fw-bold speed-btn ${activeSpeed === 0.5 ? "active" : ""}`}>X0.5 <MdSlowMotionVideo size="20" /></button>
                </Tooltips>
                <Tooltips title="x0.25 Speed Audio">
                    <button onClick={() => handleSpeedChange(0.25)} className={`btn btn-light fw-bold speed-btn ${activeSpeed === 0.25 ? "active" : ""}`}>X0.25 <MdSlowMotionVideo size="20" /></button>
                </Tooltips>
            </div>
          
            
           
            </>
         

    )
}
export default SpeedAudio;