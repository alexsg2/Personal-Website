import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Home, ProjectsPage } from './components';
import { useEffect } from 'react';

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
        </Routes>
    </Router>
  );
}

export default App;