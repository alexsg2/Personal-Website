import React from 'react';
import Description from '../Description';
import MuSentencePicture from '../../Projects/React.png';

const OldWebsite = () => {
    return (
        <Description
          projectTitle="Old Personal Website"
          projectDescription={
            <>
              This being my old personal website project, I initially set out to showcase my skills and display my projects. 
              <br/>
              However, as I delved into the development process, I soon realized that I needed to refine my project organization and make 
              <br/>
              better use of React's components. Furthermore, I recognized the necessity of implementing 
              <br/>
              routing to achieve my intended website functionality.
              <br/>
              <br/>
              It's important to note that this marks my first time making a new website, and despite the initial challenges, it has been 
              <br/>
              an invaluable learning experience. This project has provided me with insights and knowledge that will undoubtedly shape the 
              <br/>
              mindset of my future website endeavors. I now have a clearer vision for enhancing my web development skills.
            </>
          }
          projectImage={MuSentencePicture}
          backgroundColor="white"
          imagebackground="#2C666E"
          buttons={[
            { label: 'GitHub', link: 'https://github.com/alexsg2/My-Personal-Website' },
          ]}
          languagesUsed="Javascript, HTML, CSS, React"
        />
      )
}

export default OldWebsite