import "./style.css";
import { NavLink } from "react-router-dom";
import PopUp from "../popupMenu/PopupMenu";

const Header = () => {
    return (
        <header className="mobile__app_header">
            <PopUp />
            <NavLink to="/">
                <p className="mobile__app_heeader_title">Dojo Rating Tracker</p>
            </NavLink>
        </header>
    );
}

export default Header;