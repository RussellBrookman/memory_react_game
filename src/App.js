import React, { Component } from 'react';
import Navbar from "./Components/Navbar"
import CardBtn from "./Components/CardBtn";
import GameLogic from "./Components/GameLogic";
import './App.css';

class App extends Component {

  state = {
    score: 0
  }

  render() {
    return (
      <div className="App">
        <GameLogic />
      </div>
    );
  }
}

export default App;
