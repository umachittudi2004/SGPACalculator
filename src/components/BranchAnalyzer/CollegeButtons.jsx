import React from "react";

function CollegeButtons({ onFilter }) {
  return (
    <div className="college-buttons">
      <button
        className="college-button"
        onClick={() => onFilter("P3")}
      >
        P3 College
      </button>
      <button
        className="college-button"
        onClick={() => onFilter("MH")}
      >
        MH College
      </button>
      <button
        className="college-button"
        onClick={() => onFilter("ALL")}
      >
        Both Colleges
      </button>
    </div>
  );
}

export default CollegeButtons;