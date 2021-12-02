import { Component } from "react";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "mediumPurple",
    };
  }
  handleClick = () => {
    this.setState({backgroundColor: "gold"})
  };
  render() {
    const { name } = this.props;
    return <button onClick={this.handleClick} style={{
      backgroundColor: this.state.backgroundColor
     }}>{name}</button>;
  }
}

export default Button;
