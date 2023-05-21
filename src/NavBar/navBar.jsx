import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from './img/Frame4.svg';
import settings from './img/set_icon.svg';
import user from './img/user_icon.png';
import  { useState } from 'react';

const NavBar = () => {

  const [activeButton, setActiveButton] = useState(0);


  return (
    <nav className="navbar__1">
        <div className="left__nav">
      <div className="nav__logo">
        
          <img src={logo} alt="Logo" />
          
      </div>
        <h1 className="Name_Bughive">BUGHIVE</h1>

        </div>
      <div className="nav-buttons">
        <Link to="/projects">
          <button className={activeButton === 0 ? 'active' : ''} onClick={() => setActiveButton(0)}>Projects</button>
        </Link>
        <Link to="/dashboard">
          <button className={activeButton === 1 ? 'active' : ''} onClick={() => setActiveButton(1)}>Dashboard</button>
        </Link>
        <Link to="/people">
          <button className={activeButton === 2 ? 'active' : ''} onClick={() => setActiveButton(2)}>People</button>
        </Link>
        <button className="Create_button">Create</button>
      </div>
      <div className="right__nav">

        
        <img src={settings} alt="settings" />
        <img src={user} alt="user" />
      </div>
    </nav>
  );
};

export default NavBar;