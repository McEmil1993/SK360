import React from "react";
import { Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

// REGISTER REQUIRED ELEMENTS
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        data: data.map(d => d.data),
        backgroundColor: data.map(d => d.color),
      }
    ]
  };

  return (
    <div className="panel panel-inverse p-3">
      <h4 className="panel-title">Budget Distribution</h4>

      <div style={{ height: 250 }}>
        <Pie
          data={chartData}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: { position: "right" },
            }
          }}
        />
      </div>
    </div>
  );
};

export default PieChart;
