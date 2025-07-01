import React from "react";
import BranchStudentCard from "./BranchStudentCard";

function BranchOutput({ csvData, branchCode, collegeCode }) {
  if (!branchCode || branchCode.length !== 2)
    return "Please enter a valid 2-character branch code.";
  if (!csvData || !csvData.length)
    return "Please upload and process a CSV file first.";

  if (!collegeCode) {
    // Branch only
    const branchStudents = [
      ...new Set(
        csvData
          .filter((row) => row.hallticket.slice(6, 8) === branchCode)
          .map((row) => row.hallticket)
      ),
    ];
    if (branchStudents.length === 0)
      return `No students found for branch code: ${branchCode}`;

    let result = [];
    let backlogCount = 0;

    branchStudents.forEach((hallTicket) => {
      const studentSubjects = csvData.filter(
        (row) => row.hallticket === hallTicket
      );
      const backlogSubjects = studentSubjects
        .filter((subject) => subject.grade === "F" || subject.grade === "ABSENT")
        .map((subject) => subject.subjectName);

      const hasBacklogs = backlogSubjects.length > 0;

      if (hasBacklogs) backlogCount++;

      result.push(
        <BranchStudentCard
          key={hallTicket}
          hallticket={hallTicket}
          backlogs={backlogSubjects}
        />
      );
    });

    return (
      <div>
        <h3>Branch Backlog Details:</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          {result}
        </div>
        <p style={{ marginTop: "16px" }}>
          <strong>Total Students with Backlogs: {backlogCount}</strong>
        </p>
      </div>
    );
  }

  // College or ALL
  if (collegeCode === "ALL") {
    return (
      <>
        {generateCollegeReport(csvData, branchCode, "P3")}
        {generateCollegeReport(csvData, branchCode, "MH")}
        {generateCombinedSummary(csvData, branchCode)}
      </>
    );
  }
  return generateCollegeReport(csvData, branchCode, collegeCode);
}

function generateCollegeReport(csvData, branchCode, collegeCode) {
  const collegeStudents = [
    ...new Set(
      csvData
        .filter((row) => {
          const studentCollege = row.hallticket.slice(2, 4);
          return (
            studentCollege === collegeCode &&
            row.hallticket.slice(6, 8) === branchCode
          );
        })
        .map((row) => row.hallticket)
    ),
  ];
  if (collegeStudents.length === 0)
    return (
      <div className="college-section" key={collegeCode}>
        <div className="college-header">
          {collegeCode} College - {branchCode} Branch
        </div>
        <p>No students found for this combination.</p>
      </div>
    );

  let details = [];
  let backlogCount = 0;

  collegeStudents.forEach((hallTicket) => {
    const studentSubjects = csvData.filter(
      (row) => row.hallticket === hallTicket
    );
    const backlogSubjects = studentSubjects
      .filter((subject) => subject.grade === "F" || subject.grade === "ABSENT")
      .map((subject) => subject.subjectName);

    const hasBacklogs = backlogSubjects.length > 0;
    if (hasBacklogs) backlogCount++;

    details.push(
      <BranchStudentCard
        key={hallTicket}
        hallticket={hallTicket}
        backlogs={backlogSubjects}
      />
    );
  });

  return (
    <div className="college-section" key={collegeCode}>
      <div className="college-header">
        {collegeCode} College - {branchCode} Branch
      </div>
      <div className="backlog-summary">
        <p><strong>Total Students: {collegeStudents.length}</strong></p>
        <p><strong>Students with Backlogs: {backlogCount}</strong></p>
        <p><strong>
          Pass Percentage: {(
            ((collegeStudents.length - backlogCount) / collegeStudents.length) *
            100
          ).toFixed(2)}%
        </strong></p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {details}
      </div>
    </div>
  );
}

function generateCombinedSummary(csvData, branchCode) {
  const totalStudents = [
    ...new Set(
      csvData
        .filter((row) => row.hallticket.slice(6, 8) === branchCode)
        .map((row) => row.hallticket)
    ),
  ];

  const studentsWithBacklogs = new Set();
  totalStudents.forEach((hallTicket) => {
    const hasBacklog = csvData
      .filter((row) => row.hallticket === hallTicket)
      .some((subject) => subject.grade === "F" || subject.grade === "ABSENT");
    if (hasBacklog) studentsWithBacklogs.add(hallTicket);
  });

  return (
    <div className="college-section" key="combined">
      <div className="college-header">
        Combined Summary - {branchCode} Branch
      </div>
      <div className="backlog-summary">
        <p><strong>Total Students Across Both Colleges: {totalStudents.length}</strong></p>
        <p><strong>Total Students with Backlogs: {studentsWithBacklogs.size}</strong></p>
        <p><strong>
          Overall Pass Percentage: {(
            ((totalStudents.length - studentsWithBacklogs.size) / totalStudents.length) *
            100
          ).toFixed(2)}%
        </strong></p>
      </div>
    </div>
  );
}

export default BranchOutput;
