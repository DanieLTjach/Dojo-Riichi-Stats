import { useParams } from "react-router-dom";
import playerChartData from "../../entities/components/usePlayerChartDataTrend/UsePlayerChartDataTrend";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "../../components/lineChart/LineChart";
import "./style.css";

Chart.register(CategoryScale);

const Player = ({ playerList }) => {
    const { id } = useParams();
    const player = playerList.find(player => player.id === Number(id));

    const chartDataTrend = playerChartData(player);

    return (
        <main className="app__main_player">
            <div className="app__main_player_title">{player.name}: {player.id}</div>
            <div className="app__main_player_content">
                <div className="app__main_player_trends">
                    <LineChart chartData={chartDataTrend}/>
                    <h2>Player Stats:</h2>
                    <p>Місце у рейтингу: {player.playerStats.placeRank}</p>
                    <p>Рейтинг гравця: {player.playerStats.playerRank}</p>
                    <p>Кількість ігр: {player.gamesPlayed}</p>
                    <p>Середне місце: {player.playerStats.avarangePlace}</p>
                    <p>Частка зіграних ігр: {player.playerStats.shareOfGamesPlayed}%</p>
                    <p>Soul ID гравця: {player.playerStats.soulIdPlayer}</p>
                </div>
                <div className="app__main_player_raitingChange">
                    
                    <div className="app__main_player_raitingChange_info">
                        <span>Середніа інкремент: {player.playerStats.averangeIncrement}</span>
                        <span>Середнє місце: {player.playerStats.avarangePlace}</span>
                        <span>Відсоток 1 місць: {player.playerStats.persentageFirstPlace}%</span>
                        <span>Відсоток 2 місць: {player.playerStats.persentageSecondPlace}%</span>
                        <span>Відсоток 3 місць: {player.playerStats.persentageThirdPlace}%</span>
                        <span>Відсоток 4 місць: {player.playerStats.persentageFourthPlace}%</span>
                        <span>Відсоток з негативного рейтингу: {player.playerStats.persentageOfNegativeRank}%</span>
                        <span>Відсоток зігранних ігор від усіх: {player.playerStats.persentageOfGamesPlayedFromAll}%</span>
                        <span>Сума очок: {player.playerStats.sumOfPoints}</span>
                        <span>Сума заробленого рейтингу: {player.playerStats.amountOfRatingEarned}</span>
                        <span>Max очков: {player.playerStats.maxPoints}</span>
                        <span>Min очков: {player.playerStats.minPoints}</span>
                        <span>Середня кількість очків: {player.playerStats.averangePoints}</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Player;
