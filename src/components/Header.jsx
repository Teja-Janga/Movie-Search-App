
import { Link } from "react-router-dom"

function Header() {
    return (
        <nav className="header-nav">
            <Link to="/">Home 🏡</Link>
            <Link to="/favourites">Favourites ❤️</Link>
        </nav>
    );
}
export default Header