import React, { useEffect, useState } from "react";
import data from "../database/data";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  const question = data[0];

  useEffect(() => {
    console.log(data);
  }, []);

  function handleSelect() {
    console.log("Question answer selected");
  }

  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>

      <ul key={question.id}>
        {question.options.map((q, index) => (
          <li key={index}>
            <input
              value={false}
              onChange={() => handleSelect()}
              type="radio"
              name="options"
              id={`q${index}-option`}
            />
            <label className="text-primary" htmlFor={`q${index}-option`}>
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
