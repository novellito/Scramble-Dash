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
      score:0,
      category:['basketball', 'football', 'soccer', 'potatoe'],
      tick:false
    }
  }

  updateScore = (score) =>{
    this.setState({score: this.state.score +  1})
  console.log(score);
}

updateCat = (category) =>{
  this.setState({category:category}, ()=>{

  console.log(this.state.category);
  });
}

doTick = ()=>{
  this.setState({tick:true},()=>{
  console.log(this.state.tick);
  });
}

  render() {
    return (
      <div>
      <h1>container here</h1>
      <Categories currCat = {this.updateCat}></Categories>
      <PlayInfo secondsRemaining="10" currScore = {this.state.score} countdown={this.state.tick}
      
      ></PlayInfo>
      <Play cbToScore = {this.updateScore} currList={this.state.category} startTime={this.doTick}></Play>
        
      </div>
    );
  }
}

export default Container;
