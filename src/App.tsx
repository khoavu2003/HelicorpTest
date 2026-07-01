import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="min-h-screen bg-black">
      <Navbar />
      <Hero></Hero>
    </div>
  );
}

export default App
