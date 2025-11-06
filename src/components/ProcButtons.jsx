import { VscServerProcess, VscVmRunning } from "react-icons/vsc";
import { TbAmpersand } from "react-icons/tb";
import Tooltips from "./TooltipDes";
import { Proc, ProcAndPlay } from "../utils/ProcAudioLogic";
function ProcButtons({ globalEditor, setPause, pause, context }) {
    
    return (
        <>
          
            <div className="d-flex gap-2" role="group" ara-label="Basic mixed styles example!">
                <Tooltips title="Save your current code" >

                    <button id="process" onClick={() => Proc(globalEditor.current, setPause, context)} className="btn btn-outline-light" data-bs-toggle="tooltip" data-bs-placement="bottom" >
                        <VscServerProcess size={20}/>
                        <br />
                        <b>Preprocess</b>
                        </button>
                    
                </Tooltips>
                <Tooltips title="Save your current code and Play Audio" >

                    <button id="process_play" onClick={async () => await ProcAndPlay(globalEditor.current, setPause, pause, context)} className="btn btn-outline-light" title="Save your current code and ">
                    <VscServerProcess size={20}/>
                    <TbAmpersand size={10}/>
                    <VscVmRunning size={20}/>
                    <br/>
                    <b>Preprocess and Play</b>
                        </button>
                
                </Tooltips>
            </div>

        </> 
       
    )
}
export default ProcButtons;