import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


//This component allows player to sumbit their score
class Submit extends Component {


submitScore = () => {

  if(this.refs.input.value != null){
    
    axios.post('/scores/newScore', {
    user: this.refs.input.value,
    score: this.props.user.score,
    category:this.props.user.category
  }).then(function (response) {
    console.log(response);
  })

  }
}
  

  render() {
    return (
      <div className="submitInfo">
        <h2>Name:</h2>
        <input ref="input" type="text" required/>
        <Link onClick={this.submitScore} className="button btn-hov" to="/scoreboard"><i className="fa fa-plus" aria-hidden="true"></i></Link>
      </div>
    );
  }
}

export default Submit;
