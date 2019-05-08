import React, { Component } from "react";

export default class Count extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Count : {this.props.score}</h1>
      </div>
    );
  }
}
