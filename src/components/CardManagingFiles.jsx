
function CardManagingFiles({ image, objects, text }) {
    return (
        <div className="card" style={{ width: "18rem", height: "300px" }} >
            <img src={image} className="card-img-top" alt="..." style={{ maxHeight: '150px', width: 'auto', objectFit: 'cover' }} />
            <div className="card-body">
                <h5 className="card-title">{text}</h5>
                <div >
                    {objects }
                        </div>
            </div>
                        </div>
                    )}
              
    

export default CardManagingFiles;
