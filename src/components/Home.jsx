import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import './styles/styles.scss';

function Home() {
  return (
    <div className="h-container">
      <h1>Welcome to Our App</h1>
      <p>Explore our amazing features and services.</p>

      <div className="button-container">
        <Link to="/login" className="button login-button">
          <span className="icon">📚</span>
          Login
        </Link>
        <Link to="/signup" className="button signup-button">
          <span className="icon">➡️</span>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;