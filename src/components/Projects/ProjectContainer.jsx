import React from 'react';
import './ProjectContainer.css';

const ProjectContainer = ({ backgroundColor, projectName, languagesUsed, photoSrc }) => {
  // Convert the languagesUsed string to an array
  const languagesArray = languagesUsed.split(',');

  return (
    <div className="container">
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
  );
};

export default ProjectContainer;
