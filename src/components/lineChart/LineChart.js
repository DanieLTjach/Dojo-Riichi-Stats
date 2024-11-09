import React from "react";
import { Line } from "react-chartjs-2";
import "./style.css";

function LineChart({ chartData}) {
    return (
        <div className="chart-container">
            <h3>Trends</h3>
            <Line
                data={chartData}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            reverse: true, 
                            beginAtZero: false,
                            suggestedMin: 1,
                            suggestedMax: 4,
                            ticks: {
                                stepSize: 1,
                            },
                        },
                        x: {
                            display: true,
                            ticks: {
                                display: false,
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                }}
            />
        </div>
    );
}

export default LineChart;
