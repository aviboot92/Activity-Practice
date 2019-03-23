import React from "react";
const fullName = "Avinash";
let thoughts = "is really very tricky";
const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {fullName}</h1>
        <h2>My name has {fullName.length} letters</h2>
        <h2>I think React {thoughts}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
