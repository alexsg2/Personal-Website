import React from 'react';
import Description from '../Description';
import MuSentencePicture from '../../Projects/MuSentenceLogo.png';

const MuSentence = () => {
    return (
        <Description
          projectTitle="MuSentence"
          projectDescription={
            <>
              MuSentence is an innovative music discovery platform designed to help users find the perfect song to match their emotions 
              <br/>
              or thoughts. It caters to music enthusiasts seeking a quick and personalized way to explore new music based on their mood or specific phrases.
              <br/>
              <br/>
              MuSentence achieves its goal by analyzing user-input sentences and identifying the most suitable songs 
              <br/>
              that resonate with the emotional context. Leveraging a vast database of songs, it employs sophisticated algorithms to make precise music 
              <br/>
              recommendations. Users can effortlessly access their recommended songs by clicking on the associated album cover. Furthermore,
              <br/>
              MuSentence seamlessly integrates with various streaming services, allowing users to instantly 
              <br/>
              enjoy their selected songs on their preferred platform.
              <br/>
              <br/>
              The development of MuSentence was a collaborative effort that utilized several key technologies and tools. 
              To facilitate remote 
              <br/>
              and shared coding sessions, GitHub and LiveShare were instrumental in enabling effective teamwork. 
              The project's backend and frontend were 
              <br/>
              seamlessly integrated using Django, connecting Python-based calculations with the 
              React.JS website to provide users with a smooth 
              <br/>
              and efficient music discovery experience.

              
            </>
          }
          projectImage={MuSentencePicture}
          backgroundColor="white"
          imagebackground="#517664"
          buttons={[
            { label: 'GitHub', link: 'https://github.com/Flucc/MUSENTENCE' },
            { label: 'DevPost', link: 'https://devpost.com/software/musentence' }
          ]}
          languagesUsed="Python, Django, React"
        />
      )
}

export default MuSentence