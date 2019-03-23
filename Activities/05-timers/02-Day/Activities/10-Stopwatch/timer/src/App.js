import React, { Component } from 'react';
import TimeDis from "./components/TimeDis"
import ButtonDis from "./components/ButtonDis"
import Lap from "./components/Lap"

import './App.css';

class App extends Component {

  state = {
    time: 0,
    lap: 1,
    clockRunning:false
  }

  reset =() => {

    this.setState({
      time: 0,
      lap: 1,
      clockRunning:false
    });

    // // DONE: Change the "display" div to "00:00."
    // $("#display").text("00:00");

    // // DONE: Empty the "laps" div.
    // $("#laps").text("");
  }

  start = () => {
    let timeCount = 0;
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!this.state.clockRunning) {
     setInterval(  this.setState({clockRunning : true,
      time:timeCount++
        }), 1000);
   
    }
  }
 

  render() {
    return (
      <div className="App">
        <TimeDis/>
        <ButtonDis start={this.start} reset={this.reset}/>
        <Lap/>
      </div>
    );
  }
}

export default App;
