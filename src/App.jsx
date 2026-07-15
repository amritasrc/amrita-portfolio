import React from 'react'
import Nav from './Comps/Nav'
import Home from './pages/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300 selection:bg-zinc-200 dark:selection:bg-zinc-800">

      <main className="max-w-2xl mx-auto px-6 flex flex-col">
        <Nav/>
        <Home/>
      </main>
    </div>
  )
}

export default App