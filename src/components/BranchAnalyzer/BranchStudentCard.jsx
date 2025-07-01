import React from "react";

function BranchStudentCard({ hallticket, backlogs }) {
  const imageUrl = `https://info.aec.edu.in/ACET/StudentPhotos/${hallticket}.jpg`;
  const status = backlogs.length === 0 ? "pass" : "fail";

  return (
    <div className="student-card">
      <div className="student-card-header">
        <img
          src={imageUrl}
          alt="student"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/150x200?text=No+Photo";
          }}
        />
        <div className="student-info">
          <h3>{hallticket}</h3>
          <span
            className={`status-badge ${
              status === "pass" ? "status-pass" : "status-fail"
            }`}
          >
            {status === "pass" ? "Pass " : "Fail "}
          </span>
        </div>
      </div>
      <div className="subject-list">
        {backlogs.length === 0 ? (
          <div className="subject-card">No Backlogs </div>
        ) : (
          backlogs.map((subj, idx) => (
            <div className="subject-card subject-fail" key={idx}>
              {subj}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BranchStudentCard;