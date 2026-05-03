import React from 'react'
import Intro from './Comps/Intro'
import Nav from './Comps/Nav'
import Stack from './Comps/Stack'
import About from './Comps/About'
import Project from './Comps/Project'
import Contact from './Comps/Contact'

const App = () => {
  return (
    <div className='bg-[#12100e] text-white font-sans '>

      <main className='relative min-h-screen max-w-3xl mx-auto pt-8 border border-zinc-800 overflow-hidden '>
        {/* <Nav /> */}
        <Intro />
        <About/>
        <Project/>
        <Contact/>
      </main>

    </div>
  )
}

export default App