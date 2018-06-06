import React, { Component } from "react";
import NavCard from "./NavCard";
import NavCardState from "./NavCardState";
import './Navbar.css';


class Navbar extends Component {
  render () {
    return(
      <div className="Navbar">
        <NavCard>Memory Card Game</NavCard>
        <NavCard>Click on an image to start playing</NavCard>
        <NavCardState score={ this.props.score } total={ this.props.total } />
      </div>
    );
  }
}
export default Navbar;
