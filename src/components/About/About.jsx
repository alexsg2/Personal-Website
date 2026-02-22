import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from './image.png';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center" id="about">
      {/* Desktop layout - 50/50 side by side */}
      <div className="hidden lg:flex lg:flex-row items-center w-full mx-auto px-8">
        {/* Photo - takes 1/3 of the space */}
        <div className="w-1/3 flex justify-center items-center">
          <img src={profilePhoto} alt="Profile" className="rounded-full h-auto border-2 border-black w-3/4 max-w-[400px]" />
        </div>

        {/* Text - takes 2/3 of the space */}
        <div className="w-2/3 flex flex-col items-center px-8">
          <h2 className="font-bold text-5xl leading-[48px] text-black mb-10 relative after:content-[''] after:block after:w-full after:max-w-[300px] after:h-[5px] after:bg-black after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2">
            about me
          </h2>
          <p className="font-light text-xl leading-7 text-black mb-6">
            Welcome to my personal website! Here, I present a good amount of personal and collaborative projects that provide a window
            into my creative journey. Along the way, I've mastered a diverse spectrum of programming languages. For further details,
            I invite you to delve into the "Skills" section.
          </p>
          <p className="font-light text-xl leading-7 text-black mb-6">
            During my spare time, I like working on projects that use the skills I've learned from my studies or picked up on my own.
            I'm committed to always looking for chances to get better at technical skills and improve myself.
          </p>
          <p className="font-light text-xl leading-7 text-black mb-6">
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

      {/* Mobile layout - stacked */}
      <div className="lg:hidden flex flex-col items-center p-5">
        <h2 className="font-bold text-5xl leading-[48px] text-black mt-20 mb-10 relative after:content-[''] after:block after:w-full after:max-w-[300px] after:h-[5px] after:bg-black after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2">
          about me
        </h2>

        <div className="mb-8 flex justify-center">
          <img src={profilePhoto} alt="Profile" className="rounded-full h-auto border-2 border-black w-[180px] sm:w-[220px] md:w-[260px]" />
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