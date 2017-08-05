import React, { Component } from "react";

export default class AmountBox extends Component {

  render() {
    return (
      <div className="amount-box">
        <ul>{this.props.amounts.map((amount) =>
          <li key={Math.random()}>{Number(amount).toFixed(2)} + </li>
        )}</ul>
      </div>
    )
  }
}