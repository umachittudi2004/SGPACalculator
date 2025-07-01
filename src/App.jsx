import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SGPACalculator from "./components/SGPACalculator/SGPACalculator";
import CsvAndStudentTab from "./components/CsvAndStudentTab";
import BranchAnalyzer from "./components/BranchAnalyzer/BranchAnalyzer";
import { Toaster } from "react-hot-toast";

function App() {
  const [activeTab, setActiveTab] = useState("sgpa");
  const [sgpaList, setSgpaList] = useState([]);
  const [csvData, setCsvData] = useState([]);

  const handleReset = () => {
    setSgpaList([]);
    setCsvData([]);
    setActiveTab("sgpa");
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} onReset={handleReset} />
      <div className="tab-content">
        {activeTab === "sgpa" && (
          <SGPACalculator sgpaList={sgpaList} setSgpaList={setSgpaList} />
        )}
        {activeTab === "csv" && (
          <CsvAndStudentTab csvData={csvData} setCsvData={setCsvData} />
        )}
        {activeTab === "branch" && (
          <BranchAnalyzer csvData={csvData} key={csvData.length} />
        )}
      </div>
    </div>
  );
}

export default App;