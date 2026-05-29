import React from 'react'
import Intro from './Comps/Intro'
import Nav from './Comps/Nav'
import Stack from './Comps/Stack'
import About from './Comps/About'
import Project from './Comps/Project'
import Contact from './Comps/Contact'

const App = () => {
  return (
    <div className='normal-cursor bg-zinc-50 text-zinc-900 dark:bg-[#12100e] dark:text-zinc-100 min-h-screen transition-colors duration-300'>

      <main className='relative min-h-screen max-w-3xl mx-auto pt-8 border border-zinc-300 dark:border-zinc-800 overflow-hidden'>
        <Nav />
        <Intro />
        <About />
        <Project />
        <Contact />
      </main>

    </div>
  )
}

export default App