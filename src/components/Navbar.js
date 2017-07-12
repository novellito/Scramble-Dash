import React, { Component } from 'react';
import '../component-styles/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="selections">
            <li><a href="#" className="link"><i className="fa fa-gamepad fa-2x" aria-hidden="true"></i></a></li>
            <li><a href="#" className="link"><i className="fa fa-list fa-2x" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
