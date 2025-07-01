import React from "react";

function SgpaResult({ sgpa }) {
  return (
    <div id="sgpa-result" className="result">
      {sgpa !== null ? `SGPA: ${sgpa.toFixed(2)}` : null}
    </div>
  );
}

export default SgpaResult;