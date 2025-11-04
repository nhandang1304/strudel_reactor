import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import Tooltips from "./TooltipDes";
function PauseAndResumeButtons({pause, setPause, pauseAudio}) {
    return (
        <>
            <Tooltips title={pause ? "Resume Audio" : "Pause Radio"}>
                <button onClick={() => pauseAudio(setPause)} className="btn btn-dark">
                
                    {pause ? <FaPlayCircle size={25} /> : <FaPauseCircle size={25} />}
                                      
            </button>
            </Tooltips>  
        </>

    )
    
}
export default PauseAndResumeButtons;