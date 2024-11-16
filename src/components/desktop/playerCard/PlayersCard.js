import { NavLink } from "react-router-dom";
import "./style.css";

const PlayersCard = (props) => {
    return (
        <div className="players">
            <NavLink to={`/player/${props.id}`} className="players__info">
                <p>{props.nickname}</p>
                <span>зіграно ігор: {props.games}</span>
            </NavLink>
        </div>
    );
}

export default PlayersCard;