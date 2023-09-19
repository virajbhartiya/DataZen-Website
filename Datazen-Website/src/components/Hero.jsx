import React from 'react'
import './Hero.css'; 
import DataZen_Logo from '../imgs/DataZen_Logo.png';

function Hero() 
{
  return (
    <>
      <div className='container'>
        <img src={DataZen_Logo} alt="" srcset="" className='Datazen_logo'/>
      </div>
    </>
  )
  
}

export default Hero


