/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import StudyGroup from './studygroup/StudyBase.jsx';
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
          <Route path="/studygroup" element={authUser ? <StudyGroup /> : <Navigate to={"/login"} />} />
          <Route path="/signup" element={authUser ? <Navigate to={"/"}/> : <Signup />} />
          <Route path="/login" element={authUser ? <Navigate to={"/"}/> : <Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;