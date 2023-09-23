import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';

function Navbar() {
  const [user, setUser] = useState(null);

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
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <button onClick={() => setUser(null)}>Sign Out</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;