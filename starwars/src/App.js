import React from 'react';
import './App.css';
import StarList from './components/StarList';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid red;
  height: 80vh;
  `;


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardContainer>
        <StarList />
      </CardContainer>
      
    </div>
  );
}

export default App;
