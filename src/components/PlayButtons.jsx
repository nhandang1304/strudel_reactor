import { MdOutlineRestartAlt } from "react-icons/md";
import { FaCircleStop } from "react-icons/fa6";
import Tooltips from "../components/TooltipDes";
function PlayButtons() {
    return (
        <>
            
            <div className="btn-group" role="group" ara-label="Basic mixed styles example!">
                <Tooltips title="Restart Audio">
                    <button id="play" className="btn btn-outline-dark"><MdOutlineRestartAlt size={40} /></button>
                </Tooltips>
                <Tooltips title="Stop playing Audio">
                    <button id="stop" className="btn btn-outline-dark"><FaCircleStop size={40} /></button>
                </Tooltips>
                
            </div>
            
        </>
    
    )
}

export default PlayButtons