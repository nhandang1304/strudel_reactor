import { RiSpeedFill } from "react-icons/ri";
import { MdSlowMotionVideo } from "react-icons/md";
import Tooltips from "./components/TooltipDes"
function SpeedAudio() {
    return (
            <>
            <Tooltips title="x2 Speed Audio">
                <button className="btn btn-outline-dark">X2 <RiSpeedFill/> </button>
            </Tooltips>
            <Tooltips title="x4 Speed Audio">
                <button className="btn btn-outline-dark">X4 <RiSpeedFill /></button>
            </Tooltips>
            <Tooltips title="x0.5 Speed Audio">
                <button className="btn btn-outline-dark">X0.5 <MdSlowMotionVideo /></button>
            </Tooltips>
            <Tooltips title="x0.25 Speed Audio">
                <button className="btn btn-outline-dark">X0.25 <MdSlowMotionVideo /></button>
            </Tooltips>
            </>
         

    )
}
export default SpeedAudio;