import React from "react";
import Cards from "../Dashboard/Card";
import DashboardGraphs from "../Dashboard/DashboardGraph";
import LowStockAlert from "../Dashboard/LowStockAlert";

const Dashboard = () => {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-cyan-50 via-white to-sky-100 p-3 shadow-sm sm:p-4">
      {/* Top Cards */}
      <Cards />

      {/* Graphs */}
      <DashboardGraphs />

      <div className="mt-7">
        <LowStockAlert />
      </div>
    </div>
  );
};

export default Dashboard;
