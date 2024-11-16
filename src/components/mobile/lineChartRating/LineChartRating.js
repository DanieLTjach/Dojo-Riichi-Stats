import React from "react";
import { Line } from "react-chartjs-2";
import "./style.css";

function LineChartRating({ chartData }) {
    return (
        <div className="mobile_chart-containerRating">
            <h3>Графік зміни рейтингу</h3>
            <Line
                data={chartData}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    );
}

export default LineChartRating;
