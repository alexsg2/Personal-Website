import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectContainer from '../Projects/ProjectContainer'; // Make sure to provide the correct path
import './ProjectsPage.css'; // Import the new CSS file
import { FaArrowLeft } from 'react-icons/fa'; // Import the arrow icon
import MuSentencePhoto from '../Projects/MuSentenceLogo.png';
import NewWebsitePhoto from '../Projects/NewWebsite.png';
import SudokuPhoto from '../Projects/Sudoku.png';
import ReactPhoto from '../Projects/React.png';
import SisterCirclePhoto from '../Projects/SisterCircle.png';

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page">
      <Link to="/" className="back-button">
        <FaArrowLeft className="back-icon" /> Back to Home
      </Link>
      <div className="project-header">
        project page
        <div className="header-line"></div>
      </div>
        <ProjectContainer
          backgroundColor="#987ee7"
          projectName="This Website"
          languagesUsed="Javascript, HTML, CSS, React"
          photoSrc={NewWebsitePhoto}
          linkTo={"/this_website"}
        />
        <ProjectContainer
          backgroundColor="orange"
          projectName="Sodoku Game"
          languagesUsed="Java, React, Node.js"
          photoSrc={SudokuPhoto}
          linkTo={"/sodoku_game"}
        />
        <ProjectContainer
          backgroundColor="#f8f9fa"
          projectName="Sister Circle"
          languagesUsed="React-Native, Node.js, Firebase"
          photoSrc={SisterCirclePhoto}
          linkTo={"/sister_circle"}
        />
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
  );
}

export default ProjectsPage;
