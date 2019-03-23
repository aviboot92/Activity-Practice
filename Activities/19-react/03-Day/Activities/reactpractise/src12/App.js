import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendsCard from "./components/FriendsCard";
import friends from "./friends.json"

const App = () => (
  <Wrapper>
    <Title>FriendsCard List</Title>
    <FriendsCard name={friends[0].name} image = {friends[0].image} occupation = {friends[0].occupation} location= {friends[0].location} />
    <FriendsCard name={friends[1].name} image = {friends[1].image} occupation = {friends[1].occupation} location= {friends[1].location}/>
    <FriendsCard name={friends[2].name} image = {friends[2].image} occupation = {friends[2].occupation} location= {friends[2].location}/>
  </Wrapper>
);

export default App;
