import React from 'react';
import { FaRobot } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <FaRobot className="icon" />
      Pragna Systems
    </div>
    <div className="navbar-links">
      <a href="#hero">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
);

export default Navbar;
