import "./App.css";

import React, { Component } from "react";
import Button from "./Button";

const colors = [
  "Lime",
  "MediumVioletRed",
  "Tomato",
  "Magenta",
  "Aqua",
  "Yellow",
];

function randomNumber(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "DarkCyan",
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        color: randomNumber(colors),
      });
      if (this.state.color === "Yellow") {
        alert("Yellow");
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  render() {
    const { color } = this.state;

    return (
      <button style={{ backgroundColor: color, padding: "10px" }}>
        text="I am button"
      </button>
    );
  }
}

export default App;

// function randomNumber(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }
