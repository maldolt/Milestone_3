import React, { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import "./styles/styles.scss";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";

const supabaseUrl = "https://qtzwzoszjisovyydpjww.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0end6b3N6amlzb3Z5eWRwand3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyODc5NTksImV4cCI6MjAwOTg2Mzk1OX0.jVDzrA0WmZnpnK3x7T0Jno4siKt_vwcZrC2rwV01il8";

const supabase = createClient(supabaseUrl, supabaseKey);

const DashboardPage = () => {
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
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

  return (
    <div className="h-container">
      <header>
        <img
          src="https://ucarecdn.com/dbb636d3-4b45-479d-9e5d-419d284891db/2.png"
          alt="Dashboard "
          style={{ width: '80%', height: 'auto' }}
        />
        <section className="log-container">
          <h1>Add your new books here!</h1>
          <Link to="/newbook" className="log-button">
            Add New Log
          </Link>
        </section>
      </header>
      <hr />
      <section className="submitted-data">
        <h1>📚 Current Reading Logs 📚</h1>
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
                        starDimension="20px"
                        starSpacing="2px"
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
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; presentation"
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
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; presentation"
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
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; presentation"
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
