import { NavLink } from "react-router-dom";
import "./style.css";

const PlayersCard = (props) => {
    return (
        <div className="players">
            <NavLink to={`/player/${props.id}`} className="players__info">
                <p>{props.nickname}</p>
                <span>{props.games} games played</span>
            </NavLink>
        </div>
    );
}

export default PlayersCard;