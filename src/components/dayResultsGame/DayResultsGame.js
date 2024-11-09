import "./style.css";

const DayResultsGame = (props) => {
    return (
        <div className="app__main_dayResultsGame_item">
            <p>Гра №{props.game.gameNumber}</p>
            <div className="app__main_dayResultsGame_item_players">
                {
                    props.game.players.map((player, index) => (
                        <div key={index} className="app__main_dayResultsGame_item_player">
                            <span>{player.name}: {player.score}</span>
                        </div>
                    ))
                }
            </div>
            <span>Дата: {props.game.date}</span>
        </div>
    );
}

export default DayResultsGame;