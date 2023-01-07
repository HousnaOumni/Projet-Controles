import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
              <li><Link to='/' >Accueil</Link></li>
              <li><Link to='/ListPhotos' >listPhoto</Link></li>
              <li><Link to='/PhotoParId/1'>PhotoParId</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;