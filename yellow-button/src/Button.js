import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { text } = this.props;

    return <button style={this.props.style}>{text}</button>;
  }
}
