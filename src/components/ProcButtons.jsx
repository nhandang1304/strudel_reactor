import { VscServerProcess, VscVmRunning } from "react-icons/vsc";
import { TbAmpersand } from "react-icons/tb";
import Tooltips from "./TooltipDes";
function ProcButtons() {
    return (
        <>
          
            <div className="btn-group" role="group" ara-label="Basic mixed styles example!">
                <Tooltips title="Save your current code" >
                
                    <button id="process" className="btn btn-outline-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" >
                        <VscServerProcess size={30}/>
                        <br />
                        <b>Preprocess</b>
                        </button>
                    
                </Tooltips>
                <Tooltips title="Save your current code and Play Audio" >
                
                <button id="process_play" className="btn btn-outline-dark" title="Save your current code and ">
                    <VscServerProcess size={30}/>
                    <TbAmpersand size={20}/>
                    <VscVmRunning size={30}/>
                    <br/>
                    <b>Preprocess and Play</b>
                        </button>
                
                </Tooltips>
            </div>

        </> 
       
    )
}
export default ProcButtons