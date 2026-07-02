

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import FeatureDualSense from './components/Feature/FeatureDualSense'
import HeightenSenses from './components/Feature/HeighTensenses'
import TechSpecs from './components/Feature/TechSpecs'
import GamesSlider from './components/Feature/GamesSlider'
import AccessoriesShowcase from './components/Feature/Accessoriesshowcase'
function App() {
  return (
   <div className="min-h-screen bg-black">
      <Navbar />
      <Hero></Hero>
      <FeatureDualSense></FeatureDualSense>
      <HeightenSenses></HeightenSenses>
      <TechSpecs></TechSpecs>
      <GamesSlider></GamesSlider>
      <AccessoriesShowcase></AccessoriesShowcase>
    </div>
  );
}

export default App
