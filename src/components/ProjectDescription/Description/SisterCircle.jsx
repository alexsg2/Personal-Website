import React from 'react';
import Description from '../Description';
import SudokuPicture from '../../Projects/SisterCircle.png';

const SisterCircle = () => {
    return (
        <Description
          projectTitle="Sister Circle"
          projectDescription={
            <>
              Sister Circle is a mobile app born from the desire to enhance safety and convenience for women during social gatherings. 
              <br/>
              It all started when Sophya our groupmate found herself left behind during a birthday celebration, sparking the need for a 
              better 
              
              <br/> way 
              to stay connected with friends without compromising privacy. 
              <br/>
              <br/>
              In response, we embarked on creating an app that prioritizes simplicity and safety.

              <br/>
              With SisterCircle, women worldwide can enjoy their nights out with confidence. The app offers real-time location 
              <br/>
              tracking and notifications, 
              ensuring you and your friends always know each other's whereabouts. Creating and managing groups is hassle-free, 
              <br/>
              providing a seamless 
              experience for women looking to enhance their peace of mind. 
              <br/>
              <br/>
              We built this with a React Native frontend and Firebase's Firestore database, in order to  track people's information in real-time, 
              <br/>
              and to create profiles for group connection. 
            </>
          }
          projectImage={SudokuPicture}
          backgroundColor="white"
          imagebackground="#f8f9fa"
          buttons={[
            { label: 'GitHub', link: 'https://github.com/Flucc/SisterCircleVT' },
            { label: 'DevPost', link: 'https://devpost.com/software/hangout-helper' }
          ]}
          languagesUsed="React-Native, Node.js, Firebase"
        />
      )
}

export default SisterCircle