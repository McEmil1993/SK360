import React from "react";

const BudgetSummary = ({ budget }) => {
  const items = [
    {
      label: "Total Appropriation",
      value: budget.totalAppropriation,
      icon: "analytics-outline",
      percent: 70.1,
      desc: "Better than last week (70.1%)",
    },
    {
      label: "Total MOOE Budget Limit",
      value: budget.mooeLimit,
      icon: "pricetags-outline",
      percent: 40.5,
      desc: "Better than last week (40.5%)",
    },
    {
      label: "Total PS Budget Limit",
      value: budget.psLimit,
      icon: "cart-outline",
      percent: 76.3,
      desc: "Better than last week (76.3%)",
    },
    {
      label: "Total CO Budget Limit",
      value: budget.coLimit,
      icon: "chatbox-outline",
      percent: 54.9,
      desc: "Better than last week (54.9%)",
    },
  ];

  const format = (n) => Number(n).toLocaleString();

  return (
    <div className="row mb-4">
      {items.map((item, idx) => (
        <div key={idx} className="col-xl-3 col-md-6 mb-3">
          <div className="widget widget-stats bg-white text-dark shadow-sm">

            {/* ICON */}
            <div
              className="
                stats-icon 
                stats-icon-square 
                bg-gradient-cyan-blue 
                text-white 
                d-flex 
                align-items-center 
                justify-content-center
              "
              style={{
                width: 50,
                height: 50,
                borderRadius: 6,
                fontSize: 24,
              }}
            >
              <ion-icon name={item.icon}></ion-icon>
            </div>

            {/* CONTENT */}
            <div className="stats-content">
              <div className="stats-title text-dark text-opacity-75">
                {item.label}
              </div>

              <div className="stats-number">{format(item.value)}</div>

              {/* PROGRESS BAR */}
              <div className="stats-progress progress mt-2">
                <div
                  className="progress-bar"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>

              {/* DESC */}
              <div className="stats-desc text-dark text-opacity-75 mt-1">
                {item.desc}
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default BudgetSummary;
