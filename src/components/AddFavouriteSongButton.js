import { IoHeartCircleOutline } from "react-icons/io5";
import { BsBox2HeartFill } from "react-icons/bs";
import Tooltips from "./TooltipDes";
function FavouriteSong({ addFavourite }) {
    return (
        <div className="col-6">
            <Tooltips title="Add to your favourite list">
                <button
                    className="btn btn-outline-light"
                    onClick={addFavourite}
                >
                    <IoHeartCircleOutline size={30} color="red" />
                    <br />
                    <b>Add</b>
                </button>
            </Tooltips>
        </div>
    );
}


export default FavouriteSong;