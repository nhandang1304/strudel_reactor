import { VscServerProcess, VscVmRunning } from "react-icons/vsc";
import { TbAmpersand } from "react-icons/tb";

function ProcButtons() {
    return (
        <>
            <div className="btn-group" role="group" ara-label="Basic mixed styles example!">
                <button id="process" className="btn btn-outline-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Save your current code">
                    <VscServerProcess size={30}></VscServerProcess>
                    <br />
                    <b>Preprocess</b>
                </button>
                <button id="process_play" className="btn btn-outline-dark" title="Save your current code and ">
                    <VscServerProcess size={30}></VscServerProcess>
                    <TbAmpersand size={20}></TbAmpersand >
                    <VscVmRunning size={30}></VscVmRunning>
                </button>
            </div>

        </> 
       
    )
}
export default ProcButtons