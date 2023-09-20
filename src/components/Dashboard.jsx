import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import "./styles/styles.scss";

const DashboardPage = () => {

  
  const [title, setTitle] = useState('');
  const [rating ] = useState(0);
  const [date, setDate] = useState(new Date());

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };


  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { title, rating, date });
  };

  return (
    <div className="h-container">
      <header>
        <h1>Dashboard</h1>
      </header>
      <section className="log-container">
        <h1>📚 Reading Logs 📚</h1>
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title of Book:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="rating">Rating for Book:</label>
        <StarRatings
        rating={5}  // Set the initial rating (from 0 to 5)
        starRatedColor="blue"  // Color of the stars when rated
        changeRating={(newRating) => console.log('Rated with: ', newRating)}
        numberOfStars={5}  // Total number of stars
        name='rating'  // Unique name for this star rating
      />
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
      </section>
     <hr/>
     <h1>⏱️ Timers ⏱️</h1>
      <section className="video-section">
        <div className="video-container">
          <h1>10 Minute Timer</h1>
          <iframe
            width="350"
            height="200"
            src="https://www.youtube.com/embed/DcZZ8aaRUrU?si=knlDfI_hn5rANlQC"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
            sandbox="allow-same-origin allow-scripts"
          ></iframe>
        </div>
        <div className="video-container">
          <h1>15 Minute Timer</h1>
          <iframe
            width="350"
            height="200"
            src="https://www.youtube.com/embed/cdB2WmfTvWs?si=GWa8MUH__S4blvFv"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
            sandbox="allow-same-origin allow-scripts"
          ></iframe>
        </div>
        <div className="video-container">
          <h1>20 Minute Timer</h1>
          <iframe
            width="350"
            height="200"
            src="https://www.youtube.com/embed/hXb3kxMFWXc?si=Ew459NWaV2yltyxF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
            sandbox="allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </section>

      <footer className="footer">
        <p>
          &copy; 2023 Reading Log App |{" "}
          <a
            href={"https://github.com/maldolt/milestone_3.git"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </p>
      </footer>
    </div>
  );
};

export default DashboardPage;
