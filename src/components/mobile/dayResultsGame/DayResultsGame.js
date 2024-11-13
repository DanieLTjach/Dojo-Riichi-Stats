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
        <div className="mobile__result_main_content_gameItem_item">
            <p>Гра №{game.GameID}</p>
            <div className="mobile__result_main_content_gameItem_item_players">
                {
                    players.map((player, index) => (
                        <div key={index} className="mobile__result_main_content_gameItem_item_player">
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