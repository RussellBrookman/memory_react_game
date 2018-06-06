import React, { Component } from "react";
import '../NavCard/NavCard.css';

class NavCardState extends Component {

  render() {
    return (
      <h1 className="NavCard">{ this.props.score } of { this.props.total } correct</h1>
    );
  }
}

export default NavCardState;
