import { useEffect, useRef, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
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
      className={`fixed right-7 sm:right-[34px] z-40 transition-all duration-300 ${
        isVisible
          ? 'bottom-28 sm:bottom-32 opacity-100 scale-100 pointer-events-auto'
          : 'bottom-22 sm:bottom-26 opacity-0 scale-75 pointer-events-none'
      }`}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={scrollToTop}
        aria-label="Volver al inicio de la página"
        className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d4ed8] via-[#0284c7] to-[#2dd4bf] text-white border border-white/20 shadow-md shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/25 active:translate-y-0 active:scale-95 focus:outline-none"
      >
        <ChevronUp
          className="h-5 w-5 stroke-[2.5] text-white transition-transform duration-200 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </button>
    </div>
  )
}
