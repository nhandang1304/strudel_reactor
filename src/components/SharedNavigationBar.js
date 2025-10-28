import { NavLink, Routes, Route } from "react-router-dom";
import Home from "../Home";
import StrudelDemo from "../StrudelDemo";
import "../css/NewDesign.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
function NavigationBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-black">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link me-3" aria-current="page" to="/home">
                                    <IoHomeOutline size={25} className="me-2" />                                   
                                        Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link me-3" aria-current="page" to="/about">
                                    <IoIosInformationCircleOutline size={25} className="me-2" />
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
