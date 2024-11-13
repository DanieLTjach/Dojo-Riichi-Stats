import { useState } from "react";

const UsePlayerChartDataRating = (player) => {
    const [chartData, setChartData] = useState({
        labels: player.playerStats.ratingChange.map((ratingChange) => ratingChange.date),
        datasets: [
            {
                label: "Rating Change",
                data: player.playerStats.ratingChange.map((ratingChange) => ratingChange.change),
                borderColor: "red",
                backgroundColor: "red",
                pointBackgroundColor: "red",
                pointBorderColor: "red",
            },
        ],
    });

    return chartData;
};

export default UsePlayerChartDataRating;