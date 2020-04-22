import React from 'react';


export default function() {
  return (
    <div className="downloads-wrapper">
      <div className="downloads-bar">
            <div className="downloads-link-wrapper">
            <a href="https://www.nasa.gov/connect/apps.html" activeClassName="nav-link-active">
                <h1>Apps</h1>
            </a>
            </div>

            <div className="downloads-link-wrapper">
            <a href="https://www.nasa.gov/podcasts" activeClassName="nav-link-active">
                <h1>Podcasts</h1>
            </a>
            </div>

            <div className="downloads-link-wrapper">
            <a href="https://www.nasa.gov/connect/ebooks/index.html" activeClassName="nav-link-active">
                <h1>E-Books</h1>
            </a>
            </div>

            <div className="downloads-link-wrapper">
            <a href="https://www.nasa.gov/connect/sounds/index.html" activeClassName="nav-link-active">
                <h1> Audio and Rigtones</h1>
            </a>
            </div>

        </div>
    </div>
  );
};
