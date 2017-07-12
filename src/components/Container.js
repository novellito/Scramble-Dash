import React, { Component } from 'react';
import '../component-styles/index.css';
import Play from './Play.js';
import PlayInfo from './PlayInfo.js'
import Categories from './Categories.js';
import Submit from './Submit.js'; //<Submit></Submit>

//The container component will hold all of other components 
class Container extends Component {
  render() {
    return (
      <div>
      <h1>container here</h1>
      <Categories></Categories>
      <PlayInfo></PlayInfo>
      <Play></Play>
        
      </div>
    );
  }
}

export default Container;
