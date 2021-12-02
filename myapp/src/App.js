import "./App.css";
import Button from "./Button.js";
import { Component } from "react";
import Img from "./Img";

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <>
        <h1> Hello!!! </h1>
        <Img alt="some picture"/>
        <Button name="Click me !"/>
      </>
    );
  }
}

export default App;
