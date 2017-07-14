import React, {Component} from 'react';
import '../component-styles/index.css';
import Play from './Play.js';
import PlayInfo from './PlayInfo.js'
import Categories from './Categories.js';
import Submit from './Submit.js'; //<Submit></Submit>

//The container component will hold all of other components
class Container extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      category: [
        'basketball', 'football', 'soccer', 'potatoe'
      ],
      tick: false,
      sec: 5,
      gameState: true
    }
  }

  updateScore = (score) => {
    this.setState({
      score: this.state.score + 1
    })
    console.log(score);
  }

  updateCat = (category) => {
    this.setState({
      category: category
    }, () => {
      this.setState({gameState: false});
      this.setState({tick: false});

      console.log(this.state.category);
      this.state.sec = 5;
    });

  }

  checkState = (theState) => {
    this.setState({gameState: theState});
    console.log(this.state.gameState);
  }

  doTick = () => {
    this.setState({
      tick: true
    }
    , () => {
      // console.log(this.state.tick);
      this.setState({gameState:false});
    });
  }

  render() {
    return (
      <div>
        <h1>container here</h1>
        <Categories currCat={this.updateCat}></Categories>
        <PlayInfo
          secondsRemaining={this.state.sec}
          currScore={this.state.score}
          countdown={this.state.tick}
          gameState={this.checkState}></PlayInfo>
        <Play
          gameState={this.state.gameState}
          currState={this.state.gameState}
          cbToScore={this.updateScore}
          currList={this.state.category}
          startTime={this.doTick}></Play>

      </div>
    );
  }
}

export default Container;
