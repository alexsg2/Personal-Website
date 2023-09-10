import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, ProjectsPage } from './components';
import { useEffect } from 'react';
import ThisWebsite from './components/ProjectDescription/Description/ThisWebsite';
import Sudoku from './components/ProjectDescription/Description/Sudoku';
import SisterCircle from './components/ProjectDescription/Description/SisterCircle';
import MuSentence from './components/ProjectDescription/Description/MuSentence';
import OldWebsite from './components/ProjectDescription/Description/OldWebsite';

/*
  Setting Up Routing Between Each Site Page:

  Home - This is our home page. (Will Start Here)
  Project - This a Project Page with more details.
*/

function App() {
  useEffect(() => {
    document.title = "Alexander Georgiev";
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/this_website" element={<ThisWebsite />} />
        <Route path="/projects/sodoku_game" element={<Sudoku />} />
        <Route path="/projects/sister_circle" element={<SisterCircle />} />
        <Route path="/projects/musentence" element={<MuSentence />} />
        <Route path="/projects/old_website" element={<OldWebsite />} />
      </Routes>
    </Router>
  );
}

export default App;