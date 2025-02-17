import { Link } from "react-router-dom";
import '../css/NavBar.css'

function NavBar()
{
    return(
        <nav className="navbar">
            <div classname="navbar-brand">
                <Link to="/" >Film App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Accueil</Link>
                <Link to="/favorites" className="nav-link">Favoris</Link>

            </div>
        </nav>
    )
}

export default NavBar;