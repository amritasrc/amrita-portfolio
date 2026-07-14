import React from 'react'
import Intro from './Comps/Intro'
import ThemeToggle from './comps/ThemeToggle';
import Nav from './Comps/Nav'
import Stack from './Comps/Stack'
import About from './Comps/About'
import Project from './Comps/Project'
import Contact from './Comps/Contact'
import GithubCalender from './Comps/GithubCalender'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-900 dark:text-neutral-50 transition-colors duration-300 selection:bg-neutral-200 dark:selection:bg-neutral-800">

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className='relative min-h-screen max-w-3xl mx-auto pt-8 px-6 border border-zinc-300 dark:border-zinc-800 overflow-hidden'>
        <header>
          <div className="flex items-end justify-end">
            <ThemeToggle />
          </div>
        </header>
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