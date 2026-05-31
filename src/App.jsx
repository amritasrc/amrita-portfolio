import React from 'react'
import Intro from './Comps/Intro'
import Nav from './Comps/Nav'
import Stack from './Comps/Stack'
import About from './Comps/About'
import Project from './Comps/Project'
import Contact from './Comps/Contact'
import GithubCalender from './Comps/GithubCalender'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <div className=' bg-zinc-100 text-zinc-900 dark:bg-[#12100e] dark:text-zinc-100 min-h-screen transition-colors duration-300'>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className='relative min-h-screen max-w-3xl mx-auto pt-8 px-6 border border-zinc-300 dark:border-zinc-800 overflow-hidden'>
        <Nav />
        <Intro />
        <About />
        <Stack />
        <GithubCalender />
        <Project />
        <Contact />
      </motion.main>

    </div>
  )
}

export default App