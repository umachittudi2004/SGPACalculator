import React, { useState } from "react";
import { gradePoints } from "../utils/sgpaClaculator";
import toast from "react-hot-toast";

function GradeInputForm({ sgpaList, setSgpaList }) {
  const [grade, setGrade] = useState("");
  const [credits, setCredits] = useState("");

  const handleAdd = () => {
    const gradeUpper = grade.toUpperCase();
    const creditsInt = parseInt(credits);
    if (
      gradePoints[gradeUpper] === undefined ||
      isNaN(creditsInt) ||
      creditsInt <= 0
    ) {
      toast.error("Please enter valid grade and credits.");
      // alert("Please enter valid grade and credits.");
      return;
    }
    setSgpaList([...sgpaList, { grade: gradeUpper, credits: creditsInt }]);
    setGrade("");
    setCredits("");
  };

  return (
    <div id="sgpa-form">
      <div className="form-group">
        <input
          type="text"
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Grade (O, A, B, C, D, E, F)"
        />
        <input
          type="number"
          id="credits"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
          placeholder="Credits"
        />
      </div>
      <button id="add-grade" onClick={handleAdd}>
        Add Grade
      </button>
    </div>
  );
}

export default GradeInputForm;