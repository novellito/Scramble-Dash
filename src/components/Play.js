import React, {Component} from 'react';

//This component hosts the input field and buttons for the game
class Play extends Component {

  constructor(props) {

    let index = 0;
    super(props);

    this.state = {
      score: 1,
      index:0,
      gameOn:true
    };
  }

  //   componentDidMount(){
  //   this.refs.input.focus();
    
  // }

  shuffleWords = (word) => {
    let shuffledWord = '';
    let charIndex = 0;
    word = word.split('');
    while (word.length > 0) {
      charIndex = word.length * Math.random() << 0;
      shuffledWord += word[charIndex];
      word.splice(charIndex, 1);
    }
    return shuffledWord;
  }

  compareWords = (event) => {

    if (event.target.value == this.props.currList[this.state.index]) {

      this
        .props
        .cbToScore(this.state.score++);
     this.state.index++;
      //short delay before switching word
      setTimeout(() => {
        this.refs.input.value = '';
      }, 200);
    }

   
  }

  onClick = (event)=>{

    this.props.startTime();
    
     //let game state change then focus on input
     setTimeout(() => {
       this.refs.input.focus();
      }, 200);

  }

  render() {

     if(this.props.gameState == true){
      this.state.index = 0;
    }

    return (
      <div>

        <p>{this.props.gameState ? true: this.shuffleWords(this.props.currList[this.state.index])}</p>
        <input ref="input" type="text" onChange={this.compareWords} disabled={this.props.gameState}/>

        <div>
          <button onClick={this.onClick} disabled={!this.props.gameState} className="button">
            <i className="fa fa-play" aria-hidden="true"></i>
          </button>
          <button className="button btn-replay">
            <i className="fa fa-repeat" aria-hidden="true"></i>
          </button>
        </div>

      </div>
    );
  }
}

export default Play;
