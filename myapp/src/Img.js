import { Component } from "react";

class Img extends Component {
  constructor() {
    super();
    this.state = {
        img: "https://pt-blog.ru/wp-content/uploads/2017/09/17-4.jpg",
    };
  }

  handleMouseEnter = () => {
    this.setState({
        img: "https://vectorforfree.com/wp-content/uploads/2020/05/Have_A_Nice_Day_VectorForFree.png",
      });
  };

  handleMouseOut = () => {
    this.setState({
        img: "https://pt-blog.ru/wp-content/uploads/2017/09/17-4.jpg",
      });
  };
  
  render() {
    const { alt } = this.props;
    return <img src={this.state.img} alt={alt} onMouseEnter={this.handleMouseEnter} onMouseOut={this.handleMouseOut} 
     ></img>;
  }
}

export default Img;
