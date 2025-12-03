import React from "react";
import Chart from "react-apexcharts";

const AnalyticsChart = () => {
  const options = {
    chart: {
      id: "website-analytics",
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    stroke: {
      width: 3,
      curve: "smooth"
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    colors: ["#0d6efd"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.4,
        opacityFrom: 0.8,
        opacityTo: 0.2
      }
    }
  };

  const series = [
    {
      name: "Visitors",
      data: [120, 180, 160, 210, 260, 190, 300]
    }
  ];

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="area"
        height={300}
      />
    </div>
  );
};

export default AnalyticsChart;
