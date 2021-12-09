import React, { Component } from "react";

export default class Button extends Component {
  // shouldComponentUpdate(nexProps) {
  //   if (nexProps.color !== "Yellow") {
  //     return true;
  //   }
  //   console.log("yellow");
  //   return false;
  // }

  render() {
    const { text } = this.props;
    const { style } = this.props;

    return <button style={style}>{text}</button>;
  }
}
