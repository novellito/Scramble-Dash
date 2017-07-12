import React, { Component } from 'react';
// import '../component-styles/play-info.css';

//This component displays the player time and score
class PlayInfo extends Component {
  render() {
    return (
      <div className="outer">
    
    <i className="fa fa-hourglass-start fa-1x" aria-hidden="true"></i>
    <p className="info">timer here</p>
    <i className="fa fa-star fa-1x" aria-hidden="true"></i>
    <p className="info">score here</p>

      </div>
    );
  }
}

export default PlayInfo;
