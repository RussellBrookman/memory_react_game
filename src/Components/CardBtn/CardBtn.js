import React from "react";
import "./CardBtn.css";

const CardBtn = props => (
  <div className="card">
    <img alt={ props.name } src={ props.image } onClick={ props.click } />
  </div>
);

export default CardBtn;
