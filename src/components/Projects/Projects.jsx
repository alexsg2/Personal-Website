import React from 'react'
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div id="projects">
        <h1>Hello, welcome to my website!</h1>
        <p>Check out my projects:</p>
        <Link to="/projects">
        <button>Go to Projects</button>
        </Link>
    </div>
  )
}

export default Projects