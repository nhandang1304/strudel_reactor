import { RiSpeedFill } from "react-icons/ri";
import { MdSlowMotionVideo } from "react-icons/md";
import Tooltips from "./TooltipDes"
import SpeedLogic from "../utils/SpeedLogic"
function SpeedAudio({globalEditor }) {
    return (
        <>
            <div className="d-flex gap-2">
                <Tooltips title="x2.0 Speed Audio">
                    <button onClick={()=> SpeedLogic(2, globalEditor.current) } className="btn btn-light fw-bold">X2 <RiSpeedFill size="20"/> </button>
                </Tooltips>
                <Tooltips title="x4.0 Speed Audio">
                    <button onClick={() => SpeedLogic(4, globalEditor.current)} className="btn btn-light fw-bold">X4 <RiSpeedFill size="20" /></button>
                </Tooltips>
                <Tooltips title="Normal Speed Audio">
                    <button onClick={() => SpeedLogic(2, globalEditor.current)} className="btn btn-light fw-bold">Normal (X1) </button>
                </Tooltips>
                <Tooltips title="x0.5 Speed Audio">
                    <button onClick={() => SpeedLogic(0.5, globalEditor.current)} className="btn btn-light fw-bold">X0.5 <MdSlowMotionVideo size="20" /></button>
                </Tooltips>
                <Tooltips title="x0.25 Speed Audio">
                    <button onClick={() => SpeedLogic(0.5, globalEditor.current)} className="btn btn-light fw-bold">X0.25 <MdSlowMotionVideo size="20" /></button>
                </Tooltips>
            </div>
          
            
           
            </>
         

    )
}
export default SpeedAudio;