import React, { Component } from 'react';
import axios from 'axios';

//This component contains the various categories a player can choose
class Categories extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: 'sports',
      content:[]
    };

  }

  
  onCatChange = (event) =>{
    
    this.setState({value: event.target.value},function(){

    axios.get(`/categories/${this.state.value}`) //make request to backend
      .then(res => {
        console.log(res.data);
        this.setState({content: res.data},()=>{

        // this.props.choice(valueToSend);
        // console.log(this.state.value);
        this
        .props
        .currCat({name:this.state.value,
          content:this.state.content});
        });

      });
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
