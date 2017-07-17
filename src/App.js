import React, { Component } from 'react';
import './App.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import Navbar from './components/Navbar.js'
import Container from './components/Container.js';
// import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
      <Container></Container>
      
      </div>
    );
  }
}

export default App;
