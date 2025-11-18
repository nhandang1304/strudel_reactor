import { MdOutlineRestartAlt } from "react-icons/md";
import { FaCircleStop } from "react-icons/fa6";
import Tooltips from "../components/TooltipDes";
import { Restart, Stop } from "../utils/RestartAndStopLogic";
function PlayButtons({ setPlayingAudio, globalEditor, setPause, context }) {
   
    return (
       
        <>

            <Tooltips title="Restart Audio">
               
                <button onClick={() => Restart(setPlayingAudio, globalEditor.current, setPause, context)} id="play" className="btn btn-light"><MdOutlineRestartAlt size={25} /></button>
                </Tooltips>
                <Tooltips title="Stop playing Audio">
                <button id="stop" onClick={() => Stop(setPlayingAudio, globalEditor.current, setPause, context)} className="btn btn-light"><FaCircleStop size={25} /></button>
                </Tooltips>
                
            
            
        </>
    
    )
}

export default PlayButtons