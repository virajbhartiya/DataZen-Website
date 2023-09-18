import React from 'react'
import './Navbar.css'; 
import SomaiyaLogo from '../imgs/Somaiya_logo.png'; 

function Navbar() 
{
  return (
    <>
    <div className='container'>
    <nav className="navbar">
      <div className="navbar-center">
        <a className='nav_link'>Home</a>
        <a>About</a>
        <a >Events</a>
        <a >Team</a>
      </div> 
      <div>

      <img src={SomaiyaLogo} alt="" srcset=""  className='Somaiya_logo'/>
      
      </div>
      
    
    </nav>
    
    </div>
    </>
  
  );
}

export default Navbar;