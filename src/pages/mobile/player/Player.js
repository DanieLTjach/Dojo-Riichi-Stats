import { useParams } from "react-router-dom";
import trendChartData from "../../../entities/utils/UsePlayerChartDataTrend";
import ratingChartData from "../../../entities/utils/UsePlayerChartDataRating";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChartTrend from "../../../components/mobile/lineChartTrend/LineChartTrend";
import LineChartRating from "../../../components/mobile/lineChartRating/LineChartRating";
import "./style.css";

Chart.register(CategoryScale);

const Player = ({ playerList }) => {

    const { id } = useParams();

    const player = playerList.find(player => player.id === id);

    if(!player) {
        return <p className="loader">Завантаження...</p>
    }

    const chartDataTrend = trendChartData(player);
    const chartDataRating = ratingChartData(player);

    return (
        <main className="mobile__main_player">
            <div className="mobile__main_player_title">{player.name}: {player.id}</div>
            <div className="mobile__main_player_content">
                <div className="mobile__main_player_trends">
                    <LineChartTrend chartData={chartDataTrend}/>
                    <h2>Статистика гравця:</h2>
                    <p>Місце у рейтингу: {player.playerStats.place}</p>
                    <p>Рейтинг гравця: {parseFloat(player.playerStats.player_rating).toFixed(1)}</p>
                    <p>Кількість ігр: {player.playerStats.gamesPlayed}</p>
                    <p>Soul ID гравця: {player.playerStats.soulID}</p>
                </div>
                <div className="mobile__main_player_raitingChange">
                    <LineChartRating chartData={chartDataRating}/>
                    <div className="mobile__main_player_raitingChange_info">
                        <div>
                            <span>Середній інкремент: {player.playerStats.average_increment}</span>
                            <span>Середнє місце: {player.playerStats.average_place}</span>
                        </div>
                        <div>
                            <span>Відсоток 1 місць: {parseFloat(player.playerStats.persentageFirstPlace).toFixed(1)}%</span>
                            <span>Відсоток 2 місць: {parseFloat(player.playerStats.persentageSecondPlace).toFixed(1)}%</span>
                            <span>Відсоток 3 місць: {parseFloat(player.playerStats.persentageThirdPlace).toFixed(1)}%</span>
                            <span>Відсоток 4 місць: {parseFloat(player.playerStats.persentageFourthPlace).toFixed(1)}%</span>
                            <span>Відсоток ігор з негативним рахунком: {parseFloat(player.playerStats.persentageOfNegativeRank).toFixed(1)}%</span>
                        </div>
                        <div>
                            <span>Відсоток зігранних ігор від усіх: {parseFloat(player.playerStats.persentageOfGamesPlayedFromAll).toFixed(1)}%</span>
                            <span>Сума очок: {player.playerStats.sumOfPoints}</span>
                            <span>Сума заробленого рейтингу: {parseFloat(player.playerStats.amountOfRatingEarned).toFixed(1)}</span>
                        </div>
                        <div>
                            <span>Max очок: {player.playerStats.maxPoints}</span>
                            <span>Min очок: {player.playerStats.minPoints}</span>
                            <span>Середня кількість очок: {player.playerStats.averangePoints}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Player;
