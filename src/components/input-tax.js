import React, { Component } from "react";

export default class InputTax extends Component {
  constructor(props) {
    super(props);
    this.state = {tax: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({tax: event.target.value});
    this.props.parentTax.getTax(event.target.value);
  }

  render() {
    return (
      <div className="input-tax">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="0">Select State</option>
          <option value="0.0725">California - 7.25%</option>
          <option value="0.0635">Connecticut - 6.35%</option>
          <option value="0.06">Florida - 6%</option>
          <option value="0.0625">Massachusetts - 6.25%</option>
          <option value="0.035">New Jersey - 3.5%</option>
          <option value="0.08875">New York - 8.875%</option>
          <option value="0.06">Pennsylvania - 6%</option>
        </select>
      </div>
    )
  }
}