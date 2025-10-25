import { Link, Routes, Route } from "react-router-dom";
import Home from "../Home";
import StrudelDemo from "../StrudelDemo";
function NavigationBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/create">
                                    New Project
                                </Link>
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
