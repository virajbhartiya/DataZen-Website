import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Main';
import Navbar from './components/Navbar'

function App() 
{
  

  return (
    <>
    <Navbar/>
   
      <Routes>
          <Route path='/' element={<Mainpage />} />
      </Routes>
    
    </>
  )
}

export default App
