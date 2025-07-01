import React from "react";

function StudentCard({ hallticket, status, subjects }) {
  const imageUrl = `https://info.aec.edu.in/ACET/StudentPhotos/${hallticket}.jpg`;

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
        {subjects.map((subject, idx) => (
          <div
            className={`subject-card ${
              subject.grade === "F" || subject.grade === "ABSENT"
                ? "subject-fail"
                : ""
            }`}
            key={idx}
          >
            <strong>{subject.subjectName}</strong> ({subject.subjectCode})  
            <br />
            Grade: {subject.grade}, Credits: {subject.credits}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentCard;
