import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import "./styles/styles.scss";
import { createClient } from "@supabase/supabase-js";
import { useNavigate, Link } from "react-router-dom";

//supabase
const supabaseUrl = Url_Supabase.env
const supabaseKey = Enon_key_Supabase.env ;

const supabase = createClient(supabaseUrl, supabaseKey);

const NewBook = () => {
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

  const handleImageUrlChange = (e) => {
    setImage(e.target.value);
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
          title: title,
          rating: rating,
          date: date,
          image_url: image,
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

  return (
    <div className="h-container">
      <header>
        <h1>📚Let's Add a New Book to Your Reading Log!📚</h1>
      </header>
      <section className="log-container">
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
          <div>
              <label htmlFor="image">Image URL:</label>
              <input
                type="url"
                id="image"
                accept="text"
                value={image}
                onChange={handleImageUrlChange}
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

export default NewBook;
