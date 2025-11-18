
import { NavLink } from "react-router-dom";


export default function CardNav({ titleCard, desCard, buttonCard, icons = [] }) {
    return (
        <div className="col-5 mb-5">
            <div className="card cardCustom" style={{ width: "35rem" }}>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        
                        <div className="d-flex align-items-center">
                            {icons.map((Icon, index) => (
                                <div key={index} className="me-2">
                                    {Icon}
                                </div>
                            ))}
                        </div>
 
                        <div className="col-7 ms-5">
                            <div className="card">
                                <h2 className="card-title gradient-text text-center">{titleCard}</h2>
                            </div>
                            <h5 className="text-center cardDescription mt-3">{desCard}</h5>

                            <NavLink
                                to="/favourites"
                                className="fw-bold btn btn-warning btn-rounded display-2 fs-4 gradient-btn"
                            >
                                {buttonCard}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

