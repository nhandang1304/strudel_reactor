import { MdOutlineRestartAlt } from "react-icons/md";
import { FaCircleStop } from "react-icons/fa6";
import Tooltips from "../components/TooltipDes";
import checkContextStatus from "../utils/checkContextStatusjs";
function PlayButtons({ globalEditor, setPause }) {
    function play() {

        globalEditor.stop();
        checkContextStatus();
        globalEditor.evaluate();
        setPause(false);
    }
    function stop() {
        globalEditor.stop();
    }
    return (
       
        <>

                <Tooltips title="Restart Audio">
                <button onClick={() => play} id="play" className="btn btn-dark"><MdOutlineRestartAlt size={25} /></button>
                </Tooltips>
                <Tooltips title="Stop playing Audio">
                    <button id="stop" onClick={() => stop } className="btn btn-dark"><FaCircleStop size={25} /></button>
                </Tooltips>
                
            
            
        </>
    
    )
}

export default PlayButtons