// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import homeIcon from '../assets/icon-home.svg';
import studyGroupIcon from '../assets/icon-groups.svg';
import studyStatsIcon from '../assets/icon-stats.svg';
import avatarIcon from '../assets/icon-avatar.svg';
import useLogout from "../hooks/useLogout.js";


const Navbar = () => {

  const { logout } = useLogout();

    const LogoutButton = () => {
        return (
            <div>
                <button className="logout-button"onClick={logout}>Log out</button>
            </div>
        )
    }

  return (
    <div className="navbar">
      <p className="studyMates">StudyMates</p>
      <div className="navlink-container">
      <NavLink  style={{ textDecoration: 'none' }} to="/" >
        <div className="link-nav first">
        <img src={homeIcon} alt="Home" className="nav-icon" />
          Home</div>

        </NavLink>
        <NavLink  style={{ textDecoration: 'none' }} to="/studybase" >
        <div className="link-nav">
        <img src={studyGroupIcon} className="nav-icon" />
          Study Group</div>

        </NavLink>
        <NavLink  style={{ textDecoration: 'none' }} to="/studybase" >
        <div className="link-nav">
        <img src={studyStatsIcon} alt="Study Stats" className="nav-icon" />
          Study Stats</div>

        </NavLink>
        <NavLink  style={{ textDecoration: 'none' }} to="/" >
        <div className="link-nav">
        <img src={avatarIcon} alt="My Avatar" className="nav-icon" />
          My Avatar</div>
        </NavLink>

        <LogoutButton /> 
      </div>
    </div>

    
  );
};

export default Navbar;
