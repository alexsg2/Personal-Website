import React from 'react';
import Description from '../Description';
import SudokuPicture from '../../Projects/Sudoku.png';

const Sudoku = () => {
  return (
    <Description
      projectTitle="Sudoku Puzzle Game"
      projectDescription={
        <>
          This Project is a Sudoku Puzzle Game that generates a unique experience every time, coupled with customizable difficulty levels.          
          <br />
          <br />
          My motivation for creating this game stemmed from my intrest for the game Sudoku. 
          I started working on this 
          <br />
          project to not only develop a functional and enjoyable game but also to put my problem-solving skills to the test. 
          <br />
          Throughout development, I successfully implemented an effective algorithm for generating and solving Sudoku boards, 
          <br /> 
          seamlessly merging the frontend and backend elements.          
          <br />
          <br />
          Beyond the fundamental gameplay, I introduced a range of valuable features, including 
          <br />
          a pause function for convenience, a solve button for assistance, the option to start a fresh game, a board refresh feature,
          <br />
          and even a user-friendly pause screen. 
          <br />
          <br />
          I invite you to explore the project below and enjoy playing!
        </>
      }
      projectImage={SudokuPicture}
      backgroundColor="white"
      imagebackground="orange"
      buttons={[
        { label: 'GitHub', link: 'https://github.com/alexsg2/Sudoku' },
      ]}
      languagesUsed="Java, React, Node.js"
    />
  )
}

export default Sudoku