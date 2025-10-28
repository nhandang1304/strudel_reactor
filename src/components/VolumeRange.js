import { FaVolumeUp } from "react-icons/fa";
function VolumeRange() {
    return (        
        <div className="row">
            <div className="col-1">
                <FaVolumeUp size={20} />
            </div>
            <div className="col-4">
                <input type="range" class="form-range" id="customRange1" />
            </div>
            
        </div>
       
        
    )
};
export default VolumeRange;
