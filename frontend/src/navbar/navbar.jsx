// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
    
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/studygroup" >Study Group</NavLink>
        <NavLink to="/leaderboard" >Leaderboard</NavLink>
       
    </div>
  );
};

export default Navbar;
