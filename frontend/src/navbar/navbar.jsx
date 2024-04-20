// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
    
        <NavLink to="/" className="navbar-right-links">Home</NavLink>
        <NavLink to="/studygroup" className="navbar-right-links">Feed</NavLink>
       
    </div>
  );
};

export default Navbar;
