import React, { Component } from "react";

export default class TotalFinal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amountSum: 0,
      finalSum: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    const arr = nextProps.numbers.amount;
    const tax = nextProps.numbers.tax;
    const tip = nextProps.numbers.tip;
    var sum = 0;
    if(arr != undefined && arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        sum += parseFloat(arr[i])
      }
    }
    const totalSum = sum + (sum*tax) + (sum*tip);

    this.setState({
      amountSum: sum,
      finalSum: totalSum
    });
  }

  getTaxAmount(props) {
    const tax = Number(this.props.numbers.tax * this.state.amountSum).toFixed(2);
    return (
      <p>Tax: U$ {tax}</p>
    )
  }

  getTipAmount(props) {
    const tip = Number(this.props.numbers.tip * this.state.amountSum).toFixed(2);
    return (
      <p>Tip: U$ {tip}</p>
    )
  }

  render() {
    return (
      <div>
        <p>Price: U$ { Number(this.state.amountSum).toFixed(2) }</p>
        {this.getTaxAmount()}
        {this.getTipAmount()}
        <p className="total">TOTAL: U$ {Number(this.state.finalSum).toFixed(2)}</p>      
      </div>
    )

  }

}