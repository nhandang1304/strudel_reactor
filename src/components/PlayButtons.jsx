import { MdOutlineRestartAlt } from "react-icons/md";
import { FaCircleStop } from "react-icons/fa6";
function PlayButtons() {
    return (
        <>
            <div className="btn-group" role="group" ara-label="Basic mixed styles example!">
                <button id="play" className="btn btn-outline-dark" title="Restart Audio"><MdOutlineRestartAlt size={40} /></button>
                <button id="stop" className="btn btn-outline-dark" title="Stop Audio"><FaCircleStop size={40} /></button>
            </div>
            
        </>
    
    )
}

export default PlayButtons