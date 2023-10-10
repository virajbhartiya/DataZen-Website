import React from 'react';
import '../styles/About.css'
import img from '../imgs/Background.jpg'

function About() {
  return (
    <>
    <div className='box' >

   
    <div className='about-box' >
      <img src={img} alt="" className='about-image'/>   
    </div>
    <div className="redfilter"></div>

    <div>
      
    </div>

   

    <p className='about-content' >

    <h2>About</h2>

    <p>Welcome to DataZen, where our core mission is to democratize the world of data. We are dedicated to equipping individuals from all walks of life with the tools and knowledge they need to navigate the intricate landscape of data, irrespective of their existing background or skill democratize the world of data. We are dedicated to equipping individuals from all walks of life with the tools and knowledge they need to navigate the intricate landscape of data, irrespective of their existing background or skill set.
      </p>
    </p>
    
    <div  id='about'></div>
    </div>

   
    </>
  )
}

export default About