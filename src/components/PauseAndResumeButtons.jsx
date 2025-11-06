import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import Tooltips from "./TooltipDes";
function PauseAndResumeButtons({context, pause, setPause, pauseAudio}) {
    return (
        <>
            <Tooltips title={pause ? "Resume Audio" : "Pause Radio"}>
                <button onClick={() => pauseAudio(context, setPause)} className="btn btn-light">
                
                    {pause ? <FaPlayCircle size={25} /> : <FaPauseCircle size={25} />}
                                      
            </button>
            </Tooltips>  
        </>

    )
    
}
export default PauseAndResumeButtons;