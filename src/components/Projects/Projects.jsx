import React from 'react';
import { Link } from 'react-router-dom';
import ProjectContainer from './ProjectContainer';
import './Projects.css'; // Make sure to create this CSS file

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h1 className="project-header">project portfolio</h1>
      <div className="top-containers">
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
      </div>
      
      <div className="bottom-containers">
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
      </div>
      
      <Link to="/projects">
        <button className="go-to-projects-btn">Projects Page for Full List</button>
      </Link>
    </div>
  );
}

export default Projects;
