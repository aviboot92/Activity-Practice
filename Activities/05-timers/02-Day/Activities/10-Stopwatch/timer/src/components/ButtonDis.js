import React from "react";

const ButtonDis = (props) => (
    <div id="buttons">
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <button onClick={props.reset} id="reset">Reset</button>
    <button id="lap">Lap</button>
  </div>
);

export default ButtonDis;