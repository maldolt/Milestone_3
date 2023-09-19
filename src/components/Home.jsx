import React from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.scss';



export default function Home() {
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
