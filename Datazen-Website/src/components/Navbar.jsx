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
            <img src={menu_icon} alt="" srcset="" className='menu-icon'/>
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