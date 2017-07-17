import React, {Component} from 'react';
// import '../component-styles/play-info.css'; This component displays the
// player time and score
class PlayInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secondsRemaining: this.props.secondsRemaining
    }

  }

  tick = () => {
    this.setState({
      secondsRemaining: this.state.secondsRemaining - 1
    }, () => {
      if (this.props.reset == false) {
        this
          .props
          .gameState(true);
        this.setState({secondsRemaining: 5});
        clearInterval(this.interval);
      }
    });

    if (this.state.secondsRemaining <= 0) {
       this
        .props
        .gameState(true); //lock the input field
      clearInterval(this.interval); //stop timer once it reaches 0
    }

  }

  callTick = function () {
    clearInterval(this.interval);
    
    if (this.props.countdown == true) {
      this.interval = setInterval(this.tick, 1000);
    }

  }

  // componentWillUnmount = () => {
  //   clearInterval(this.interval);
  // }
  render() {

    if (this.state.secondsRemaining <= 0 && this.props.reset == false) { //reset the time
      this.setState({secondsRemaining: 5});
      clearInterval(this.interval);
    }

    return (
      <div className="outer">
        {this.callTick()}
        <i className="fa fa-hourglass-start fa-1x" aria-hidden="true"></i>
        <p className="info">{this.state.secondsRemaining}</p>
        <i className="fa fa-star fa-1x" aria-hidden="true"></i>
        <p className="info">{this.props.currScore}</p>
      </div>
    );
  }
}

export default PlayInfo;
