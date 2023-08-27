import React from 'react';
import { Link } from 'react-router-dom';
import ProjectContainer from './ProjectContainer';
import './Projects.css'; // Make sure to create this CSS file
import javaPhoto from '../Skills/SkillPhotos/java.png';
import MuSentencePhoto from './MuSentenceLogo.png';
import NewWebsitePhoto from './NewWebsite.png';
import SudokuPhoto from './Sudoku.png';
import ReactPhoto from './React.png';


const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h1 className="project-header">project portfolio</h1>
      <div className="top-containers">
        <ProjectContainer
        backgroundColor="#987ee7"
        projectName="This Website"
        languagesUsed="Javascript, HTML, CSS, React"
        photoSrc={NewWebsitePhoto}
        />
        <ProjectContainer
          backgroundColor="orange"
          projectName="Sodoku Game"
          languagesUsed="Java, React, Node.js"
          photoSrc={SudokuPhoto}
        />
        <ProjectContainer
          backgroundColor="gray"
          projectName="Sister Circle"
          languagesUsed="React-Native, Node.js, Firebase"
          photoSrc={javaPhoto}
        />
      </div>
      <div className="bottom-containers">
        <ProjectContainer
          backgroundColor="#2C666E"
          projectName="MuSentence"
          languagesUsed="Python, Django, React"
          photoSrc={MuSentencePhoto}
        />
        <ProjectContainer
          backgroundColor="#517664"
          projectName="Old Website"
          languagesUsed="Javascript, HTML, CSS, React"
          photoSrc={ReactPhoto}
        />
      </div>
      
      <Link to="/projects">
        <button className="go-to-projects-btn">Projects Page for Full List</button>
      </Link>
    </div>
  );
}

export default Projects;
