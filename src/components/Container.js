import React, { Component } from 'react';
import '../component-styles/index.css';
import Play from './Play.js';
import PlayInfo from './PlayInfo.js'
import Categories from './Categories.js';
import Submit from './Submit.js'; //<Submit></Submit>

//The container component will hold all of other components 
class Container extends Component {

  constructor(props){
    super(props);

    this.state = {
      score:0
    }
  }

  updateScore = (score) =>{
    this.setState({score: this.state.score +  1})
  console.log(score);
}

  render() {
    return (
      <div>
      <h1>container here</h1>
      <Categories></Categories>
      <PlayInfo secondsRemaining="10" currScore = {this.state.score} ></PlayInfo>
      <Play cbToScore = {this.updateScore}></Play>
        
      </div>
    );
  }
}

export default Container;
