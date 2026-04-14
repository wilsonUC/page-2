import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'

function App() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#0f172a]">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default App