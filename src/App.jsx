import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] text-[#0f172a] font-sans antialiased">
      <Navbar />
      <HeroSection />
      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
