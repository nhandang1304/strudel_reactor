import { MdOutlineRestartAlt } from "react-icons/md";
import { FaCircleStop } from "react-icons/fa6";
import Tooltips from "../components/TooltipDes";
import checkContextStatus from "../utils/checkContextStatusjs";
function PlayButtons({ globalEditor, setPause, context }) {
    function play() {

        globalEditor.current.stop();
        /*checkContextStatus(setPause);*/
        context.resume();
        globalEditor.current.evaluate();
        setPause(false);
    }
    function stop() {
        context.resume();
        setPause(false);
        globalEditor.current.stop();
    }
    return (
       
        <>

                <Tooltips title="Restart Audio">
                <button onClick={() => play()} id="play" className="btn btn-light"><MdOutlineRestartAlt size={25} /></button>
                </Tooltips>
                <Tooltips title="Stop playing Audio">
                    <button id="stop" onClick={() => stop() } className="btn btn-light"><FaCircleStop size={25} /></button>
                </Tooltips>
                
            
            
        </>
    
    )
}

export default PlayButtons