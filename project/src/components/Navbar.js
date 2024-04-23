import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

// Define scrollToAbout function
const scrollToAbout = () => {
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
};

// Define scrollToTeams function
const scrollToTeams = () => {
  const teamsSection = document.getElementById('teams');
  teamsSection.scrollIntoView({ behavior: 'smooth' });
};

// Define scrollToGallery function
const scrollToGallery = () => {
  const gallerySection = document.getElementById('gallery');
  gallerySection.scrollIntoView({ behavior: 'smooth' });
};

// Define scrollToStatistics function
const scrollToStatistics = () => {
  const statisticsSection = document.getElementById('statistics');
  statisticsSection.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <Link className="navbar-brand" to="/"> 
          <h1 classname="about-heading">
            
            Cricket Premier League
            <div className="violet-line"></div>
            
          </h1>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="#" className="nav-link" onClick={scrollToAbout}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link"  onClick={scrollToTeams}>Teams</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" onClick={scrollToStatistics}>Point Table</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link"  onClick={scrollToGallery}>Gallery</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/login">Log In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
