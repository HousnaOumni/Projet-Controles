import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
              <li><Link to='/'>Accueil</Link></li>
              <li><Link to='/ListPosts'>listPost</Link></li>
              <li><Link to='/PostParId/1'>PostParId</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;