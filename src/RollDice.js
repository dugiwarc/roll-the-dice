import React, { Component } from "react";
import Die from "./Die";
import Count from "./Count";
import "./RollDice.css";

export default class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", isRolling: false, count: 1 };
  }

  incrementScore(prevState) {
    return { count: prevState.count + 3 };
  }

  tripleKill = () => {
    this.setState(this.incrementScore);
  };

  roll = () => {
    // Pick 2 new rolls
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({
      die1: newDie1,
      die2: newDie2,
      isRolling: true
    });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };
  render() {
    return (
      <div className="RollDice">
        <span>
          <Die face={this.state.die1} rolling={this.state.isRolling} />
          <Die face={this.state.die2} rolling={this.state.isRolling} />
        </span>
        <Count score={this.state.count} />
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll Dice"}
        </button>
        <button onClick={this.tripleKill}>Triple Kill</button>
      </div>
    );
  }
}
