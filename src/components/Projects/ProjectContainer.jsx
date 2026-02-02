import React from 'react';
import { Link } from 'react-router-dom';

const ProjectContainer = ({ backgroundColor, projectName, languagesUsed, photoSrc, linkTo }) => {
  const languagesArray = languagesUsed.split(',');

  return (
    <Link to={linkTo} className="text-inherit no-underline">
      <div className="w-full max-w-[350px] mx-auto min-w-0 border border-gray-300 rounded-[10px] text-center overflow-hidden hover:scale-105 transition-transform flex flex-col">
        <div className="flex justify-center items-center h-[200px] box-content" style={{ backgroundColor }}>
          <img src={photoSrc} alt={projectName} className="max-w-[80%] max-h-[80%] object-contain" />
        </div>
        <div className="bg-white border-t border-gray-300 flex-1 min-h-0 box-border flex flex-col justify-center py-3 px-2">
          <p className="font-bold mb-2 text-sm">{projectName}</p>
          <div className="flex justify-center items-center flex-wrap gap-1">
            {languagesArray.map((language, index) => (
              <span key={index} className="py-0.5 px-1.5 rounded text-xs bg-gray-100">
                {language.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectContainer;