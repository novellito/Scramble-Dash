import React, {Component} from 'react';
import './App.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import Navbar from './components/Navbar.js'
import Container from './components/Container.js';
import ScoreBoard from './components/Scoreboard.js';
import Main from './components/Main.js';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Navbar></Navbar>
        <Main></Main>
      </div>

    );
  }
}

export default App;
