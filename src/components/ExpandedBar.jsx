import { FaVolumeUp } from "react-icons/fa";

function ExpandedBar({text, object }) {
    return (        
            <div class="card">
                <div class="card-footer">
                
                <h5 class="card-title text-dark">{text}</h5>
                </div>
                    <div class="card-body">
               
                {object }
                    </div>
                   
            </div>           
    )
}
export default ExpandedBar