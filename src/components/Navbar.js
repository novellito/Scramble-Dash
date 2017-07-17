import React, { Component } from 'react';
import '../component-styles/navbar.css';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="selections">
            <li><Link to="/" className="link"><i className="fa fa-gamepad fa-2x" aria-hidden="true"></i></Link></li>
            <li><Link to="/scoreboard" className="link"><i className="fa fa-list fa-2x" aria-hidden="true"></i></Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
