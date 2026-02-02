import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Description = ({ projectTitle, projectDescription, projectImage, backgroundColor, imagebackground, buttons, languagesUsed }) => {
  const languagesArray = languagesUsed.split(',');

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-20 lg:py-0" style={{ backgroundColor }}>
      <Link to="/projects" className="flex items-center absolute top-5 left-5 no-underline text-gray-700">
        <FaArrowLeft className="mr-2" />
        <span className="hidden sm:inline">Back to Project Page</span>
        <span className="sm:hidden">Back</span>
      </Link>

      {/* Mobile Layout */}
      <div className="flex lg:hidden flex-col items-center w-full max-w-[600px]">
        <h2 className="font-bold text-3xl sm:text-4xl leading-tight text-black mb-8 text-center relative after:content-[''] after:block after:w-full after:max-w-[400px] after:h-[5px] after:bg-black after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
          {projectTitle}
        </h2>

        <div className="w-full max-w-[500px] h-[300px] sm:h-[400px] border border-black rounded-[10px] flex justify-center items-center mb-5" style={{ backgroundColor: imagebackground }}>
          <img src={projectImage} alt={`${projectTitle} Logo`} className="max-w-full max-h-full object-contain p-4" />
        </div>

        <div className="text-gray-600 flex justify-center items-center flex-wrap gap-1 mb-6">
          {languagesArray.map((language, index) => (
            <span key={index} className="py-0.5 px-1.5 m-1 border border-gray-300 rounded text-xs text-gray-600">
              {language.trim()}
            </span>
          ))}
        </div>

        <p className="text-sm sm:text-base leading-relaxed mb-6 text-center px-4">
          {projectDescription}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {buttons.map((button, index) => (
            <a key={index} href={button.link} className="py-2 px-4 text-sm sm:text-base bg-brand text-white border-0 no-underline rounded-[10px] cursor-pointer inline-block hover:bg-brand-hover">
              {button.label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full">
        <div className="flex-[0.5] flex justify-end">
          <div>
            <div className="w-[500px] h-[400px] border border-black rounded-[10px] flex justify-center items-center mb-5" style={{ backgroundColor: imagebackground }}>
              <img src={projectImage} alt={`${projectTitle} Logo`} className="max-w-full max-h-full object-contain" />
            </div>
            <div className="text-gray-600 flex justify-center items-center flex-wrap gap-1">
              {languagesArray.map((language, index) => (
                <span key={index} className="py-0.5 px-1.5 m-1 border border-gray-300 rounded text-xs text-gray-600">
                  {language.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 text-center">
          <div>
            <h2 className="font-bold text-5xl leading-[48px] text-black mb-10 relative after:content-[''] after:block after:w-[600px] after:h-[5px] after:bg-black after:absolute after:-bottom-5 after:left-1/2 after:-translate-x-1/2">
              {projectTitle}
            </h2>
            <p className="text-base leading-relaxed mt-12">
              {projectDescription}
            </p>
          </div>
          <div className="mt-10">
            {buttons.map((button, index) => (
              <a key={index} href={button.link} className="py-2.5 px-5 text-lg bg-brand text-white m-2 border-0 no-underline rounded-[10px] cursor-pointer inline-block hover:bg-brand-hover">
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;