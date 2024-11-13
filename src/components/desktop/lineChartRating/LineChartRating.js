import React from "react";
import { Line } from "react-chartjs-2";
import "./style.css";

function LineChartRating({ chartData }) {
    return (
        <div className="chart-containerRating">
            <h3>Rating Change</h3>
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