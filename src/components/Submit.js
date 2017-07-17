import React, { Component } from 'react';
import '../component-styles/submit.css';

//This component allows player to sumbit their score
class Submit extends Component {
  render() {
    return (
      <div className="submitInfo">
     <h2>Name:</h2>
  <input type="text"/>
<button className="button"><i className="fa fa-plus" aria-hidden="true"></i></button>

      </div>
    );
  }
}

export default Submit;
