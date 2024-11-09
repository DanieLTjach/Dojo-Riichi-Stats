import { useState, useEffect } from "react";

const UsePlayerChartDataTrend = (player) => {
    const [crownIcon, setCrownIcon] = useState(null);
    const [chartData, setChartData] = useState({
        labels: player.trendsLastGames.map((_, index) => index + 1 + " game"),
        datasets: [
            {
                label: "Player Position",
                data: player.trendsLastGames,
                borderColor: "red",
                backgroundColor: "red",
                pointBackgroundColor: "red",
                pointBorderColor: "red",
                pointStyle: 'circle',
                pointRadius: player.trendsLastGames.map(position =>
                    position === 1 ? 10 : 5
                ),
            },
        ],
    });

    useEffect(() => {
        const img = new Image();
        img.src = require("../../../assets/player/crown.png");
        img.width = 25;
        img.height = 25;
        img.alt = "Crown icon";
        img.onload = () => {
            setCrownIcon(img);
        };
    }, []);

    useEffect(() => {
        if (crownIcon) {
            setChartData((prevChartData) => ({
                ...prevChartData,
                datasets: [
                    {
                        ...prevChartData.datasets[0],
                        pointStyle: player.trendsLastGames.map(position =>
                            position === 1 ? crownIcon : 'circle'
                        ),
                    },
                ],
            }));
        }
    }, [crownIcon, player.trendsLastGames]);

    return chartData;
};

export default UsePlayerChartDataTrend;
