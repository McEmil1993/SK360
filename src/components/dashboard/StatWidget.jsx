import React from "react";

const StatWidget = ({ bg, icon, title, value, link = "#" }) => {
  return (
    <div className="col-xl-3 col-md-6 mb-3">
      <div className={`widget widget-stats ${bg}`}>
        <div className="stats-icon">
          <i className={`fa ${icon}`}></i>
        </div>

        <div className="stats-info">
          <h4>{title}</h4>
          <p>{value}</p>
        </div>

        <div className="stats-link">
          <a href={link}>
            View Detail <i className="fa fa-arrow-alt-circle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StatWidget;
