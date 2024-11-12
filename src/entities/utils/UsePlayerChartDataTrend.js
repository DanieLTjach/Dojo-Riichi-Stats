import { useState,  useEffect  } from "react";

const UsePlayerChartDataTrend = (player) => {
    const [crownIcon, setCrownIcon] = useState(null);
    const [chartData, setChartData] = useState({
        labels: player.TenGames.places.map((_, index) => index + 1 + " game"),
        datasets: [
            {
                label: "Player Position",
                data: player.TenGames.places,
                borderColor: "red",
                backgroundColor: "red",
                pointBackgroundColor: "red",
                pointBorderColor: "red",
                pointStyle: 'circle',
            },
        ],
    });

    useEffect(() => {
        const img = new Image();
        img.src = require("../../assets/player/crown.png");
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
                        pointStyle: player.TenGames.scores.map((score, index) => {
                            const place = player.TenGames.places[index];
                            return (score >= 50000 && place === 1) ? crownIcon : 'circle';
                        }),
                    },
                ],
            }));
        }
    }, [crownIcon, player.TenGames.places]);

    return chartData;
};

export default UsePlayerChartDataTrend;
