import React from 'react'
import Intro from './Comps/Intro'
import ThemeToggle from './Comps/ThemeToggle';
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

      <main className="max-w-2xl mx-auto px-6 flex flex-col">
        {/* nav */}
        <div className="flex items-end justify-end pt-8">
          <ThemeToggle />
        </div>
        <Intro />
        <About />
        <Stack />
        <GithubCalender />
        <Project />
        <Contact />
      </main>
    </div>
  )
}

export default App