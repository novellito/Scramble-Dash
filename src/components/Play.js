import React, { Component } from 'react';

//This component hosts the input field and buttons for the game
class Play extends Component {
  render() {
    return (
      <div>
    
      <p>word will be here</p>
      <input type="text"/>

      <div>
        <button className="button"><i className="fa fa-play" aria-hidden="true"></i></button>
        <button className="button btn-replay"><i className="fa fa-repeat" aria-hidden="true"></i></button>
      </div>

      </div>
    );
  }
}

export default Play;
