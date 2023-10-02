import React, { useState, useEffect } from 'react';
import '../styles/Navbar2.css';
import SomaiyaLogo from '../imgs/Somaiya_logo.png';

function Navbar2() {
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => 
  {
    const handleResize = () => 
    {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => 
    {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  useEffect(() => 
  {
    setisDropdownOpen(windowWidth <= 1060);
  }, [windowWidth]);

  const toggleDropdown = () => {
    setisDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='navbar-container'>
      <div className='navbar-space'></div>

      <div className="navbar-side" onClick={toggleDropdown}>
        <button>
          <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="23" height="2" transform="matrix(-1 0 0 1 23 0)" fill="#CC0000" className='hamburger-menu' />
            <rect width="23" height="2" transform="matrix(-1 0 0 1 23 6)" fill="#CC0000" />
            <rect width="23" height="2" transform="matrix(-1 0 0 1 23 12)" fill="#CC0000" />
          </svg>
        </button>
      </div>

      {(windowWidth > 1060 || !isDropdownOpen) && 
      (
        <div className='navbar-title'>
          <h4 className='navbar-home'> <a href="#home">Home</a> </h4>
          <h4 className='navbar-about'> <a href="#about">About</a> </h4>
          <h4 className='navbar-event'> <a href="#event">Events</a> </h4>
          <h4 className='navbar-team'> <a href="#team">Team</a> </h4>
        </div>
      )}

      <div className='navbar-space2'></div>
      <div className='navbar-image'>
        <img src={SomaiyaLogo} alt="" srcSet="" className='Somaiya_logo' />
      </div>
    </div>
  );
}

export default Navbar2;
