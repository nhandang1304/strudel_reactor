import Tooltips from "./components/TooltipDes"
import { NavLink } from "react-router-dom";
function FavoriteList() {
    return (
        <div className="col-6">
            <Tooltips title="See your favorite List" >
                <NavLink to="/favourites" className="btn btn-outline-light text-center d-block">
                    
                    <b>See your Favorite List</b>
                </NavLink>
            </Tooltips>
        </div>
    )
}
export default FavoriteList