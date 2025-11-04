import Tooltips from "./components/TooltipDes"
function FavoriteList() {
    return (
        <div className="col-6">
            <Tooltips title="See your favorite List" >
                <button id="export" className="btn btn-outline-light">
                    
                    <br />
                    <b>See your Favorite List</b>
                </button>
            </Tooltips>
        </div>
    )
}
export default FavoriteList