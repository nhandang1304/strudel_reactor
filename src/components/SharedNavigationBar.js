import { NavLink, Routes, Route } from "react-router-dom";
import Home from "../Home";
import StrudelDemo from "../StrudelDemo";
import "../css/NewDesign.css";
function NavigationBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link me-3" aria-current="page" to="/home">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link me-3" aria-current="page" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link me-3" aria-current="page" to="/create">
                                    New Project
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/create" element={<StrudelDemo />} />
            </Routes>
        </>
    );
}

export default NavigationBar;
