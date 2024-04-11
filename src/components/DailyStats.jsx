import React from "react";

const DailyStats = () => {
  return (
    <div className="daily-stats-container gradient-border">
      <div className="metric-container">
        <span className="metric-title">Crypto Price</span>
        <span className="metric-value">$60k USD</span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Supported</span>
        <span className="metric-value">8 Chains</span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Total Liquidity</span>
        <span className="metric-value">$700M</span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Total Trades</span>
        <span className="metric-value">$100B</span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Daily Active Users</span>
        <span className="metric-value">700.k+</span>
      </div>
    </div>
  );
};

export default DailyStats;
