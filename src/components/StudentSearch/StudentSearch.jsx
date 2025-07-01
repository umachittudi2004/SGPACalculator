import React, { useState } from "react";
import HallTicketForm from "./HallTicketForm";
import SubjectDetailsTable from "./SubjectDetailsTable";
import StatusResult from "./StatusResult";
import StudentCard from "./StudentCard";
import toast from "react-hot-toast";

function StudentSearch({ csvData }) {
  const [hallticket, setHallticket] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [status, setStatus] = useState(null);
  const [searchedHallticket, setSearchedHallticket] = useState("");


  const handleSearch = () => {
    if (!hallticket.trim()) {
      toast.error("Please enter a Hall Ticket number.");
      // alert("Please enter a Hall Ticket number.");
      return;
    }
    const filtered = csvData.filter(
      (row) => row.hallticket.toUpperCase() === hallticket.trim().toUpperCase()
    );
    setSearchedHallticket(hallticket.trim().toUpperCase());
    setSubjects(filtered);
    if (filtered.length === 0) {
      setStatus(null);
      toast.error("No data found for this Hall Ticket number.");
      // alert("No data found for this Hall Ticket number.");
      return;
    }
    const allPassed = filtered.every(
      (subject) =>
        subject.grade !== "F" && subject.grade !== "ABSENT"
    );
    setStatus(allPassed ? "pass" : "fail");
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Search by Hall Ticket Number</h2>
      <HallTicketForm
        hallticket={hallticket}
        setHallticket={setHallticket}
        onSearch={handleSearch}
      />
      {/* <div style={{ overflowX: "auto" }}>
        <SubjectDetailsTable subjects={subjects} />
      </div>
      <StatusResult status={status} /> */}
      {status && (
        <StudentCard
          hallticket={searchedHallticket}
          status={status}
          subjects={subjects}
        />

      )}
    </div>
  );
}

export default StudentSearch;