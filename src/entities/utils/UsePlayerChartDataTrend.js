import { useState, useEffect } from "react";

function usePlayerChartDataTrend(player) {
  const [crownIcon, setCrownIcon] = useState(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  // Load the image once
  useEffect(() => {
    const img = new Image();
    img.src = require("../../assets/player/crown.png");
    img.width = 25;
    img.height = 25;
    img.alt = "Crown icon";
    img.onload = () => setCrownIcon(img);
  }, []);

  // Update whenever the player or crownIcon changes
  useEffect(() => {
    // If player or player.TenGames is missing, we can’t read data yet.
    // Just set an empty chart or do nothing for now.
    if (!player || !player.TenGames) {
      setChartData({
        labels: [],
        datasets: [],
      });
      return;
    }

    // Otherwise we can safely read from player.TenGames
    const { places, scores } = player.TenGames;

    // Build the new chart dataset
    setChartData({
      labels: places.map((_, i) => (i + 1) + " game"),
      datasets: [
        {
          label: "Player Position",
          data: places,
          borderColor: "red",
          backgroundColor: "red",
          pointBackgroundColor: "red",
          pointBorderColor: "red",
          // For each data point, if conditions are met, use crown icon
          pointStyle: scores.map((score, idx) => {
            const place = places[idx];
            return crownIcon && score >= 50000 && place === 1
              ? crownIcon
              : "circle";
          }),
        },
      ],
    });
  }, [player, crownIcon]);

  return chartData;
}

export default usePlayerChartDataTrend;
