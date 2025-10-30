import { FaFileExport } from "react-icons/fa";
import Tooltips from "../components/TooltipDes";
function ExportButton({ data, filename = "data.json" }) {
    const handleExport = () => {
        const json = JSON.stringify(data, null, 2); 
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();

       
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    return (
        <Tooltips title="Export into json file">
            <button className="btn btn-outline-dark" >
                <FaFileExport size={35} onClick={handleExport } />
            </button>
        </Tooltips>  
    )
  
}
export default ExportButton;