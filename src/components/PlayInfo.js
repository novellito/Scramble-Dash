import React, {Component} from 'react';

// This component displays the player time and score
class PlayInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secondsRemaining: this.props.secondsRemaining,
      isTicking:false
    }

  }

  tick = () => {
    this.setState({
      secondsRemaining: this.state.secondsRemaining - 1,
      isTicking:true
    });

    if (this.state.secondsRemaining <= 0) {
       this
        .props
        .gameState(true); //lock the input field
      clearInterval(this.interval); //stop timer once it reaches 0
    }

  }

  render() {

     clearInterval(this.interval);
      if (this.props.countdown) { //begin countdown
      this.interval = setInterval(this.tick, 1000);
    }
    
    if(!this.props.reset  && this.state.isTicking){ //reset the time 
      this.state.secondsRemaining = 50;       
      this.state.isTicking = false;
      clearInterval(this.interval);
    }
    
    return (
      <div className="outer">
        <i className="fa fa-hourglass-start fa-1x" aria-hidden="true"></i>
        <p className="info">{this.state.secondsRemaining}</p>
        <i className="fa fa-star fa-1x" aria-hidden="true"></i>
        <p className="info">{this.props.currScore}</p>
      </div>
    );
  }
}

export default PlayInfo;
