import { Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
              <li><Link to='/' >Accueil</Link></li>
              <li><Link to='/ListUsers' >listUsers</Link></li>
              <li><Link to='/UserParId/1' >UserParId</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;