import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'

function App() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] text-[#0f172a] font-sans antialiased">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default App
