import React from "react";
import "./styles/styles.scss";

const DashboardPage = () => {
  return (
    <div className="h-container">
      <header>
        <h1>Dashboard for now</h1>
      </header>
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
