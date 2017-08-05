import React, { Component } from "react";

export default class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {amount: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({amount: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.amount != "") {
      this.props.parentBar.getAmount(this.state.amount);
      this.setState({amount: ""});
    }
  }

  render() {
    return (
      <div className="input-bar">
        <form onSubmit={this.handleSubmit} className="input-form">
          <input className="input-bar-text" type="number" min="0.01" step="0.01" value={this.state.amount} onChange={this.handleChange} ></input>
          <button className="input-bar-submit" type="submit">ADD</button>
        </form>
      </div>
    )

  }

}