


function CardFeatures({text1, text2, obj1, obj2 }) {
    return (
        <div className="row ">
            <div className="borderFeatures col-4 mt-5 d-flex flex-column align-items-center ">
                <h3 className="gradientTitleStrud text-center" >{text1}</h3>
               
                    {obj1 }
               
            </div>

            <div className="borderFeatures mx-5 col-6 mt-5 d-flex flex-column align-items-center">
                <h3 className="gradientTitleStrud text-center" >{text2}</h3>
                <div className="mt-2">
                    {obj2 }
                </div>

            </div>
        </div>
    )
}
export default CardFeatures