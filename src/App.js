import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.component';
import Footer from './components/Footer.component';
class App extends Component {
 constructor(){
    super();
    this.state = {name:'KKK'};
  }
  changeName(name){
    this.setState({name:name});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        <header/>
        <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
