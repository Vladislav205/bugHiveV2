import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import archive from './../icons/archive.svg'
import roadmap from './../icons/roadmap.svg'
import team from './../icons/team.svg'
import  { useState } from 'react';

const LeftNavBar = () => {

  const [activeButton, setActiveButton] = useState(-1);

  return (
    
      <div className="left__menu">

        
        <button className={activeButton === 0 ? 'active' : 'non-acive'} onClick={() => setActiveButton(0)}><img src={archive} alt="archive" className="left__menuIcon" />
          Archive</button>
        <button className={activeButton === 1 ? 'active' : 'non-acive'} onClick={() => setActiveButton(1)}><img src={roadmap} alt="roadmap" className="left__menuIcon" />Roadmap</button>
        <button className={activeButton === 2 ? 'active' : 'non-acive'} onClick={() => setActiveButton(2)}><img src={team} alt="team" className="left__menuIcon" />Team</button>
        </div>
    
  );
};

export default LeftNavBar;