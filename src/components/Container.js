import React, {Component} from 'react';
import '../component-styles/index.css';
import Play from './Play.js';
import PlayInfo from './PlayInfo.js'
import Categories from './Categories.js';
import Submit from './Submit.js'; 

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
      gameState: true, //lock input
      reset:false
    }
  }

  updateScore = (score) => {

    // console.log(this.state.gameState);

    if(this.state.gameState == false){

    this.setState({
      score: this.state.score + 1
    });

    }
       else if(this.state.gameState == true && score == 0){ //reset points after game ends 
      this.setState({score:0});
    }
    
    // console.log(score);
  }

  updateCat = (category) => {
    this.setState({
      category: category
    }, () => {
      // this.setState({gameState: false});
      this.setState({tick: false});
      this.setState({score:0});
      // console.log(this.state.category);
      this.state.sec = 5;
    });

  }

  checkState = (theState) => {
    this.setState({gameState: theState});
    // console.log(this.state.gameState);
  }

  doTick = () => {
    this.setState({
      tick: true
    }
    , () => {
      this.setState({gameState:false});

    });
  }

  resetToggle = () =>{
    this.setState({reset:true}); //will make play button unclickable unless reset button is clicked
  }

  gameReset= () =>{
    //tell info component to reset details
    this.setState({score:0},()=>{
    this.setState({reset:false});
    // this.setState({sec:10});
    });
  }

  render() {
    return (
      <div>
        <h1>container here</h1>
        <Categories currCat={this.updateCat} gameState={!this.state.gameState}></Categories>
        <PlayInfo
          pointCounter={this.updateScore}
          secondsRemaining={this.state.sec}
          currScore={this.state.score}
          countdown={this.state.tick}
          gameState={this.checkState}
          reset={this.state.reset}
          ></PlayInfo>
        <Play
          gameState={this.state.gameState}
          cbToScore={this.updateScore}
          currList={this.state.category}
          startTime={this.doTick}
          resetToggle={this.resetToggle}
          resetState={this.state.reset}
          resetGame={this.gameReset}
         >
          </Play>
      {/* {this.state.gameState ? '': <Submit/>} */}
      </div>
    );

  }
}

export default Container;
