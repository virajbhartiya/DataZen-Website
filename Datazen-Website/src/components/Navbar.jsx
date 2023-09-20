import React from 'react'
import './Navbar.css'; 
import SomaiyaLogo from '../imgs/Somaiya_logo.png'; 
import menu_icon from '../imgs/menu-icon.svg';

function Navbar() 
{
  return (
    <>
    <div className='container'>
    <nav className="navbar">
      <div className='menu'>
      <button>
      <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="23" height="2" transform="matrix(-1 0 0 1 23 0)" fill="#CC0000"/>
<rect width="23" height="2" transform="matrix(-1 0 0 1 23 6)" fill="#CC0000"/>
<rect width="23" height="2" transform="matrix(-1 0 0 1 23 12)" fill="#CC0000"/>
</svg>

      </button>
        
      </div>
      <div className="navbar-center">
        <a className='nav_link'>Home</a>
        <a>About</a>
        <a >Events</a>
        <a >Team</a>
      </div> 
      <div className='logo'>

      <img src={SomaiyaLogo} alt="" srcset=""  className='Somaiya_logo'/>
      
      </div>
      
    
    </nav>
    
    </div>
    </>
  
  );
}

export default Navbar;