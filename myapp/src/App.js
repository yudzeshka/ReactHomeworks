import "./App.css";
import Button from "./Button.js";
import { Component } from "react";

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
        <img
          src={this.state.img}
          onMouseEnter={() => {
            this.setState({
              img: "https://vectorforfree.com/wp-content/uploads/2020/05/Have_A_Nice_Day_VectorForFree.png",
            });
          }}
          onMouseOut={() => {
            this.setState({
              img: "https://pt-blog.ru/wp-content/uploads/2017/09/17-4.jpg",
            });
          }}
        ></img>
        <Button name="I am button" alertText="Helllllloooooo"></Button>
      </>
    );
  }
}

export default App;
