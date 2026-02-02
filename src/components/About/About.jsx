import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from './image.png';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen" id="about">
      {/* Photo section for desktop - shows on left */}
      <div className="hidden lg:flex lg:flex-[1] p-5 flex-col justify-center items-center lg:order-1">
        <img src={profilePhoto} alt="Profile" className="rounded-full max-w-full h-auto border-2 border-black w-full max-w-[400px]" />
      </div>

      {/* Text section */}
      <div className="lg:flex-[2] p-5 flex flex-col justify-start items-center lg:order-2">
        <h2 className="font-bold text-5xl leading-[48px] text-black mt-20 lg:mt-40 mb-10 relative after:content-[''] after:block after:w-full after:max-w-[300px] after:h-[5px] after:bg-black after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2">
          about me
        </h2>

        {/* Photo section - shows after title on mobile only */}
        <div className="lg:hidden mb-8">
          <img src={profilePhoto} alt="Profile" className="rounded-full max-w-full h-auto border-2 border-black w-full max-w-[200px] sm:max-w-[250px]" />
        </div>

        <p className="font-light text-xl leading-7 text-black px-6 md:px-12 mb-6">
          Welcome to my personal website! Here, I present a good amount of personal and collaborative projects that provide a window
          into my creative journey. Along the way, I've mastered a diverse spectrum of programming languages. For further details,
          I invite you to delve into the "Skills" section.
        </p>
        <p className="font-light text-xl leading-7 text-black px-6 md:px-12 mb-6">
          During my spare time, I like working on projects that use the skills I've learned from my studies or picked up on my own.
          I'm committed to always looking for chances to get better at technical skills and improve myself.
        </p>
        <p className="font-light text-xl leading-7 text-black px-6 md:px-12 mb-6">
          When I'm not coding, you'll often find me spending time with friends, going on scenic hikes, and eagerly hitting the slopes
          for some exhilarating skiing during the winter months.
        </p>
        <Link to="/projects">
          <button className="mt-10 py-2.5 px-5 text-lg bg-brand text-white border-0 rounded-[10px] cursor-pointer hover:bg-brand-hover">
            Check out my projects here
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;