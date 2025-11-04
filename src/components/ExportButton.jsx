import { FaFileExport } from "react-icons/fa";
import Tooltips from "./TooltipDes";
import { TfiImport } from "react-icons/tfi";
import  ExportLogic  from "../utils/ExportLogic";

function HandlingFilesCard({globalEditor }) {
    
    return (
        <>
           
                        <div className="row">
                            <div className="col-6">
                                <Tooltips title="Export into json file" >
                                    <button id="export" className="btn btn-outline-dark" onClick={() => ExportLogic(globalEditor)}>
                                        <FaFileExport size={20} />
                                        <br />
                                        <b>Export file</b>
                                    </button>
                                </Tooltips>
                            </div>
                            <div className="col-6">
                                <Tooltips title="Import your file to edit or play audio">
                                    <button id="import" className="btn btn-outline-dark">
                                        <TfiImport size={20} />
                                        <br />
                                        <b>Import file</b>
                                    </button>
                                </Tooltips>
                            </div>
                        </div>
                    
            
</>

        
    )
  
}
export default HandlingFilesCard;