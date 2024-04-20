/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import StudyGroup from './studygroup/StudyGroup.jsx';
import StudyBase from './studygroup/StudyBase.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
        
          <Route path="/" element={authUser ? <Homepage /> : <Navigate to={"/login"} />} />
          <Route path="/studygroup" element={authUser ? <StudyBase /> : <Navigate to={"/login"} />} />
          <Route path="/signup" element={authUser ? <Navigate to={"/"}/> : <Signup />} />
          <Route path="/login" element={authUser ? <Navigate to={"/"}/> : <Login />} />
          <Route path="/leaderboard" element={authUser ? <Leaderboard />: <Navigate to={"/login"} /> } />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;