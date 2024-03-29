import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import profilePhoto from './profile-photo.png';

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="info-section">
        <h2 className="about-header">about me</h2>
        <p className="about-text">            
          Welcome to my personal website! Here, I present a good amount of personal and collaborative projects that provide a window 
          into my creative journey. Along the way, I've mastered a diverse spectrum of programming languages. For further details, 
          I invite you to delve into the "Skills" section.
        </p>
        <p className="about-text">      
          During my spare time, I like working on projects that use the skills I've learned from my studies or picked up on my own. 
          I'm committed to always looking for chances to get better at technical skills and improve myself.
        </p>
        <p className="about-text">
          When I'm not coding, you'll often find me spending time with friends, going on scenic hikes, and eagerly hitting the slopes 
          for some exhilarating skiing during the winter months.
        </p>
        <Link to="/projects">
          <button className="projects-button">Check out my projects here</button>
        </Link>     
      </div>
      <div className="photo-section">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
      </div>
    </div>
  );
}

export default About;
