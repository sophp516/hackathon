/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudyGroup from './studygroup/StudyGroup';
import Navbar from './navbar/navbar';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg'; // Fix the import path for viteLogo
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={StudyGroup} />
          <Route exact path="/studygroup" component={StudyGroup} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;