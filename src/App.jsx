import React from 'react'
import Intro from './comps/Intro'
import Nav from './comps/Nav'
import Stack from './comps/Stack'
import About from './comps/About'
import Project from './comps/Project'
import Contact from './comps/Contact'

const App = () => {
  return (
    <div className='bg-zinc-50 text-zinc-900 dark:bg-[#12100e] dark:text-zinc-100 min-h-screen transition-colors duration-300'>

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