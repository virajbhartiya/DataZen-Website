import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Main';
import Navbar from './components/Navbar'
import MeetTheTeam from './components/MeetTheTeam';
import Footer from './components/Footer';
import Navbar2 from './components/Navbar2';



function App() 
{
  

  return (
    <>
    {/* <Navbar/> */}
    <Navbar2/>
   
      <Routes>
          <Route path='/' element={<Mainpage />} />
      </Routes>

    <Footer/>
    
    </>
  )
}

export default App
