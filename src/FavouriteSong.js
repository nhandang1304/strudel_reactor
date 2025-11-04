import { IoHeartCircleOutline } from "react-icons/io5";
import { BsBox2HeartFill } from "react-icons/bs";
import Tooltips from "./components/TooltipDes";
function FavouriteSong() {
    return (
        <div className="row">
            <div className="col-6">
                <Tooltips title="Add to your favourite list" >
                    <button id="export" className="btn btn-outline-dark">
                        <IoHeartCircleOutline size={20} color="red"/>
                        <br />
                        <b>Add</b>
                    </button>
                </Tooltips>
            </div>
            <div className="col-6">
                <Tooltips title="Import your file to edit or play audio">
                    <button id="import" className="btn btn-outline-dark">
                        <BsBox2HeartFill size={20} color="red" />
                        <br />
                        <b>Favourite list</b>
                    </button>
                </Tooltips>
            </div>
        </div>
    )
}
export default FavouriteSong;