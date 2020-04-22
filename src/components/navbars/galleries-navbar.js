import React from 'react';


export default function() {
  return (
    <div className="galleries-wrapper">
      <div className="galleries-bar">
        <div className="galleries-link-wrapper">
          <a href="https://www.nasa.gov/multimedia/imagegallery/iotd.html" activeClassName="nav-link-active">
            <h1>Image of the Day</h1>
          </a>
        </div>

        <div className="galleries-link-wrapper">
          <a href="https://www.nasa.gov/multimedia/imagegallery/index.html" activeClassName="nav-link-active">
            <h1>Image Galleries</h1>
          </a>
        </div>

        <div className="galleries-link-wrapper">
          <a href="https://www.nasa.gov/multimedia/videogallery/index.html" activeClassName="nav-link-active">
            <h1>Videos</h1>
          </a>
        </div>

        <div className="galleries-link-wrapper">
          <a href="https://www.nasa.gov/content/ultra-high-definition-video-gallery" activeClassName="nav-link-active">
            <h1>Ultra High-Def Videos</h1>
          </a>
        </div>

        <div className="galleries-link-wrapper">
          <a href="https://www.nasa.gov/multimedia/guidelines/index.html" activeClassName="nav-link-active">
            <h1>Usage and Copyright</h1>
          </a>
        </div>

      </div>
    </div>
  );
};
    