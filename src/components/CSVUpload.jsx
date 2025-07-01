import React, { useRef } from "react";
import { processCSV } from "./utils/csvParser";
import toast from "react-hot-toast";

function CSVUpload({ setCsvData }) {
  const fileRef = useRef();

  const handleUpload = () => {
    const file = fileRef.current.files[0];
    if (!file) {
      toast.error("Please select a CSV file.");
      // alert("Please select a CSV file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      setCsvData(processCSV(content));
      toast.success("File uploaded and processed successfully.");
      // alert("File Uploaded Successfully");
    };
    reader.readAsText(file);
  };

  return (
    <div className="csv-upload-card">
      <h2>Upload CSV for Subjects</h2>
      <div className="csv-upload-form">
        <input
          type="file"
          ref={fileRef}
          accept=".csv"
          id="csvFile"
          style={{ display: "none" }}
        />
        <label htmlFor="csvFile" className="custom-file-upload">
          Select CSV File
        </label>
        <button onClick={handleUpload} id="upload-csv">
          Upload and Process CSV
        </button>
      </div>
    </div>
  );
}

export default CSVUpload;