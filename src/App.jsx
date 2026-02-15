import React from 'react'
import Intro from './Comps/Intro'
import Nav from './Comps/Nav'
import Stack from './Comps/Stack'
import About from './Comps/About'

const App = () => {
  return (
    <div className='bg-black text-white font-sans '>

      <main className='relative min-h-screen max-w-3xl mx-auto py-8 border border-zinc-800 overflow-hidden '>
        <Nav />
        <Intro />
        <Stack/>
        <About/>
      </main>

    </div>
  )
}

export default App