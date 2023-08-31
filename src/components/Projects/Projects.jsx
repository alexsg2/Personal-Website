import React from 'react';
import { Link } from 'react-router-dom';
import ProjectContainer from './ProjectContainer';
import './Projects.css'; 
import MuSentencePhoto from './MuSentenceLogo.png';
import NewWebsitePhoto from './NewWebsite.png';
import SudokuPhoto from './Sudoku.png';
import ReactPhoto from './React.png';
import SisterCirclePhoto from './SisterCircle.png';


const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h1 className="project-header">project showcase</h1>
      <div className="top-containers">
        <ProjectContainer
          backgroundColor="#987ee7"
          projectName="This Website"
          languagesUsed="Javascript, HTML, CSS, React"
          photoSrc={NewWebsitePhoto}
          linkTo={"/projects/this_website"}
        />
        <ProjectContainer
          backgroundColor="orange"
          projectName="Sodoku Game"
          languagesUsed="Java, React, Node.js"
          photoSrc={SudokuPhoto}
          linkTo={"/projects/sodoku_game"}
        />
        <ProjectContainer
          backgroundColor="#f8f9fa"
          projectName="Sister Circle"
          languagesUsed="React-Native, Node.js, Firebase"
          photoSrc={SisterCirclePhoto}
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
