/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StudyGroup from './studygroup/StudyGroup.jsx';
import Navbar from './navbar/navbar';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg'; // Fix the import path for viteLogo
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (

    <Router>
        {/* <Navbar /> */}
      <div>
       <Routes>
          <Route path="/" element={<StudyGroup />} />
          <Route path="/studygroup" element={StudyGroup} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;