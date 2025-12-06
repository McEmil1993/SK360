import React from "react";

const StatCard = ({ title, value, color }) => {
  return (
    <div className="col-xl-3 col-md-6 mb-3">
      <div className="widget widget-stats" style={{ background: color }}>
        <div className="stats-info">
          <h4>{title}</h4>
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
