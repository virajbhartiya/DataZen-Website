
import { Link as ScrollLink } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import '../styles/Navbar2.css';
import SomaiyaLogo from '../imgs/Somaiya_logo.png';

function Navbar2() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    setIsDropdownOpen(windowWidth <= 1060);
  }, [windowWidth]);

  const toggleDropdown = () => 
  {
    setIsDropdownOpen(!isDropdownOpen);

    if (isDropdownOpen==true) 
    {
      document.body.classList.add('no-scroll');
    } 
    else 
    {
      document.body.classList.remove('no-scroll');
    }
  };

  return (
    <div className={`navbar-container ${isDropdownOpen ? 'fade-out' : ''}`}>
      <div className='navbar-space'></div>
      <div className="navbar-side" onClick={toggleDropdown}>
      <button className='navbar-hamburger'>
          {isDropdownOpen ? (
            <svg
              width="23"
              height="14"
              viewBox="0 0 23 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`hamburger-menu ${isDropdownOpen ? 'open' : ''}`}
            >
              <rect width="23" height="2" transform="matrix(-1 0 0 1 23 0)" fill="#CC0000" />
              <rect width="23" height="2" transform="matrix(-1 0 0 1 23 6)" fill="#CC0000" />
              <rect width="23" height="2" transform="matrix(-1 0 0 1 23 12)" fill="#CC0000" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className={`cross ${isDropdownOpen ? 'open' : ''}`}
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                fill="#CC0000"
              />
            </svg>
          )}
        </button>
      </div>

      {(windowWidth > 1060 || !isDropdownOpen) && (
        <div className={`navbar-title ${isDropdownOpen ? 'open' : ''}`}>
          <ScrollLink to="home" spy={true} smooth={true} duration={500} offset={-50} onClick={toggleDropdown} isDynamic={true} className='navbar-home'>
            Home
          </ScrollLink>
          <ScrollLink to="about" spy={true} smooth={true} duration={500} offset={-50} onClick={toggleDropdown} className='h4'>
            About
          </ScrollLink>
          <ScrollLink to="event" spy={true} smooth={true} duration={500} offset={-50} onClick={toggleDropdown}>
            Events
          </ScrollLink>
          <ScrollLink to="team" spy={true} smooth={true} duration={500} offset={-50} onClick={toggleDropdown}>
            Team
          </ScrollLink>
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


