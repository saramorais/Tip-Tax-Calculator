import React, { Component } from "react";

export default class InputTip extends Component {
  constructor(props) {
    super(props);
    this.state = {tip: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({tip: event.target.value});
    this.props.updateTip(event.target.value);
  }

  render() {
    return (
      <div className="input-tip">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="0">Select Tip</option>
          <option value="0.10">10%</option>
          <option value="0.12">12%</option>
          <option value="0.15">15%</option>
          <option value="0.18">18%</option>
          <option value="0.20">20%</option>
          <option value="0.22">22%</option>
          <option value="0.25">25%</option>
          <option value="0.28">28%</option>
          <option value="0.30">30%</option>
          <option value="0.35">35%</option>
        </select>
      </div>
    )
  }
}