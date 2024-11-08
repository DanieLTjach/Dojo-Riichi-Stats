import "./style.css";

const Player = (props) => {
    return (
        <div className="player">
            <div className="player__info">
                <p>{props.nickname}</p>
                <span>{props.games} games played</span>
            </div>
        </div>
    );
}

export default Player;