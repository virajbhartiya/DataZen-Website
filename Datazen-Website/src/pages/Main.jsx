import React from 'react'

import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx';
import Event from '../components/Event.jsx';
import MeetTheTeam from '../components/MeetTheTeam.jsx';
import TeamSection from '../components/TeamSection.jsx';
import Team from '../components/Team.jsx';

function Mainpage() 
{
  return (
   <>
    <Hero/>
    <About />
    <Event />
    <MeetTheTeam/>
    {/* <TeamSection/> */}
    {/* <Team/> */}

  
    
   </>
  )
}

export default Mainpage;