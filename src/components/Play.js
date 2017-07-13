import React, { Component } from 'react';

//This component hosts the input field and buttons for the game
class Play extends Component {

  constructor(props){

    super(props);

    this.state = {score: 1};
  }
  


  compareWords = (event)=>{

  let wordList = ['basketball','football', 'soccer'];
  

  if(event.target.value == wordList[0]){
    
  
    this.props.cbToScore(this.state.score++);
  }
    
  }

  
  render() {

    return (
      <div>
    
      <p>word will be here</p>
      <input ref="input" type="text" onChange={this.compareWords}/>

      <div>
        <button className="button"><i className="fa fa-play" aria-hidden="true"></i></button>
        <button className="button btn-replay"><i className="fa fa-repeat" aria-hidden="true"></i></button>
      </div>

      </div>
    );
  }
}

export default Play;
