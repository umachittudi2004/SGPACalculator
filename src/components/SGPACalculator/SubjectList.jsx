import React from "react";

function SubjectList({ sgpaList, setSgpaList }) {
  const handleDelete = (idx) => {
    const newList = sgpaList.filter((_, i) => i !== idx);
    setSgpaList(newList);
  };

  return (
    <ul id="subject-list">
      {sgpaList.map((subject, idx) => (
        <li key={idx}>
          Subject {idx + 1} - Grade: {subject.grade}, Credits: {subject.credits}
          <button
            className="delete-button"
            onClick={() => handleDelete(idx)}
            style={{ marginLeft: 10 }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SubjectList;