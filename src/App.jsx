import { useEffect, useState } from 'react'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import NotFound from './components/sections/NotFound'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'
import ScrollToTop from './components/ui/ScrollToTop'

// Rutas limpias válidas
const VALID_PATHS = [
  '/',
  '',
  '/index.html',
  '/inicio',
  '/beneficios',
  '/experiencia-movil',
  '/funcionalidades',
  '/precio',
  '/faq',
]

// Anclas válidas si el usuario escribe con '#'
const VALID_HASHES = [
  '',
  '#',
  '#inicio',
  '#beneficios',
  '#experiencia-movil',
  '#funcionalidades',
  '#precio',
  '#faq',
]

// Mapeo a los IDs del DOM para el scroll suave
const SECTION_MAP = {
  '/inicio': 'inicio',
  '#inicio': 'inicio',
  '/beneficios': 'beneficios',
  '#beneficios': 'beneficios',
  '/experiencia-movil': 'experiencia-movil',
  '#experiencia-movil': 'experiencia-movil',
  '/funcionalidades': 'funcionalidades',
  '#funcionalidades': 'funcionalidades',
  '/precio': 'precio',
  '#precio': 'precio',
  '/faq': 'faq',
  '#faq': 'faq',
}

function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    return typeof window !== 'undefined' ? window.location.pathname : '/'
  })

  const [currentHash, setCurrentHash] = useState(() => {
    return typeof window !== 'undefined' ? window.location.hash : ''
  })

  // Normalizar ruta (remover barra final si existe)
  const cleanPath =
    currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath

  // Validación dual: ruta válida Y ancla válida
  const isInvalidPath = !VALID_PATHS.includes(cleanPath)
  const isInvalidHash = currentHash !== '' && !VALID_HASHES.includes(currentHash)
  const is404 = isInvalidPath || isInvalidHash

  // Escuchar tanto cambios de historial como cambios de hash en la barra de URL
  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentPath(window.location.pathname)
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('popstate', handleUrlChange)
    window.addEventListener('hashchange', handleUrlChange)
    return () => {
      window.removeEventListener('popstate', handleUrlChange)
      window.removeEventListener('hashchange', handleUrlChange)
    }
  }, [])

  // Desplazamiento automático si la ruta o hash corresponde a una sección
  useEffect(() => {
    if (is404) return

    const targetSection =
      SECTION_MAP[cleanPath] || (currentHash ? SECTION_MAP[currentHash] : null)

    if (targetSection) {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetSection)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return () => clearTimeout(timer)
    } else if (cleanPath === '/' || cleanPath === '' || cleanPath === '/index.html') {
      if (!currentHash) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }, [cleanPath, currentHash, is404])

  // Navegación fluida con URLs limpias
  const handleNavigate = (targetHref = '/') => {
    if (!targetHref) return

    // Enlaces externos
    if (targetHref.startsWith('http')) {
      window.location.href = targetHref
      return
    }

    // Convertir anclas (#) a rutas limpias sin #
    let cleanTarget = targetHref
    if (cleanTarget.startsWith('/#')) {
      cleanTarget = '/' + cleanTarget.slice(2)
    } else if (cleanTarget.startsWith('#')) {
      cleanTarget = '/' + cleanTarget.slice(1)
    }

    window.history.pushState({}, '', cleanTarget)
    setCurrentPath(cleanTarget)
    setCurrentHash('')

    const sectionId = SECTION_MAP[cleanTarget]
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-[#0f172a] font-sans antialiased flex flex-col justify-between">
      <Navbar onNavigate={handleNavigate} />
      <main className="flex-1">
        {is404 ? (
          <NotFound
            currentPath={cleanPath + (currentHash || '')}
            onGoHome={handleNavigate}
          />
        ) : (
          <HeroSection />
        )}
      </main>
      {!is404 && <Footer onNavigate={handleNavigate} />}
      {!is404 && <ScrollToTop />}
      {!is404 && <FloatingWhatsApp />}
    </div>
  )
}

export default App
