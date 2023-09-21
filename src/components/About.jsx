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
          Kids can create an account and log in to their personalized dashboard.
        </li>
        <li>
          Once logged in, they can view their submitted reading logs and the associated reading times.
        </li>
        <li>
          To add a new book they've read, they simply create a new log entry. They can rate the book and even upload an image using a URL to capture the essence of the book.
        </li>
      </ul>
      </div>
    </div>
  );
}

export default About;
