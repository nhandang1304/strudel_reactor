import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

function PauseAndResumeButtons({pause, setPause, pauseAudio}) {
    return (
        <>
            <button onClick={pauseAudio} className="btn btn-outline-dark">
                {pause ? <FaPlayCircle size={40} /> : <FaPauseCircle size={40} />  }
                
                
            </button>
           
        </>

    )
    
}
export default PauseAndResumeButtons;