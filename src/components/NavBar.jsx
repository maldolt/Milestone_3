import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';

function Navbar() {
 
 
  return (
    <nav>
      
      <ul className="navbar-right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <ul className="navbar-left">
              
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
         
      </ul>
    </nav>
  );
}

export default Navbar;