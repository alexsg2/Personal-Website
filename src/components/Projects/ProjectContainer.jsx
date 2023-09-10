import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectContainer.css';

const ProjectContainer = ({ backgroundColor, projectName, languagesUsed, photoSrc, linkTo }) => {
  const languagesArray = languagesUsed.split(',');

  return (
    <Link to={linkTo} className="project-container-link">
      <div className="project-container">
        <div className="top-section" style={{ backgroundColor }}>
          <img src={photoSrc} alt={projectName} className="centered-photo" />
        </div>
        <div className="bottom-section">
          <div className="project-info">
            <p className="project-name">{projectName}</p>
            <div className="languages-used">
              {languagesArray.map((language, index) => (
                <span key={index} className="language">
                  {language.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectContainer;
