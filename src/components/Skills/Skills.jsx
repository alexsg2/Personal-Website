import React from 'react';
import javaPhoto from './SkillPhotos/java.png';
import cPhoto from './SkillPhotos/c.png';
import pythonPhoto from './SkillPhotos/python.png';
import javascriptPhoto from './SkillPhotos/javascript.png';
import reactPhoto from './SkillPhotos/reactPhoto.png';
import nodePhoto from './SkillPhotos/nodejs.png';
import flaskPhoto from './SkillPhotos/flask.png';
import bootstrapPhoto from './SkillPhotos/bootstrap.png';
import gitPhoto from './SkillPhotos/git.png';
import linuxPhoto from './SkillPhotos/linux.png';
import vscodePhoto from './SkillPhotos/vscode.png';
import figmaPhoto from './SkillPhotos/figma.png';
import resumePDF from './SkillPhotos/resumePDF.pdf';

const Skills = () => {
  const sectionClass = "flex flex-col justify-start items-center min-h-screen px-4";
  const headerClass = "font-bold text-5xl leading-[48px] text-black mt-20 mb-10 relative after:content-[''] after:block after:w-full after:max-w-[500px] after:h-[5px] after:bg-black after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2";
  const containersClass = "flex flex-col lg:flex-row gap-8 lg:gap-[100px] w-full max-w-[1400px] mt-10 px-4";
  const boxClass = "flex-1 rounded-[10px] p-5 text-center border-2 border-black";
  const legendClass = "font-semibold text-xl leading-7 text-black";
  const photosClass = "flex flex-col justify-between mt-5";
  const rowClass = "flex justify-center gap-[30px] sm:gap-[50px] p-5";
  const imgClass = "w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full border-2 border-black";
  const itemClass = "flex flex-col items-center";

  return (
    <div id="skills" className={sectionClass}>
      <h2 className={headerClass}>skills &amp; experience</h2>
      <div className={containersClass}>
        <div className={boxClass}>
          <legend className={legendClass}>Languages</legend>
          <div className={photosClass}>
            <div className={rowClass}>
              <div className={itemClass}>
                <img src={javaPhoto} alt="Java" className={imgClass} />
                <p className="text-sm sm:text-base">Java</p>
              </div>
              <div className={itemClass}>
                <img src={cPhoto} alt="C" className={imgClass} />
                <p className="text-sm sm:text-base">C</p>
              </div>
            </div>
            <div className={rowClass}>
              <div className={itemClass}>
                <img src={pythonPhoto} alt="Python" className={imgClass} />
                <p className="text-sm sm:text-base">Python</p>
              </div>
              <div className={itemClass}>
                <img src={javascriptPhoto} alt="JavaScript" className={imgClass} />
                <p className="text-sm sm:text-base">JavaScript</p>
              </div>
            </div>
          </div>
        </div>
        <div className={boxClass}>
          <legend className={legendClass}>Frameworks/Libraries</legend>
          <div className={photosClass}>
            <div className={rowClass}>
              <div className={itemClass}>
                <img src={reactPhoto} alt="React" className={imgClass} />
                <p className="text-sm sm:text-base">React</p>
              </div>
              <div className={itemClass}>
                <img src={nodePhoto} alt="Node" className={imgClass} />
                <p className="text-sm sm:text-base">Node.js</p>
              </div>
            </div>
            <div className={rowClass}>
              <div className={itemClass}>
                <img src={flaskPhoto} alt="Flask" className={imgClass} />
                <p className="text-sm sm:text-base">Flask</p>
              </div>
              <div className={itemClass}>
                <img src={bootstrapPhoto} alt="Bootstrap" className={imgClass} />
                <p className="text-sm sm:text-base">Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
        <div className={boxClass}>
          <legend className={legendClass}>Tools</legend>
          <div className={photosClass}>
            <div className={rowClass}>
              <div className={itemClass}>
                <img src={gitPhoto} alt="Git" className={imgClass} />
                <p className="text-sm sm:text-base">Git</p>
              </div>
              <div className={itemClass}>
                <img src={linuxPhoto} alt="Linux" className={imgClass} />
                <p className="text-sm sm:text-base">Linux</p>
              </div>
            </div>
            <div className={rowClass}>
              <div className={itemClass}>
                <img src={vscodePhoto} alt="VScode" className={imgClass} />
                <p className="text-sm sm:text-base">Visual Studio Code</p>
              </div>
              <div className={itemClass}>
                <img src={figmaPhoto} alt="Figma" className={imgClass} />
                <p className="text-sm sm:text-base">Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href={resumePDF} download className="mt-12 py-2.5 px-5 text-lg bg-brand text-white border-0 no-underline rounded-[10px] cursor-pointer hover:bg-brand-hover inline-block">
        See More on My Resume
      </a>
    </div>
  );
}

export default Skills;