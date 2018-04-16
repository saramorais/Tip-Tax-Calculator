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

  render() {
    const tax = Number(this.props.numbers.tax * this.state.amountSum).toFixed(2);
    const tip = Number(this.props.numbers.tip * this.state.amountSum).toFixed(2);
    
    return (
      <div className="numbers">
        <p>Price: U$ { Number(this.state.amountSum).toFixed(2) }</p>
        <p>Tax: U$ {tax}</p>
        <p>Tip: U$ {tip}</p>
        <p className="total">TOTAL: U$ {Number(this.state.finalSum).toFixed(2)}</p>      
      </div>
    )

  }

}