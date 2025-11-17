import { IoHeartCircleOutline } from "react-icons/io5";
import { BsBox2HeartFill } from "react-icons/bs";
import Tooltips from "./components/TooltipDes";
function FavouriteSong({ addFavourite, currentSong }) {
    return (
       /* <div className="row">*/
            <div className="col-6">
                <Tooltips title="Add to your favourite list" >
                <button id="export" className="btn btn-outline-light"
                    onclick={() =>
                    {
                        if (currentSong) { addFavourite(currentSong) }
                        else {
                            alert("No song to add!")
                        };
            } }>
                        <IoHeartCircleOutline size={30} color="red"/>
                        <br />
                        <b>Add</b>
                    </button>
                </Tooltips>
            </div>
        
    )
}
export default FavouriteSong;