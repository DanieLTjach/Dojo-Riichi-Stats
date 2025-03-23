import "./style.css"
import cube from "../../../assets/aside/cube.svg"
import statistics from "../../../assets/aside/statisctics.svg"
import rating from "../../../assets/aside/rating.svg"
import resources from "../../../assets/aside/resources.svg"
import { NavLink } from "react-router-dom"

const Aside = () => {

    const activeLink = "app__aside_nav_item app__aside_nav_item_active"
    const inactiveLink = "app__aside_nav_item"

    return (
        <aside className="app__aside">
            <div className="app__aside_nav">
                <ul>
                    <NavLink to="/" className={() => {return window.location.pathname === "/" ? activeLink : inactiveLink}}>
                        <img src={cube} alt="cube" />
                        <span>Останні результати</span>
                    </NavLink>
                    <NavLink to="/statistics" className={() => {return window.location.pathname === "/statistics" ? activeLink : inactiveLink}}>
                        <img src={statistics} alt="statistics" />
                        <span>Статистика гравців</span>
                    </NavLink>
                    <NavLink to="/rating" className={() => {return window.location.pathname === "/rating" ? activeLink : inactiveLink}}>
                        <img src={rating} alt="rating" />
                        <span>Загальний рейтинг</span>
                    </NavLink>
                    <NavLink to="/resources" className={() => {return window.location.pathname === "/resources" ? activeLink : inactiveLink}}>
                        <img src={resources} alt="resources" />
                        <span>Навчальні матеріали</span>
                    </NavLink>
                </ul>
            </div>
        </aside>
    );
}
export default Aside;
