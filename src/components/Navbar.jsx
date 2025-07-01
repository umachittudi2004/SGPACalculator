import React from "react";

function Navbar({ activeTab, setActiveTab, onReset }) {
  return (
    <nav className="navbar">
      <div className="navbar-title">SGPA Calculator</div>
      <div className="navbar-tabs">
        <button
          className={activeTab === "sgpa" ? "active" : ""}
          onClick={() => setActiveTab("sgpa")}
        >
          SGPA Calculator
        </button>
        <button
          className={activeTab === "csv" ? "active" : ""}
          onClick={() => setActiveTab("csv")}
        >
          CSV Upload & Search
        </button>
        <button
          className={activeTab === "branch" ? "active" : ""}
          onClick={() => setActiveTab("branch")}
        >
          Branch Analyzer
        </button>
        <button className="reset-navbar-btn" onClick={onReset}>
          Reset
        </button>
      </div>
    </nav>
  );
}

export default Navbar;