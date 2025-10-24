
import {Link } from 'react-router-dom';
function NavigationBar() {
    return (
        
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
           
        
    )
    
}
export default NavigationBar;