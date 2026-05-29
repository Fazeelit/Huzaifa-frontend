import React from "react";
import RevenueTrend from "./RevenueTrend";

const DashboardGraphs = () => {
  return (
    <div className="mt-7 grid grid-cols-1 gap-6">
      <RevenueTrend />
    </div>
  );
};

export default DashboardGraphs;
