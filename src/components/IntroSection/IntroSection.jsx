import React from 'react';
import { Nav } from 'react-bootstrap';
import './IntroSection.css';
import programerImage from './programmer.gif';


function IntroSection() {
  const scrollToSection = (event, targetId) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="intro-section">
      <div className="intro-container">
        <div className="intro-content-container">
          <div className="intro-content">
            <h1 className="light-text">Hello! I am</h1>
            <h1 className="purple-text">Alexander Georgiev</h1>
            <p className="large-text">
              Welcome to my website/portfolio. Explore, enjoy, and reach out to me!
            </p>
            <div className="intro-links">
                <Nav.Link onClick={(event) => scrollToSection(event, '#about')} className="link-style">about →</Nav.Link>
                <Nav.Link onClick={(event) => scrollToSection(event, '#skills')} className="link-style">skills &amp; experiences →</Nav.Link>
                <Nav.Link onClick={(event) => scrollToSection(event, '#projects')} className="link-style">projects →</Nav.Link>
                <Nav.Link onClick={(event) => scrollToSection(event, '#contact_me')} className="link-style">contact me →</Nav.Link>
            </div>
          </div>
        </div>
        <div className="intro-picture-container">
          <div className="intro-picture">
            <img src={programerImage} alt="Programmer" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
