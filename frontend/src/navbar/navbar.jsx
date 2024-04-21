// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/studybase" >Study Group</NavLink>
      <NavLink to="/avatar" >Avatar</NavLink>
    </div>
  );
};

export default Navbar;
