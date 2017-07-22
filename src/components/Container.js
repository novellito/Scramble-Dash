import React, {Component} from 'react';
import '../component-styles/index.css';
import Play from './Play.js';
import PlayInfo from './PlayInfo.js'
import Categories from './Categories.js';
import Submit from './Submit.js';
import axios from 'axios';

//The container component will hold all of other components
class Container extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      category:'sports',
      wordList: [],
      tick: false,
      sec: 25,
      gameState: true, //lock input
      reset: false
    }
  }
    componentDidMount() {
    axios.get('/categories/sports')
      .then(res => {
        this.setState({wordList: res.data});
      });
  }

  updateScore = (score) => {

    if (!this.state.gameState) {
      this.setState({
        score: this.state.score + 1
      });
    }
  }

  updateCat = (wordList) => {
    this.setState({
      wordList: wordList.content,
      category:wordList.name,
      tick:false,
      score:0
    });
  }

  checkState = (theState) => {
    this.setState({gameState: theState});
    // this.state.gameState = theState;
  }

  //sets the tick & game state to notify PlayInfo to start timing
  doTick = () => {
    this.setState({tick: true, gameState: false});
  }

  resetToggle = () => {
    this.setState({reset: true}); //will make play button unclickable unless reset button is clicked
  }

  gameReset = () => {
    //tell info component to reset time
    this.setState({
      score: 0,
      reset: false,
      gameState: true,
      tick:false
    }, () => {

    axios.get(`/categories/${this.state.category}`)
      .then(res => {
        this.setState({wordList: res.data});
      });
    });

  }

  setCat = (category) =>{
    this.setState({category:category});
  }

  render() {
    return (
      <div>
        <h1>Scramble - Dash</h1>
        <Categories currCat={this.updateCat} 
        gameState={!this.state.gameState}
        choice={this.setCat}></Categories>
        <PlayInfo
          pointCounter={this.updateScore}
          secondsRemaining={this.state.sec}
          currScore={this.state.score}
          countdown={this.state.tick}
          gameState={this.checkState}
          reset={this.state.reset}></PlayInfo>
        <Play
          gameState={this.state.gameState}
          cbToScore={this.updateScore}
          currList={this.state.wordList}
          startTime={this.doTick}
          resetToggle={this.resetToggle}
          resetState={this.state.reset}
          resetGame={this.gameReset}></Play>
        {this.state.gameState && this.state.score > 0
          ? <Submit user={{score:this.state.score, category:this.state.category}}></Submit>
          : ''}
      </div>
    );
  }
}

export default Container;
