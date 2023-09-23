// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: 1,
    question:
      "If you want to import just the Component from the React library, what syntax do you use?",
    options: [
      "import React.Component from 'react'",
      "import [ Component ] from 'react'",
      "import Component from 'react'",
      "import { Component } from 'react'",
    ],
  },
  {
    id: 2,
    question:
      "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
    options: [
      "Wrap it in the React.memo higher-order component.",
      "Implement the useReducer Hook.",
      "Implement the useMemo Hook.",
      "Implement the shouldComponentUpdate lifecycle method.",
    ],
  },
  {
    id: 3,
    question: `
      How do you fix the syntax error that results from running this code?
      const person =(firstName, lastName) =>
        {
        first: firstName,
        last: lastName
        }
        console.log(person("Jill", "Wilson"))
      `,
    options: [
      "Wrap the object in parentheses.",
      "Call the function from another file.",
      "Add a return statement before the first curly brace.",
      "Replace the object with an array.",
    ],
  },
];
