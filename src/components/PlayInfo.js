import React, {Component} from 'react';
// import '../component-styles/play-info.css'; This component displays the
// player time and score
class PlayInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secondsRemaining: 0
    }
  }

  tick = () => {
    this.setState({
      secondsRemaining: this.state.secondsRemaining - 1
    });
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }
  componentDidMount = () => {
    this.setState({secondsRemaining: this.props.secondsRemaining});
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount = () => {
    clearInterval(this.interval);
  }
  render() {
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
