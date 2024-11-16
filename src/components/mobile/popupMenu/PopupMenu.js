import { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const PopupMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleLinkClick = () => {
        setIsOpen(false);
    }

    return (
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" id="menuCheckbox" checked={isOpen} onChange={handleMenuToggle}/>
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <li>
                        <NavLink to="/" onClick={handleLinkClick}>
                            <label for="menuCheckbox">Останні результати</label>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics" onClick={handleLinkClick}>
                            <label for="menuCheckbox">Статистика гравців</label>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/rating" onClick={handleLinkClick}>
                            <label for="menuCheckbox">Загальний рейтинг</label>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default PopupMenu;
