import { Component } from "react";
import "./App.css";
import Button from "./Button";
import Paragraph from "./Paragraph";

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
      arr: randomNumbers,
    };
  }

  handleClick = () => {
    randomNumbers.push(getRandomIntInclusive(1, 100));
    this.setState({ arr: randomNumbers });
  };

  render() {
    return (
      <>
        <Paragraph text={`list length = ${randomNumbers.length}`} />
        <ul>
          {randomNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
        <Button text="Add random number" onClick={this.handleClick} />
      </>
    );
  }
}

export default App;
