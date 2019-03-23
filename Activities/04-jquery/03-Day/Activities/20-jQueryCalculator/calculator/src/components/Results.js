import React from "react";

const Results = (props) => (
    <div className="col-lg-6">
    <div className="card">
      <h3 className="card-header">Result</h3>
      <div className="card-body">
        <h1 id="first-number">{props.num1}</h1>
        <h1 id="operator">{props.operator}</h1>
        <h1 id="second-number">{props.num2}</h1>
        <hr/>
        <h1 id="result">{props.result}</h1>
      </div>
    </div>
  </div>
  );

export default Results;