import React from 'react';
import './styles/styles.scss';

const DashboardPage = () => {
  // Sample reading log data
  const readingLog = [
    { title: 'Book 1', author: 'Author 1', pages: 200 },
    { title: 'Book 2', author: 'Author 2', pages: 150 },
    // Add more reading log entries as needed
  ];

  return (
    <div className="h-container">
      <header>
        <h1>Dashboard for now</h1>
      </header>

      <section>
        <h2>Reading Log</h2>
        <ul>
          {readingLog.map((entry, index) => (
            <li key={index}>
              <strong>Title:</strong> {entry.title},{' '}
              <strong>Author:</strong> {entry.author},{' '}
              <strong>Pages:</strong> {entry.pages}
            </li>
          ))}
        </ul>
      </section>

      <section>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qh8d8wKw0jE?si=K_ruwvbRCt0c_lWW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>
    </div>
  );
};

export default DashboardPage;
