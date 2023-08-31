import React from 'react';
import './Skills.css';
import javaPhoto from './SkillPhotos/java.png';
import cPhoto from './SkillPhotos/c.png';
import pythonPhoto from './SkillPhotos/python.png';
import javascriptPhoto from './SkillPhotos/javascript.png';
import reactPhoto from './SkillPhotos/reactPhoto.png';
import nodePhoto from './SkillPhotos/nodejs.png';
import flaskPhoto from './SkillPhotos/flask.png';
import bootstrapPhoto from './SkillPhotos/bootstrap.png';
import gitPhoto from './SkillPhotos/git.png';
import linuxPhoto from './SkillPhotos/linux.png';
import vscodePhoto from './SkillPhotos/vscode.png';
import figmaPhoto from './SkillPhotos/figma.png';
import resumePDF from './SkillPhotos/resumePDF.pdf';

const Skills = () => {
  return (
    <div id="skills" className="skill-section">
      <h2 className="skill-header">skills &amp; experience</h2>
      <div className="skill-containers">
        <div className="skill-container">
          <legend className="skill-legend">Languages</legend>
          <div className="photos">
             <div className="photo-row">
              <div className="image-with-text">
                <img src={javaPhoto} alt="Java" className="rounded-photo" />
                <p>Java</p>
              </div>
              <div className="image-with-text">
                <img src={cPhoto} alt="C" className="rounded-photo" />
                <p>C</p>
              </div>
            </div>
            <div className="photo-row">
              <div className="image-with-text">
                <img src={pythonPhoto} alt="Python" className="rounded-photo" />
                <p>Python</p>
              </div>
              <div className="image-with-text">
                <img src={javascriptPhoto} alt="JavaScript" className="rounded-photo" />
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-container">
          <legend className="skill-legend">Frameworks/Libraries</legend>
          <div className="photos">
            <div className="photo-row">
              <div className="image-with-text">
                <img src={reactPhoto} alt="React" className="rounded-photo" />
                <p>React</p>
              </div>
              <div className="image-with-text">
                <img src={nodePhoto} alt="Node" className="rounded-photo" />
                <p>Node.js</p>
              </div>
            </div>
            <div className="photo-row">
              <div className="image-with-text">
                <img src={flaskPhoto} alt="Flask" className="rounded-photo" />
                <p>Flask</p>
              </div>
              <div className="image-with-text">
                <img src={bootstrapPhoto} alt="Bootstrap" className="rounded-photo" />
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-container">
          <legend className="skill-legend">Tools</legend>
          <div className="photos">
            <div className="photo-row">
              <div className="image-with-text">
                <img src={gitPhoto} alt="Git" className="rounded-photo" />
                <p>Git</p>
              </div>
              <div className="image-with-text">
                <img src={linuxPhoto} alt="Linux" className="rounded-photo" />
                <p>Linux</p>
              </div>
            </div>
            <div className="photo-row">
              <div className="image-with-text">
                <img src={vscodePhoto} alt="VScode" className="rounded-photo" />
                <p>Visual Studio Code</p>
              </div>
              <div className="image-with-text">
                <img src={figmaPhoto} alt="Figma" className="rounded-photo" />
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-button-container">
        <a href={resumePDF} download className="rounded-button">
          See More on My Resume 
        </a>
      </div>
    </div>
  );
}

export default Skills;
