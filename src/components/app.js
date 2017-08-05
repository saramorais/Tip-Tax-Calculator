import React, { Component } from "react";
import InputBar from "./input-bar";
import AmountBox from "./amount-box";
import InputTip from "./input-tip";
import InputTax from "./input-tax";
import TotalFinal from "./total-final";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      amount: [],
      tip: 0,
      tax: 0
    }
    this.startOver = this.startOver.bind(this);
  }

  getAmount(value) {
    this.setState({amount: [...this.state.amount, value]});
  }

  getTax(value) {
    this.setState({tax: value});
  }

  getTip(value) {  
    this.setState({tip: value});
  }

  startOver() {
    this.setState({
      amount: []
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-name">
          <h1>Tax and Tip Calculator</h1>
        </div>
        <div className="calculator">
          <InputBar parentBar={this} />
          <AmountBox amounts={this.state.amount} />
          <InputTax parentTax={this} />
          <InputTip parentTip={this} />
          <TotalFinal numbers={this.state} />
          <div className="start-over">
            <button onClick={this.startOver}>Start Over</button>
          </div>
        </div>
      </div>
    );
  }

}