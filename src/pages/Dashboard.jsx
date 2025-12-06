import React from "react";
import MainLayout from "../layouts/MainLayout";

// Components
import StatCard from "../components/dashboard/StatCard";
import RecentActivitiesTable from "../components/dashboard/RecentActivitiesTable";
import PieChart from "../components/dashboard/PieChart";
import LegendBox from "../components/dashboard/LegendBox";
import PendingApprovalTable from "../components/dashboard/PendingApprovalTable";
import StatWidget from "../components/dashboard/StatWidget";


const Dashboard = () => {
  const widgets = [
    { bg: "bg-blue", icon: "fa-desktop", title: "TOTAL VISITORS", value: "3,291,922" },
    { bg: "bg-info", icon: "fa-link", title: "BOUNCE RATE", value: "20.44%" },
    { bg: "bg-orange", icon: "fa-users", title: "UNIQUE VISITORS", value: "1,291,922" },
    { bg: "bg-red", icon: "fa-clock", title: "AVG TIME ON SITE", value: "00:12:23" },
  ];

  const recent = [
    { classification: "MOOE", expenditures: "Office Supplies", amount: "50,000" }
  ];

  const approvals = [
    { program: "Community Outreach Program", description: "Bondpaper", amount: "5,000", status: "Pending" }
  ];

  const pieData = [
    { label: "MOOE", data: 45, color: "#f7b26a" },
    { label: "CO", data: 35, color: "#c8f786" },
    { label: "PS", data: 20, color: "#9ee9fa" }
  ];


  return (
    <MainLayout>

      {/* TOP CARDS */}
      <div className="row">
        {widgets.map((item, i) => (
          <StatWidget key={i} {...item} />
        ))}
      </div>

      {/* RECENT + PIE */}
      <div className="row mt-4">
        <div className="col-xl-6">
          <RecentActivitiesTable data={recent} />
          <PendingApprovalTable approvals={approvals} />
        </div>

        <div className="col-xl-6">
          <PieChart data={pieData} />
          <LegendBox />
        </div>
      </div>

    </MainLayout>
  );
};

export default Dashboard;
