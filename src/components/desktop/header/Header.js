import "./style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="app__header">
            <div className="app__header__side" /> {/* Empty spacer */}
            
            <NavLink to="/" className="app__header__center">
                <p className="app__heeader_title">Dojo Rating Tracker</p>
            </NavLink>

            <NavLink to="/" className="app__header__logo-link">
                <img src="/header_logo.svg" alt="Logo" className="app__header__logo" />
            </NavLink>
        </header>
    );
};

export default Header;
