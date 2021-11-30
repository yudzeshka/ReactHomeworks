import logo from './logo.svg';
import './App.css';
import Button from './Button.js'
import { Component } from 'react';

class App extends Component {
  constructor(){
    super()
  }
handleHover(){
alert("Hellloooooo!!!")

}

  render(){
    return (
      <>
      <h1> Hello!!! </h1>
      <Button onMouseEnter={this.handleHover} name='I am button' ></Button>
      </>
    );
  }
}


export default App;
