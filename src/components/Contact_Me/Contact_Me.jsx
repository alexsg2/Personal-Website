import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact_Me.css';

function ContactMe() {
  return (
    <div id="contact_me" className="contact-section">
      <div className="contact-overlay">
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me via email or connect with me on LinkedIn or GitHub.</p>
        <a className="rounded-button" href="mailto:alex.s.georgiev@gmail.com">
          <FaEnvelope /> Email
        </a>
        <a className="rounded-button" href="https://www.linkedin.com/in/alexandersg-/">
          <FaLinkedin /> LinkedIn
        </a>
        <a className="rounded-button" href="https://github.com/alexsg2">
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
