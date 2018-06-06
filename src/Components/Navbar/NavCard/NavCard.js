import React, { Component } from "react";
import './NavCard.css';

class NavCard extends Component {
  render() {
    return (
      <h1 className="NavCard">{ this.props.children }</h1>
    );
  }
}

export default NavCard;
