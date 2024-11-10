import { useState } from "react";

const UsePlayerChartDataRating = (player) => {
    const startDate = new Date("2024-05-10");
    const endDate = new Date();

    function getDataInRange(startDate, endDate) {
        const dates = [];
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    }

    const [chartData, setChartData] = useState({
        labels: getDataInRange(startDate, endDate).map(date => date.toLocaleDateString()),
        datasets: [
            {
                label: "Player Position",
                data: player.ratingChange,
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