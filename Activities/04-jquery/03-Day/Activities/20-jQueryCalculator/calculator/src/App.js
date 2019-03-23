import React, { Component } from 'react';
import Header from "./components/Header.js"
import CardBody from "./components/CardBody.js"
// import Rich from "./components/Rich.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CardBody/>
       
      </div>
    );
  }
}

export default App;
