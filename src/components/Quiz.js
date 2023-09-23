import React from "react";
import Questions from "./Questions";

const Quiz = () => {
  function handleNext() {
    console.log("Next button clicked");
  }

  function handlePrev() {
    console.log("Prev button clicked");
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* TODO: Display questions in there */}
      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="btn next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
