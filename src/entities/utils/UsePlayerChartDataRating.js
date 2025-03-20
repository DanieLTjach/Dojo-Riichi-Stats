import { useState, useEffect } from "react";

export default function usePlayerChartDataRating(player) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (!player || !player.playerStats) {
      setChartData({
        labels: [],
        datasets: [],
      });
      return;
    }

    setChartData({
      labels: player.playerStats.ratingChange.map((rc) => rc.date),
      datasets: [
        {
          label: "Rating Change",
          data: player.playerStats.ratingChange.map((rc) => rc.change),
          borderColor: "red",
          backgroundColor: "red",
          pointBackgroundColor: "red",
          pointBorderColor: "red",
        },
      ],
    });
  }, [player]);

  return chartData;
}
