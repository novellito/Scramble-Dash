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

      if (this.props.reset == false) {
        this.setState({secondsRemaining: 5});
      }

      clearInterval(this.interval);
    }
  }

  // componentDidMount = () => {
  //   this.setState({secondsRemaining: this.props.secondsRemaining});
  //   console.log(this.state.secondsRemaining);
  // }

  callTick = function () {
    clearInterval(this.interval);

    if (this.props.countdown == true) {
      
      this.interval = setInterval(this.tick, 1000);

    }

  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }
  render() {
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
