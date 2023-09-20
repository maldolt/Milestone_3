import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';


function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
