import React, { useState } from "react";
import BranchFilterForm from "./BranchFilterForm";
import CollegeButtons from "./CollegeButtons";
import BranchOutput from "./BranchOutput";

function BranchAnalyzer({ csvData }) {
  const [branchCode, setBranchCode] = useState("");
  const [collegeCode, setCollegeCode] = useState(null);
  const [output, setOutput] = useState("");

  const handleBranchFilter = () => {
    setCollegeCode(null);
    setOutput(
      <BranchOutput
        csvData={csvData}
        branchCode={branchCode}
        collegeCode={null}
      />
    );
  };

  const handleCollegeFilter = (code) => {
    setCollegeCode(code);
    setOutput(
      <BranchOutput
        csvData={csvData}
        branchCode={branchCode}
        collegeCode={code}
      />
    );
  };

  return (
    <section id="branch-section">
      <h2>Filter by Branch Code</h2>
      <BranchFilterForm
        branchCode={branchCode}
        setBranchCode={setBranchCode}
        onFilter={handleBranchFilter}
      />
      <CollegeButtons onFilter={handleCollegeFilter} />
      <div id="branch-output">{output}</div>
    </section>
  );
}

export default BranchAnalyzer;