import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Characters from "./components/Characters";
import styled from "styled-components";

//Styles
const ReactWarsHeader = styled.h1`
  color: red;
`
const PeopleStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
.character{
  background-color: #392061;
  width: 400px;
  margin-bottom: 60px;
  margin-left: 40px;
  margin-right: 30px;
  border-radius: 50px;
  color: white;

  h3{
    color: black;
    text-decoration-style: underline;
  }
}
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [people, setPeople] = useState([]);


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=> {
    axios.get("https://swapi.co/api/people")
      .then(response => {
        setPeople(response.data.results);
      })
      .catch(error =>{
        console.log(error);
      })
  })


  return (
    <div className="App">
      <ReactWarsHeader className="Header">React Wars</ReactWarsHeader>
      <PeopleStyle className = "character">
      {
          people.map(person => <Characters props={person} key={person.url}/>)
      }
      </PeopleStyle>
    </div>
  );
}

export default App;
