import React from "react";

function BranchFilterForm({ branchCode, setBranchCode, onFilter }) {
  return (
    <div className="form-group">
      <input
        type="text"
        id="branchInput"
        maxLength={2}
        placeholder="Enter Branch Code (e.g., 05,42,44)"
        value={branchCode}
        onChange={(e) => setBranchCode(e.target.value)}
      />
      <button onClick={onFilter}>Get Branch Backlogs</button>
    </div>
  );
}

export default BranchFilterForm;