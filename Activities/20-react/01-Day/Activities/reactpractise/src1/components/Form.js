import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleChange =  (event)=>{
    console.log(event.target);
    const {name,value} = event.target;
    this.setState({
      [name] : value
    });

  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Username:${this.state.username}, Password :${this.state.password}`);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          name = "username"
          onChange = {this.handleChange}
          value ={this.state.username}
        />
        <input
          type="password"
          placeholder="Password"
          name = "password"
          onChange = {this.handleChange}
          value= {this.state.password}
        />
        <button >Submit</button>
      </form>
    );
  }
}

export default Form;
