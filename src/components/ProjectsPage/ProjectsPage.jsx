import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectContainer from '../Projects/ProjectContainer';
import { FaArrowLeft } from 'react-icons/fa';
import MuSentencePhoto from '../Projects/MuSentenceLogo.png';
import NewWebsitePhoto from '../Projects/NewWebsite.png';
import SudokuPhoto from '../Projects/Sudoku.png';
import ReactPhoto from '../Projects/React.png';
import SisterCirclePhoto from '../Projects/SisterCircle.png';
import VTLogoPhoto from '../Projects/VTLogo.png';


function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-center p-5 overflow-x-hidden">
      <Link to="/" className="mb-5 flex items-center absolute top-5 left-5 no-underline text-gray-700">
        <FaArrowLeft className="mr-2" /> Back to Home
      </Link>
      <div className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-black mt-10 mb-16 relative px-4">
        project page
        <div className="block w-full max-w-[500px] h-[5px] bg-black absolute -bottom-5 left-1/2 -translate-x-1/2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] mx-auto px-4">
        <ProjectContainer
          backgroundColor="#8D1D41"
          projectName="VT Lost and Found"
          languagesUsed="Flask, MongoDB, React, GoogleVision"
          photoSrc={VTLogoPhoto}
          linkTo={"/projects/lost_and_found"}
        />
        <ProjectContainer
          backgroundColor="#987ee7"
          projectName="This Website"
          languagesUsed="Javascript, HTML, CSS, React"
          photoSrc={NewWebsitePhoto}
          linkTo={"/projects/this_website"}
        />
        <ProjectContainer
          backgroundColor="orange"
          projectName="Sudoku Puzzle Game"
          languagesUsed="Java, React, Node.js"
          photoSrc={SudokuPhoto}
          linkTo={"/projects/sudoku_game"}
        />
        <ProjectContainer
          backgroundColor="#517664"
          projectName="Old Website"
          languagesUsed="Javascript, HTML, CSS, React"
          photoSrc={ReactPhoto}
          linkTo={"/projects/old_website"}
        />
        <ProjectContainer
          backgroundColor="#f8f9fa"
          projectName="Sister Circle"
          languagesUsed="React-Native, Node.js, Firebase"
          photoSrc={SisterCirclePhoto}
          linkTo={"/projects/sister_circle"}
        />
        <ProjectContainer
          backgroundColor="#2C666E"
          projectName="MuSentence"
          languagesUsed="Python, Django, React"
          photoSrc={MuSentencePhoto}
          linkTo={"/projects/musentence"}
        />
      </div>
    </div>
  );
}

export default ProjectsPage;