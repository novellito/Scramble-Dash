import React, { Component } from 'react';

//This component contains the various categories a player can choose
class Categories extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: 'sports',
      sports:  ['basketball', 'football', 'soccer', 'potatoe'],
      music: ['hiphop', 'rap', 'rock']
    };

  }

  
  onCatChange = (event) =>{
    
    this.setState({value: event.target.value},function(){

      //send the selected choices values here and pass to container component
      let valueToSend = this.state.value;
        this
        .props
        .currCat(this.state[valueToSend]);
    });


  }
  render() {
    return (
      <div>
  <select value={this.state.value}  onChange={this.onCatChange} className="categories" disabled={this.props.gameState}>
    <option value='sports'>Sports</option>
     <option value='music'>Music</option>
     <option value='videogames'>Video Games</option>
  </select>
      </div>
    );
  }
}

export default Categories;
