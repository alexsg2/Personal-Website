import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div id="skills" className="skill-section">
      <h2 className="skill-header">skills &amp; experiences</h2>
      <div className="skill-containers">
        <div className="skill-container">
          <legend className="skill-legend">Languages</legend>
          <div className="photos">
            <div className="photo-row">
              <div className="rounded-photo">JAVA</div> 
              <div className="rounded-photo">C</div>
            </div>
            <div className="photo-row">
              <div className="rounded-photo">Python</div>
              <div className="rounded-photo">JavaScript</div>
            </div>
          </div>
        </div>
        <div className="skill-container">
          <legend className="skill-legend">Frameworks/Libraries</legend>
          <div className="photos">
            <div className="photo-row">
              <div className="rounded-photo">React</div>
              <div className="rounded-photo">Flask</div>
            </div>
            <div className="photo-row">
              <div className="rounded-photo">node.js</div>
              <div className="rounded-photo">React Native</div>
            </div>
          </div>
        </div>
        <div className="skill-container">
          <legend className="skill-legend">Tools</legend>
          <div className="photos">
            <div className="photo-row">
              <div className="rounded-photo">Git</div>
              <div className="rounded-photo">Linux</div>
            </div>
            <div className="photo-row">
              <div className="rounded-photo">Visual Studio Code</div>
              <div className="rounded-photo">Figma</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
