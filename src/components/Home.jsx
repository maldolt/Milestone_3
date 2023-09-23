import React from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.scss';



export default function Home() {
  const githubLink = 'https://github.com/maldolt/milestone_3.git';
  
  return (
    <div className="h-container">
      <img 
      src='https://ucarecdn.com/8238afb5-f420-4873-962c-b2fdbb5d6e0a/1.png' 
      alt='reading log'
      style={{ width: '80%', height: 'auto' }}
      />
      <h1>Take your reading experience to the next level!</h1>
      
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
