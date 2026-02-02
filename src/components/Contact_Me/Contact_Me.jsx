import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function ContactMe() {
  const btnClass = "py-2 sm:py-2.5 px-2 sm:px-3 md:px-5 text-xs sm:text-sm md:text-base lg:text-lg bg-brand text-white m-1 sm:m-2 border-0 no-underline rounded-[10px] cursor-pointer inline-flex items-center gap-1 sm:gap-2 hover:bg-brand-hover flex-wrap justify-center";

  return (
    <div id="contact_me" className="flex flex-col justify-center items-center min-h-screen px-4">
      <div className="p-3 sm:p-4 md:p-6 lg:p-8 rounded-[10px] border-2 border-black max-w-[600px] w-full text-center break-words mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 break-words">Contact Me</h1>
        <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 break-words px-2">Feel free to reach out to me via email or connect with me on LinkedIn or GitHub.</p>
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
          <a className={btnClass} href="mailto:alex.s.georgiev@gmail.com">
            <FaEnvelope className="text-sm sm:text-base" /> <span>Email</span>
          </a>
          <a className={btnClass} href="https://www.linkedin.com/in/alexandersg2-/">
            <FaLinkedin className="text-sm sm:text-base" /> <span>LinkedIn</span>
          </a>
          <a className={btnClass} href="https://github.com/alexsg2">
            <FaGithub className="text-sm sm:text-base" /> <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;