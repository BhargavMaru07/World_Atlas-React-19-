import React, { useEffect, useRef } from "react";
// import { Chart } from "chart.js/auto";

function Population() {
  const chartRef = useRef(null); // To store the chart instance
  const canvasRef = useRef(null); // To store the canvas DOM element

  useEffect(() => {
    // Get the canvas context
    const ctx = canvasRef.current.getContext("2d");

    // Create the chart instance and save it to chartRef
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "India",
          "China",
          "United States",
          "Indonesia",
          "Pakistan",
          "Nigeria",
          "Brazil",
          "Bangladesh",
          "Russia",
          "Mexico",
        ],
        datasets: [
          {
            label: "#Approx Population",
            data: [
              1450935791,
              1419321278,
              341663331,
              283487931,
              251269164,
              232679478,
              21980326,
              173562364,
              143427296,
              13079861,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)", // Red
              "rgba(54, 162, 235, 0.2)", // Blue
              "rgba(255, 206, 86, 0.2)", // Yellow
              "rgba(75, 192, 192, 0.2)", // Green
              "rgba(153, 102, 255, 0.2)", // Purple
              "rgba(255, 159, 64, 0.2)", // Orange
              "rgba(201, 203, 207, 0.2)", // Light Gray
              "rgba(100, 181, 246, 0.2)", // Light Blue
              "rgba(255, 171, 145, 0.2)", // Coral
              "rgba(174, 234, 0, 0.2)", // Lime Green
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)", // Red
              "rgba(54, 162, 235, 1)", // Blue
              "rgba(255, 206, 86, 1)", // Yellow
              "rgba(75, 192, 192, 1)", // Green
              "rgba(153, 102, 255, 1)", // Purple
              "rgba(255, 159, 64, 1)", // Orange
              "rgba(201, 203, 207, 1)", // Light Gray
              "rgba(100, 181, 246, 1)", // Light Blue
              "rgba(255, 171, 145, 1)", // Coral
              "rgba(174, 234, 0, 1)", // Lime Green
            ],

            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }); // Empty dependency array ensures this runs only once

  return (
    <div className="container population-section">
      <canvas ref={canvasRef} id="myChart"></canvas>
    </div>
  );
}

export default Population;
