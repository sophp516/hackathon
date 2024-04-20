/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StudyGroup from './studygroup/StudyGroup.jsx';
import StudyBase from './studygroup/StudyBase.jsx';
import Navbar from './navbar/navbar';
import Signup from './authpage/Signup.jsx';
import Login from './authpage/Login.jsx';
import Homepage from './homepage/Homepage.jsx';
import { useAuthContext } from './context/AuthContext.jsx';
import './App.css';
import ReactDOM from 'react-dom';
import Leaderboard from './components/Leaderboard.jsx';

const App = () => {

  const {authUser} = useAuthContext();

  return (

    <Router>
        <Navbar />
      <div>
       <Routes>
          <Route path="/" element={<StudyGroup />} />
          <Route path="/studygroup" element={<StudyBase/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;