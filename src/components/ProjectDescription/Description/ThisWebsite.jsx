import React from 'react';
import Description from '../Description';
import ThisWebsitePhoto from '../../Projects/NewWebsite.png';

const ThisWebsite = () => {
  return (
    <Description
      projectTitle="My New Personal Website"
      projectDescription={
        <>
          After creating my first website, I realized the potential for improving the presentation of my work through thoughtful
          <br />
          routing and enhanced organization. This website represents my effort to elevate the level of organization, allowing me
          <br />
          to showcase my projects more effectively.
          <br />
          <br />
          Other than this, this website serves as both a demonstration of my skills and a repository for my current and future projects.
          <br />
          It acts as a dynamic portfolio, enabling me to share my work with others and monitor my overall progress.
          <br />
          <br />
          I hope you take enjoy exploring the website!
        </>
      }
      projectImage={ThisWebsitePhoto}
      backgroundColor="white"
      imagebackground="#987ee7"
      buttons={[
        { label: 'GitHub', link: 'https://github.com/alexsg2/Personal-Website' },
      ]}
      languagesUsed="Javascript, HTML, CSS, React"
    />
  );
};

export default ThisWebsite;
