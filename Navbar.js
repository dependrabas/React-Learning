import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">My App</h1>
      <ul className="nav-links">
        <li><button className="nav-button">Home</button></li>
        <li><button className="nav-button"> <a href='soda.js'>Images</a> </button></li>
        <li><button className="nav-button">Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
