import { Component } from "react";
import "./App.css";

const getRandomIntInclusive = (min, max) => {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin + 1) + roundedMin);
};

const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(getRandomIntInclusive(1, 100));
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      arrLength: randomNumbers.length,
    };
  }

  handleClick = () => {
    randomNumbers.push(getRandomIntInclusive(1, 100));
    this.setState({ arrLength: randomNumbers.length });
  };

  render() {
    return (
      <>
        <p>{`length = ${randomNumbers.length}`}</p>
        <ul>
          {randomNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
        <button onClick={this.handleClick}>Add random number</button>
      </>
    );
  }
}

export default App;
