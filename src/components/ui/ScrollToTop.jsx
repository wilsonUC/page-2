import { useEffect, useRef, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOverDark, setIsOverDark] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleScrollAndTheme = () => {
      // 1. Visibilidad del botón
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // 2. Detección de sección oscura debajo del botón
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        // Obtenemos el elemento que está debajo del centro del botón
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        // Temporariamente ocultamos el puntero del botón para revisar el elemento de fondo
        buttonRef.current.style.pointerEvents = 'none'
        const elementBelow = document.elementFromPoint(centerX, centerY)
        buttonRef.current.style.pointerEvents = 'auto'

        if (elementBelow) {
          const isDark = Boolean(
            elementBelow.closest(
              'footer, [data-dark="true"], .bg-\\[\\#080d1a\\], .bg-slate-950, .bg-slate-900, .bg-slate-800'
            )
          )
          setIsOverDark(isDark)
        }
      }
    }

    window.addEventListener('scroll', handleScrollAndTheme, { passive: true })
    window.addEventListener('resize', handleScrollAndTheme, { passive: true })
    handleScrollAndTheme()

    return () => {
      window.removeEventListener('scroll', handleScrollAndTheme)
      window.removeEventListener('resize', handleScrollAndTheme)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={`fixed right-6 z-40 transition-all duration-300 sm:right-7 ${
        isVisible
          ? 'bottom-24 sm:bottom-27 opacity-100 scale-100 pointer-events-auto'
          : 'bottom-20 sm:bottom-23 opacity-0 scale-75 pointer-events-none'
      }`}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={scrollToTop}
        aria-label="Volver al inicio de la página"
        className={`group relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d4ed8] via-[#0284c7] to-[#2dd4bf] p-2 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 focus:outline-none ${
          isOverDark
            ? 'ring-4 ring-teal-300 shadow-[0_0_28px_rgba(45,212,191,0.85),0_0_55px_rgba(56,189,248,0.5),0_0_12px_rgba(255,255,255,0.7)] hover:ring-teal-200 hover:shadow-[0_0_38px_rgba(45,212,191,1),0_0_70px_rgba(56,189,248,0.75)]'
            : 'ring-4 ring-teal-400/55 shadow-[0_0_20px_rgba(45,212,191,0.45),0_8px_20px_rgba(2,132,199,0.3)] hover:ring-teal-300/80 hover:shadow-[0_0_28px_rgba(45,212,191,0.7),0_10px_25px_rgba(2,132,199,0.4)]'
        }`}
      >
        {/* Halo adicional ultra-brillante automático en fondos oscuros */}
        {isOverDark && (
          <span
            className="pointer-events-none absolute -inset-2 rounded-3xl bg-teal-400/25 blur-lg animate-pulse"
            aria-hidden="true"
          />
        )}

        {/* Flecha con animación fluida de elevación suave */}
        <div className="relative z-10 flex items-center justify-center animate-[arrow-scroll-up_1.8s_ease-in-out_infinite]">
          <ChevronUp
            className={`h-6 w-6 stroke-[3.2] text-white transition-all duration-200 group-hover:-translate-y-1 ${
              isOverDark
                ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]'
                : 'drop-shadow-md'
            }`}
            aria-hidden="true"
          />
        </div>
      </button>
    </div>
  )
}
