import { Component } from "react";

class Button extends Component {
    render(){
        const {name, onMouseEnter} = this.props;
        return <button onMouseEnter={onMouseEnter}>{ name }</button>
    }
}


export default Button;