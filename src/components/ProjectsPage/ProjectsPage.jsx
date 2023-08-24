import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <h1>PROJECT PAGE</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Projects;
