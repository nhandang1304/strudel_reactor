import { FaFileExport } from "react-icons/fa";
import Tooltips from "./TooltipDes";
import { TfiImport } from "react-icons/tfi";
import { Export, Import }  from "../utils/ExportLogic";

function HandlingFilesCard({ setPlayingAudio, globalEditor, setPause, context }) {
    const handleFile = Import({ setPlayingAudio, globalEditor, setPause, context });
    return (
        <>
           
                        <div className="row">
                            <div className="col-6">
                                <Tooltips title="Export into json file" >
                        <button id="export" className="btn btn-outline-light" onClick={() => Export(setPlayingAudio, globalEditor.current, setPause, context)}>
                                        <FaFileExport size={20} />
                                        <br />
                                        <b>Export </b>
                                    </button>
                                </Tooltips>
                            </div>
                            <div className="col-6">
                                <Tooltips title="Import your file to edit or play audio">
                        <button id="import" className="btn btn-outline-light" onClick={() => document.getElementById("jsonInput").click()}>
                                        <TfiImport size={20} />
                                        <br />
                                        <b>Import </b>
                                    </button>
                    </Tooltips>
                    <input
                        id="jsonInput"
                        type="file"
                        accept="application/json"
                        style={{ display: "none" }}
                        onChange={handleFile}
                    />
                            </div>
                        </div>
                    
            
</>

        
    )
  
}
export default HandlingFilesCard;