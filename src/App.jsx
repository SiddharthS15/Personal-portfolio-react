import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Education, Experience, Navbar, Tech, Works, LeetCode, StarsCanvas } from './components'
import Hero from './components/Hero_new'

function App() {
  return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className="div bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Education />
          <Experience />
          <Tech />
          <LeetCode />
          <Works />
          <div className="div relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
