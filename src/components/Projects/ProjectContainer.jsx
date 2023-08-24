import React, { useState } from 'react';
import './ProjectContainer.css';
import javaPhoto from '../Skills/SkillPhotos/java.png';

const ProjectContainer = () => {
  const [backgroundColor, setBackgroundColor] = useState('#f0f0f0');

  return (
    <div className="container">
      <div className="top-section" style={{ backgroundColor }}>
        <img src={javaPhoto} alt="Java" className="rounded-photo" />
      </div>
      <div className="bottom-section">
        <div className="project-info">
          <p className="project-name">Project Name</p>
          <p className="languages-used">Languages Used</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
