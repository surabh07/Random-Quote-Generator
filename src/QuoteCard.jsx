import React from "react";

const QuoteCard = ({ quote, author, handleClick, loading, error }) => {
  return (
    <div className="container">
      <h1>Random Quote Generator</h1>
      <br></br>
      {loading ? (
        <>
          <p>Loading...</p>
          <button id="btn" onClick={handleClick} disabled={loading}>
            Fetching...
          </button>
        </>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <p>"{quote}"</p>
          <br></br>
          <p id="author">-{author}</p>
          <br />
          <button id="btn" onClick={handleClick} disabled={loading}>
            New Quote
          </button>
        </>
      )}
    </div>
  );
};

export default QuoteCard;
