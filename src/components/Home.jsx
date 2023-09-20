import React from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.scss';



export default function Home() {
  const githubLink = 'https://github.com/maldolt/milestone_3.git';
  
  return (
    <div className="h-container">
      <h1>Welcome to Our Reading Log App</h1>
      <p>Take your reading experience to the next level!</p>

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
      <div>
      <footer className="footer">
        <p>&copy; 2023 Reading Log App | <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
      </footer>
      </div>
    </div>
  );
}
