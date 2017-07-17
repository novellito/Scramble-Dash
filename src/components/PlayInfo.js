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
    },()=>{

    //    if (this.props.reset == false && this.state.isTicking == true) { //reset the time clock is still ticking
    // //  this.setState({secondsRemaining: 5});
    //   // this.state.secondsRemaining=5;       
    //    this.setState({isTicking:false});
    //   }
    });

    if (this.state.secondsRemaining <= 0) {
       this
        .props
        .gameState(true); //lock the input field
      clearInterval(this.interval); //stop timer once it reaches 0

      // if(this.props.reset == false){ //reset the time when clock = 0
      //    this.setState({secondsRemaining: 5});
      // // clearInterval(this.interval);
      // }

    }

  }


  render() {

     clearInterval(this.interval);
      if (this.props.countdown == true) {
      this.interval = setInterval(this.tick, 1000);
    }
    
   
    if(this.props.reset == false && this.state.isTicking == true){ //reset the time 

      this.state.secondsRemaining = 5;       
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
