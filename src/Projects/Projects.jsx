import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import ProjMenu from './ProjMenu/ProjMenu';
import MainProj from './MainProj/MainProj';
import data from './../data'
import  { useState } from 'react';


const Projects = (  ) => {

    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedProject, setSelectedProject] = useState(data[0]);

    const handleProjectSelect = (project) => {
      setSelectedProject(project);
    };
    const handleStateChange = (newState) => {
      setSelectedProject((prevProject) => ({
        ...prevProject,
        tabs: newState[selectedProject.id]?.tabs || [],
      }));
    };
  
    console.log('Выбранный проект:', selectedProject);

return (
    <div className="class__home">
      <div className="main__container">
        <div className="main__container__menu">
        <ProjMenu
            projects={data}
            selectedProject={selectedProject}
            onProjectSelect={handleProjectSelect}
          />
        </div>
        <div className="main__column">
          <div className="task__container">
          {/* <MainProj data={selectedProject.tabs} selectedProject={selectedProject}/> */}
          <MainProj
              data={selectedProject.tabs}
              selectedProject={selectedProject}
              onStateChange={handleStateChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;