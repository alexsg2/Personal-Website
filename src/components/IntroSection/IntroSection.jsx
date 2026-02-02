import React from 'react';
import { Nav } from 'react-bootstrap';
import programerImage from './programmer.gif';

function IntroSection() {
  const scrollToSection = (event, targetId) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const linkClass = "py-2 px-5 rounded-[15px] cursor-pointer mb-3 sm:mr-4 lg:mr-9 font-normal text-xl leading-6 text-black no-underline border border-black hover:bg-gray-400 inline-block";

  return (
    <section id="home" className="flex min-h-screen px-4 pt-20">
      <div className="flex flex-col lg:flex-row mx-auto items-center justify-center w-full">
        <div className="lg:mr-[65px] flex items-center">
          <div>
            <h1 className="font-light text-2xl leading-8 text-black mb-2">Hello! I am</h1>
            <h1 className="font-bold text-4xl md:text-[60px] leading-tight md:leading-[60px] text-brand mb-4">Alexander Georgiev</h1>
            <p className="font-normal text-lg leading-7 text-black">
              Welcome to my website/portfolio. Explore, enjoy, and reach out to me!
            </p>
            <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap">
              <Nav.Link onClick={(e) => scrollToSection(e, '#about')} className={linkClass}>about →</Nav.Link>
              <Nav.Link onClick={(e) => scrollToSection(e, '#skills')} className={linkClass}>skills &amp; experience →</Nav.Link>
              <Nav.Link onClick={(e) => scrollToSection(e, '#projects')} className={linkClass}>projects →</Nav.Link>
              <Nav.Link onClick={(e) => scrollToSection(e, '#contact_me')} className={linkClass}>contact me →</Nav.Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-center justify-start mt-[-100px] max-w-[600px]">
          <img src={programerImage} alt="Programmer" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;