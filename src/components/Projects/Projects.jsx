import React from 'react';
import { Link } from 'react-router-dom';
import ProjectContainer from './ProjectContainer';
import MuSentencePhoto from './MuSentenceLogo.png';
import NewWebsitePhoto from './NewWebsite.png';
import SudokuPhoto from './Sudoku.png';
import ReactPhoto from './React.png';
import SisterCirclePhoto from './SisterCircle.png';
import VTLogoPhoto from './VTLogo.png';


const Projects = () => {
  return (
    <div id="projects" className="flex flex-col justify-start items-center min-h-screen w-full px-4 md:px-0">
      <h1 className="font-bold text-5xl leading-[48px] text-black mt-10 mb-16 relative after:content-[''] after:block after:h-[5px] after:bg-black after:absolute after:-bottom-5 after:left-0 after:w-full after:max-w-[500px] md:after:left-1/2 md:after:-translate-x-1/2 md:after:w-[500px] md:after:max-w-none">
        project showcase
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 w-full max-w-[1200px] mb-5">
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
          backgroundColor="#8D1D41"
          projectName="VT Lost and Found"
          languagesUsed="Flask, MongoDB, React, GoogleVision"
          photoSrc={VTLogoPhoto}
          linkTo={"/projects/lost_and_found"}
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
        <ProjectContainer
          backgroundColor="#517664"
          projectName="Old Website"
          languagesUsed="Javascript, HTML, CSS, React"
          photoSrc={ReactPhoto}
          linkTo={"/projects/old_website"}
        />
      </div>

      <Link to="/projects">
        <button className="mt-10 py-2.5 px-5 text-lg bg-brand text-white border-0 rounded-[10px] cursor-pointer hover:bg-brand-hover no-underline">
          Projects Page for Full List
        </button>
      </Link>
    </div>
  );
}

export default Projects;