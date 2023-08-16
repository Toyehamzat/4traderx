import { Bar } from "react-chartjs-2";
import React from "react";
import { Chart as chartJS, Colors, plugins } from "chart.js/auto";

function Chart({ chartData }) {
  return (
    <Bar
      data={chartData}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        pluggins: {
          legend: {
            display: true,
            position: "right",
            labels: {
              pointStyle: "circle",
            },
          },
          title: {
            display: false,
            text: "Zonal Sales",
            Color: "#001755",
            font: {
              size: 14,
              weight: 500,
            },
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
            },
          },
          y: {
            display: true,
            grid: {
              display: true,
              color: "#D7D7D7",
              borderDash: [3, 3],
            },
          },
        },
      }}
    />
  );
}

export default Chart;
