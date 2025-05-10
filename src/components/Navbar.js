import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg';

<img src={logo} alt="Logo" />

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>SRI <span className="highlight">IMPORTS</span></span>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Gallery</a>
          <a href="#">Inspiration</a>
        </div>

        {/* Buttons */}
        <div className="nav-buttons">
          <button className="filled-button">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
