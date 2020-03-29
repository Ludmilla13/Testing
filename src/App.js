import React,  {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'enzyme';

class App extends Component {
constructor(props) {
  super(props) 
    this.state = {
      counter: 0
  }
}
  render() {

    return (
      <>
      <div data-test="component-app"></div>
      <h1 data-test="increment-component">The counter is at {this.state.counter} </h1>
      <button data-test="button-component" onClick = {()=> this.setState({counter: this.state.counter + 1})}>Increment counter</button>
      </>
    );
  }
 }
  

export default App;
