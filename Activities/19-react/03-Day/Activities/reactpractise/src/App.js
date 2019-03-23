import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends
  };

  removeFriend = (id) =>{

    const friends = this.state.friends.filter((value)=>{
      return value.id !== id;
    });
    this.setState({friends});
  };
  


  render(){
    return(
      <Wrapper>
      <h1 className="title">Friends List</h1>
      {this.state.friends.map((value)=>{
         return (<FriendCard
        removeFriend = {this.removeFriend}
        key ={value.id}
        {...value}
      />)
    })}
    </Wrapper>
    );
  }
}
export default App;
