import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaArrowLeft } from 'react-icons/fa';
import './Description.css';

const Description = ({ projectTitle, projectDescription, projectImage, backgroundColor, imagebackground, buttons, languagesUsed }) => {
  const splitScreenStyle = {
    backgroundColor: backgroundColor
  };
  const imagecontainerStyle = {
    backgroundColor: imagebackground
  };

  const languagesArray = languagesUsed.split(',');

  return (
    <div className="split-screen" style={splitScreenStyle}>
      <Link to="/projects" className="back-button">
            <FaArrowLeft className="back-icon" /> Back to Project Page
      </Link>
      <div className="left-section">
        <div className="content-container">
          <div className="imagecontainer" style={imagecontainerStyle}>
            <img src={projectImage} alt={`${projectTitle} Logo`} className="centered-photo" />
          </div>
          <div className="languages-used">
            {languagesArray.map((language, index) => (
              <span key={index} className="language">
                {language.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="description">
          <h2 className="project-title">{projectTitle}</h2>
          <p className="project-description">{projectDescription}</p>
        </div>
        <div className="info">
          {buttons.map((button, index) => (
            <a key={index} href={button.link} className="rounded-button">{button.label}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
