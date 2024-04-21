// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="studyMates">StudyMates</p>
      <div className="navlink-container">
      <NavLink  style={{ textDecoration: 'none' }} to="/" ><div className="link-nav first">Home</div></NavLink>
      <NavLink  style={{ textDecoration: 'none' }} to="/studybase" ><div className="link-nav">Study Group</div></NavLink>
      <NavLink  style={{ textDecoration: 'none' }} to="/" ><div className="link-nav">My Avatar</div></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
