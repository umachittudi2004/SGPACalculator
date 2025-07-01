import React from "react";

function HallTicketForm({ hallticket, setHallticket, onSearch }) {
  const handleKey = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="form-group">
      <input
        type="text"
        id="hallticket-input"
        placeholder="Enter Hall Ticket Number"
        value={hallticket}
        onChange={(e) => setHallticket(e.target.value)}
        onKeyPress={handleKey}
      />
      <button id="search-hallticket" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default HallTicketForm;