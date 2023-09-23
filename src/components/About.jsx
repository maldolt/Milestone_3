import React from 'react';
import './styles/styles.scss';

const About = () => {
  return (
    <div className="h-container">
      <h1>About Reading Log App</h1>
      <p>
        Welcome to the Reading Log App, where reading meets adventure! 
      </p>
      <h2>Purpose:</h2>
      <p>
        Our goal is to make reading logs a delightful journey for kids. We want to provide a playful and interactive platform where young readers can record and revisit their reading adventures without the need for stacks of worksheets.
      </p>
      <div  className='howTo'>
      <h2>How it works:</h2>
      <ul>
        <li>
          <img src='https://ucarecdn.com/84ca7e99-35f3-4dcc-b1cf-1a5225a0ab0b/1.png' alt='step 1'></img>
          <p>Kids can create an account and log in to their personalized dashboard.</p>
        </li>
        <li>
          <img src='https://ucarecdn.com/5da2c813-136a-4fa4-8b73-29c0f7433343/2.png' alt='step 2' />
          <p>Once logged in, they can view their submitted reading logs and the associated reading times.</p>
        </li>
        <li>
          <img src='https://ucarecdn.com/c781c15d-5807-4f7b-8c09-83ccfec9c8a5/3.png' alt='step 3' />
          <p>To add a new book they've read, they simply create a new log entry. They can rate the book and even upload an image using a URL to capture the essence of the book.</p>
        </li>
      </ul>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Reading Log App | <a href={'https://github.com/maldolt/milestone_3.git'} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
      </footer>
    </div>
  );
}

export default About;
