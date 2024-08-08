"use client";

import React, { RefAttributes, useEffect, useRef } from "react";
import styles from "./balance.module.css";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface ChartRef extends HTMLCanvasElement {
  chart: Chart;
}

const BalanceChart = () => {
  const chartRef = useRef<ChartRef>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const chart = new Chart(context!, {
        type: "line",
        data: {
          labels: ["Jan24", "Feb24", "Mar24", "Apr24"],
          datasets: [
            {
              label: "Income",
              data: [120, 150, 250, 140, 205],
              fill: 'start',
            },
            {
              label: "Expenditure",
              data: [220, 200, 180, 190, 215],
              fill: 'start',
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              stacked: true,
              beginAtZero: true,
              display: false,
            },
          },
          plugins: {
            legend: {
                display: false,
            }
          },
          elements: {
            line: {
              tension: 0.4,
            },
          },
        },
      });

      chartRef.current.chart = chart;
    }
  }, [chartRef.current]);

  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h4>Ascendia Balance</h4>
          <div className={styles.amount}>
            <h2>
              $72,858<span className="text-sm">.00</span>
            </h2>
            <span>+12%</span>
          </div>
        </div>
        <button>See All</button>
      </div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BalanceChart;
