import React from "react";

function StatusResult({ status }) {
  if (!status) return null;
  return (
    <div
      id="status-result"
      className={`result ${status === "pass" ? "status-pass" : "status-fail"}`}
    >
      Status: {status === "pass" ? "Pass 🎉" : "Fail 😞"}
    </div>
  );
}

export default StatusResult;