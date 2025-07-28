import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/hamzabeji_logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Hamza Beji Logo" className="navbar-logo" />
      </Link>
      <ul className="nav-links">
        <li><NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink></li>
        <li><NavLink to="/skills" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Skills</NavLink></li>
        <li><NavLink to="/projects" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;