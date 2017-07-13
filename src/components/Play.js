import React, {Component} from 'react';

//This component hosts the input field and buttons for the game
class Play extends Component {

  constructor(props) {

    let index = 0;
    super(props);

    this.state = {
      score: 1,
      word: ['basketball', 'football', 'soccer', 'potatoe'], //temporary list for now...
      index:0
    };
  }

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

    if (event.target.value == this.state.word[this.state.index]) {

      this
        .props
        .cbToScore(this.state.score++);
     this.state.index++;
      console.log('index is '+  this.state.index);
      //short delay before switching word
      setTimeout(() => {
        this.refs.input.value = '';
      }, 500);
    }

  }

  render() {

    return (
      <div>

        <p>{this.shuffleWords(this.state.word[this.state.index])}</p>
        <input ref="input" type="text" onChange={this.compareWords}/>

        <div>
          <button className="button">
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
