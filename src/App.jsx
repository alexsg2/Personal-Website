import { Routes, Route } from 'react-router-dom';
import { Home, ProjectsPage } from './components';
import ThisWebsite from './components/ProjectDescription/Description/ThisWebsite';
import Sudoku from './components/ProjectDescription/Description/Sudoku';
import SisterCircle from './components/ProjectDescription/Description/SisterCircle';
import MuSentence from './components/ProjectDescription/Description/MuSentence';
import OldWebsite from './components/ProjectDescription/Description/OldWebsite';
import LostandFound from './components/ProjectDescription/Description/LostAndFound';


/*
  Setting Up Routing Between Each Site Page:

  Home - This is our home page. (Will Start Here)
  Project - This a Project Page with more details.
  ThisWebsite - Project Description Page
  Sudoku - Project Description Page
  SisterCircle - Project Description Page
  MuSentence - Project Description Page
  OldWebsite - Project Description Page
*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/this_website" element={<ThisWebsite />} />
      <Route path="/projects/sudoku_game" element={<Sudoku />} />
      <Route path="/projects/sister_circle" element={<SisterCircle />} />
      <Route path="/projects/musentence" element={<MuSentence />} />
      <Route path="/projects/old_website" element={<OldWebsite />} />
      <Route path="/projects/lost_and_found" element={<LostandFound />} />
    </Routes>
  );
}

export default App;