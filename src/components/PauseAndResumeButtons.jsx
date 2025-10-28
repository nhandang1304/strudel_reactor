import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import Tooltips from "./TooltipDes";
function PauseAndResumeButtons({pause, setPause, pauseAudio}) {
    return (
        <>
            <Tooltips title={pause ? "Resume Audio" : "Pause Radio"}>
                <button onClick={() => pauseAudio(setPause)} className="btn btn-outline-dark">
                
                    {pause ? <FaPlayCircle size={40} /> : <FaPauseCircle size={40} />}
                                      
            </button>
            </Tooltips>  
        </>

    )
    
}
export default PauseAndResumeButtons;