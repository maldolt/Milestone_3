import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import "./styles/styles.scss";
import { createClient } from "@supabase/supabase-js";
import { useNavigate, Link } from "react-router-dom";

const supabaseUrl = "https://qtzwzoszjisovyydpjww.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0end6b3N6amlzb3Z5eWRwand3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyODc5NTksImV4cCI6MjAwOTg2Mzk1OX0.jVDzrA0WmZnpnK3x7T0Jno4siKt_vwcZrC2rwV01il8";

  const supabase = createClient(supabaseUrl, supabaseKey);

  const DashboardPage = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [date, setDate] = useState(new Date());
    const [image, setImage] = useState("");
  
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
  
          // Redirect to the dashboard page after successful form submission
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
  
    return (
      <div className="h-container">
        <header>
        <h1>📚Let's Add a New Book to Your Reading Log!📚</h1>
        </header>
        <section className="log-container">
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="image">Image URL:</label>
                <input
                  type="URL"
                  id="image"
                  accept="text"
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
                rating={rating}
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
  <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/dashboard" className="log-button">
          Return to Dashboard
        </Link>
      </div>
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