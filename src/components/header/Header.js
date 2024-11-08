import "./style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="app__header">
            <NavLink to="/">
                <p className="app__heeader_title">Dojo Rating Tracker</p>
            </NavLink>
        </header>
    );
}
export default Header;
