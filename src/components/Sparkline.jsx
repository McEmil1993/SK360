import React from "react";
import Chart from "react-apexcharts";

const Sparkline = ({ data, color = "#0d6efd" }) => {
  const options = {
    chart: {
      type: "line",
      sparkline: { enabled: true }
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    tooltip: { enabled: true },
    colors: [color]
  };

  const series = [{ data }];

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height={50}
      width={120}
    />
  );
};

export default Sparkline;
