import { MdOutlineRestartAlt } from "react-icons/md";
import { FaCircleStop } from "react-icons/fa6";
import Tooltips from "../components/TooltipDes";
import checkContextStatus from "../utils/checkContextStatusjs";
import { Restart, Stop } from "../utils/RestartAndStopLogic";
function PlayButtons({ globalEditor, setPause, context }) {
    //function restart() {

    //    globalEditor.current.stop();
    //    /*checkContextStatus(setPause);*/
    //    context.resume();
    //    globalEditor.current.evaluate();
    //    setPause(false);
    //}
    //function stop() {
        
    //    setPause(false);
    //    globalEditor.current.stop();
    //    context.resume();
    //}
    return (
       
        <>

                <Tooltips title="Restart Audio">
                <button onClick={() => Restart(globalEditor.current, setPause, context)} id="play" className="btn btn-light"><MdOutlineRestartAlt size={25} /></button>
                </Tooltips>
                <Tooltips title="Stop playing Audio">
                <button id="stop" onClick={() => Stop(globalEditor.current, setPause, context) } className="btn btn-light"><FaCircleStop size={25} /></button>
                </Tooltips>
                
            
            
        </>
    
    )
}

export default PlayButtons