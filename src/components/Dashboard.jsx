import React, { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import "./styles/styles.scss";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://qtzwzoszjisovyydpjww.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0end6b3N6amlzb3Z5eWRwand3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyODc5NTksImV4cCI6MjAwOTg2Mzk1OX0.jVDzrA0WmZnpnK3x7T0Jno4siKt_vwcZrC2rwV01il8";

const supabase = createClient(supabaseUrl, supabaseKey);

const DashboardPage = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState(null); // New state for image

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    console.log("Title:", title);
    console.log("Rating:", rating);
    console.log("Date:", date);
    console.log("Image:", image);

    try {
      // Insert data into your Supabase table
      const { data, error } = await supabase.from("Logs").insert([
        //inset table name
        {
          title,
          rating,
          date,
        },
      ]);

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Form submitted and data inserted:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    // Fetch submitted data when the form is successfully submitted
    const fetchSubmittedData = async () => {
      try {
        const { data, error } = await supabase.from("Logs").select();
        if (error) {
          console.error("Error fetching submitted data:", error);
        } else {
          setSubmittedData(data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchSubmittedData();
  }, []);

  //trying to add an image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
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
            <div>
              <label htmlFor="image">Image URL:</label>
              <input
                type="URL"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>

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
              rating={rating} // Use the state variable for the rating
              starRatedColor="gold"
              changeRating={(newRating) => setRating(newRating)}
              numberOfStars={5}
              name="rating"
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
          <br />
          <button className="log-button" type="submit">
            Submit
          </button>
        </form>
      </section>
      <hr />
      <section className="submitted-data">
          <h2>Current Logs</h2>
          {submittedData ? (
            <ul>
              {submittedData.map((entry) => (
                <li key={entry.id}>
                  <div className="log-item">
                    <div className="log-image">
                      <img src={entry.image_url} alt="Book" />
                    </div>
                    <div className="log-details">
                      <div>
                        <strong>Title:</strong> {entry.title}
                      </div>
                      <div>
                        <strong>Rating:</strong>
                        <StarRatings
                          rating={entry.rating}
                          starRatedColor="gold"
                          numberOfStars={5}
                          starDimension="20px" // Size of the stars
                          starSpacing="2px" // Space between stars
                        />
                      </div>
                      <div>
                        <strong>Date:</strong> {entry.date}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No data submitted yet.</p>
          )}
        </section>

      <hr />
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
