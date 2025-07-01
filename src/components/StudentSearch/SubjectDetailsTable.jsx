import React from "react";

function SubjectDetailsTable({ subjects }) {
  return (
    <table id="subject-details-table">
      <thead>
        <tr>
          <th>Subject Code</th>
          <th>Subject Name</th>
          <th>Internal Marks</th>
          <th>Grade</th>
          <th>Credits</th>
        </tr>
      </thead>
      <tbody>
        {subjects.map((subject, idx) => (
          <tr
            key={idx}
            className={
              subject.grade === "F" || subject.grade === "ABSENT"
                ? "status-fail-table"
                : ""
            }
          >
            <td>{subject.subjectCode}</td>
            <td>{subject.subjectName}</td>
            <td>{subject.internalMarks}</td>
            <td>{subject.grade}</td>
            <td>{subject.credits}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SubjectDetailsTable;