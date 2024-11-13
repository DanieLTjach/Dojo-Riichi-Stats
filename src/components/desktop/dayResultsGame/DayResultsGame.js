import "./style.css";

const DayResultsGame = (props) => {
    const game = props.game

    let players = []

    for (let key in game) {
        if(typeof game[key] === 'object' && game[key] !== null) {
            players.push(game[key])
        }
    }

    return (
        <div className="app__main_dayResultsGame_item">
            <p>Гра №{game.GameID}</p>
            <div className="app__main_dayResultsGame_item_players">
                {
                    players.map((player, index) => (
                        <div key={index} className="app__main_dayResultsGame_item_player">
                            <span>{player.UserName}: <br/>{player.Score}</span>
                        </div>
                    ))
                }
            </div>
            <span>Дата: {game.player_1.AddedAt}</span>
        </div>
    );
}

export default DayResultsGame;