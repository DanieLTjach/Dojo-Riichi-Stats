import { NavLink } from "react-router-dom";
import "./style.css";

const PlayersCard = (props) => {
    return (
        <div className="mobile__players">
            <NavLink to={`/player/${props.id}`} className="mobile__players_info">
                <p>{props.nickname}</p>
                <span>зіграно ігор: {props.games}</span>
            </NavLink>
        </div>
    );
}

export default PlayersCard;