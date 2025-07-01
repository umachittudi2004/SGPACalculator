import React from "react";
import GradeInputForm from "./GradeInputForm";
import SubjectList from "./SubjectList";
import SgpaResult from "./SgpaResult";
import { calculateSGPA } from "../utils/sgpaClaculator";
import toast from "react-hot-toast";

function SGPACalculator({ sgpaList, setSgpaList }) {
  const [sgpa, setSgpa] = React.useState(null);

  const handleCalculate = () => {
    if (sgpaList.length === 0) {
      toast.error("Please add at least one subject.");
      // alert("Please add at least one subject.");
      return;
    }
    setSgpa(calculateSGPA(sgpaList));
  };

  return (
    <div>
      <h2>SGPA Calculator</h2>
      <GradeInputForm sgpaList={sgpaList} setSgpaList={setSgpaList} />
      <SubjectList sgpaList={sgpaList} setSgpaList={setSgpaList} />
      <button id="calculate-sgpa" onClick={handleCalculate}>
        Calculate SGPA
      </button>
      <SgpaResult sgpa={sgpa} />
    </div>
  );
}

export default SGPACalculator;