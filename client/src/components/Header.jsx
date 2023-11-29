import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <nav>
            <img
                src="https://laughingsquid.com/wp-content/uploads/2015/05/Cat-Popcorn.jpg"
                alt="alt"
                className="logo"
            />
            <div className="gap" />
            <ul className="navigate">
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/movies">Movies</NavLink>
                </li>
                <li>
                    <NavLink to="/consessionstand">Consession Stand</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/movies">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
