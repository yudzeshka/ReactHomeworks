import "./App.css";
import Button from "./Button.js";
import { Component } from "react";
import { buildQueries } from "@testing-library/dom";
import Img from "./Img";

class App extends Component {
  constructor() {
    super();
    this.state = {
      img: "https://pt-blog.ru/wp-content/uploads/2017/09/17-4.jpg",
    };
  }
  render() {
    return (
      <>
        <h1> Hello!!! </h1>
        <Img alt="some picture"></Img>
        <Button name="Click me !"></Button>
      </>
    );
  }
}

export default App;
