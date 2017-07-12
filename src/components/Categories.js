import React, { Component } from 'react';

//This component contains the various categories a player can choose
class Categories extends Component {
  render() {
    return (
      <div>
  <select className="categories">
    <option>Sports</option>
    <option>Music</option>
    <option>Video Games</option>
  </select>
      </div>
    );
  }
}

export default Categories;
