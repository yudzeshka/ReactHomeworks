import { Component } from "react";

class Button extends Component {
    handleHover =() =>{
        const {alertText} = this.props;
        alert(alertText)
    }
    render(){
        const {name} = this.props;
        return <button onMouseEnter={this.handleHover}>{ name }</button>
    }
}


export default Button;