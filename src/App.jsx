import './App.css';
import '../src/reset.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Projects/Projects';
import NavBar from './NavBar/navBar';
import LeftNavBar from './LeftNavBar/LeftNavBar';
import { useState } from 'react';


function App() {
  return (
    <BrowserRouter>

      <div className='wrap'>
        <NavBar />
          <LeftNavBar />
          <Projects />

      </div>
      {/* <Routes>
        <Route exact path="/" component={Home} />
        </Routes> */}

    </BrowserRouter>
  );
}

export default App;
