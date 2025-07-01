import React from "react";
import CSVUpload from "./CSVUpload";
import StudentSearch from "./StudentSearch/StudentSearch";

function CsvAndStudentTab({ csvData, setCsvData }) {
  return (
    <div>
      <CSVUpload setCsvData={setCsvData} />
      <StudentSearch csvData={csvData} />
    </div>
  );
}

export default CsvAndStudentTab;