import './App.css';
import Button from './Button.js'
import { Component } from 'react';

class App extends Component {
  // constructor(){
  //   super()
  // }
  render(){
    return (
      <>
      <h1> Hello!!! </h1>
      <Button name='I am button' alertText='Helllllloooooo'></Button>
      </>
    );
  }
}


export default App;
