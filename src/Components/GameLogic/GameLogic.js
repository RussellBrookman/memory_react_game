import React, { Component } from "react";
import CardBtn from "../CardBtn";
import "./GameLogic.css";
import Navbar from "../Navbar";
import NavCardState from "../Navbar";
import cardLinks from "../../cardLinks.json";

class GameLogic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      order: [{index:0, clicked:false},
              {index:1, clicked:false},
              {index:2, clicked:false},
              {index:3, clicked:false},
              {index:4, clicked:false},
              {index:5, clicked:false},
            ],
      score: 0,
      total: 12
    };
  }

  handleClick = (event) => {
    console.log(event);

    if (!event.clicked && this.state.score != this.state.total) {
      event.clicked = true;
      this.setState({score: this.state.score + 1});
    } else if (event.clicked){
      this.setState({
        order: [{index:0, clicked:false},
                {index:1, clicked:false},
                {index:2, clicked:false},
                {index:3, clicked:false},
                {index:4, clicked:false},
                {index:5, clicked:false},
              ],
        score: 0,
        total: 12
      });
    }

    let tso = this.state.order;
    for (let i = tso.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tso[i], tso[j]] = [tso[j], tso[i]];
    }
    this.setState({order: tso});
  };

  render() {
    return (
      <div className="wrapper">
        <Navbar score={ this.state.score } total={ cardLinks.length } />
        <div className="GameLogic">
          {
            this.state.order.map(
              function(item) {
                let img = cardLinks[item.index].image;
                return <CardBtn click={() => this.handleClick(item)} image={ img } id={ item.idex } key={ item.index }  />;
              }.bind(this)
            )
          }
        </div>
      </div>
    );
  }
}

export default GameLogic ;
