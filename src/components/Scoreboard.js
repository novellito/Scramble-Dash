import React, {Component} from 'react';
import axios from 'axios';

//This component contains the various categories a player can choose
class Scoreboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scoreList:''
        }
        
    }

componentDidMount() {
    axios.get('/scores/scoreList')
      .then(res => {
        console.log(res.data);
        this.setState({scoreList: JSON.stringify(res.data)});
        console.log(JSON.stringify(res.data));
      });
  }

    render() {
        return (
            <div>
                <h1>Scoreboard</h1>
                {this.state.scoreList[1]}
            </div>
        );
    }
}

export default Scoreboard;
