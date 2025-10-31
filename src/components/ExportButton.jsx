import { FaFileExport } from "react-icons/fa";
import Tooltips from "../components/TooltipDes";
import { Proc } from "../utils/ProcAudioLogic";
function ExportButton({ globalEditor }) {
   
    return (
        <Tooltips title="Export into json file">
            <button id="export" className="btn btn-outline-dark">
                <FaFileExport size={35}  />
            </button>
        </Tooltips>  
    )
  
}
export default ExportButton;