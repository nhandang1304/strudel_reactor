import { RiSpeedFill } from "react-icons/ri";
import { MdSlowMotionVideo } from "react-icons/md";
import Tooltips from "./TooltipDes"
function SpeedAudio() {
    return (
        <>
            <div className="d-flex gap-2">
                <Tooltips title="x2.0 Speed Audio">
                    <button className="btn btn-dark fw-bold">X2 <RiSpeedFill size="20"/> </button>
                </Tooltips>
                <Tooltips title="x4.0 Speed Audio">
                    <button className="btn btn-dark fw-bold">X4 <RiSpeedFill size="20" /></button>
                </Tooltips>
                <Tooltips title="x0.5 Speed Audio">
                    <button className="btn btn-dark fw-bold">X0.5 <MdSlowMotionVideo size="20" /></button>
                </Tooltips>
                <Tooltips title="x0.25 Speed Audio">
                    <button className="btn btn-dark fw-bold">X0.25 <MdSlowMotionVideo size="20" /></button>
                </Tooltips>
            </div>
          
            
           
            </>
         

    )
}
export default SpeedAudio;