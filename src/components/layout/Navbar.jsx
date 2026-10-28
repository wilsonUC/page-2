import { useState } from 'react'
import { ArrowRight, LogIn, Menu, UserPlus, X } from 'lucide-react'

const navItems = [
  { label: 'Beneficios', href: '/beneficios' },
  { label: 'Funcionalidades', href: '/funcionalidades' },
  { label: 'Precio', href: '/precio' },
  { label: 'FAQ', href: '/faq' },
]

function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (onNavigate) {
      onNavigate(href)
    } else {
      window.location.href = href
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (onNavigate) {
      onNavigate('/')
    } else {
      window.location.href = '/'
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 shadow-[0_1px_3px_rgba(0,0,0,0.03)] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          className="group flex items-center gap-2.5 rounded-lg outline-offset-4 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100"
          href="/"
          onClick={handleLogoClick}
        >
          <span className="relative grid h-10 w-10 place-content-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d4ed8] via-[#0284c7] to-[#2dd4bf] p-2 shadow-lg shadow-teal-500/25 transition-all duration-300 group-hover:scale-105 group-hover:shadow-teal-500/45">
            {/* Destello de brillo animado */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[logo-shine_3.5s_infinite]"
              aria-hidden="true"
            />
            <img
              src="/v4.svg"
              alt="FinanzasTrack"
              className="relative z-10 h-6 w-6 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
            />
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[19px] sm:text-[20px] font-bold leading-tight tracking-tight text-slate-900">
              FinanzasTrack
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-emerald-700 border border-emerald-200/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              v2.0
            </span>
          </div>
        </a>

        {/* Navegación Desktop */}
        <ul className="hidden items-center gap-8 lg:gap-9 text-[14px] font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                className="relative py-1 text-slate-600 transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-indigo-600 after:transition-transform after:duration-300 hover:text-indigo-600 hover:after:scale-x-100 motion-reduce:after:hidden"
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Acciones del Navbar (Desktop y Móvil) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Botón de Registro (Visible en Móvil y Desktop) */}
          <a
            href="https://app.finanzastrack.site/register"
            title="Crear Cuenta / Registrarse"
            aria-label="Crear Cuenta / Registrarse"
            className="group flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d4ed8] via-[#0284c7] to-[#2dd4bf] text-white ring-2 ring-teal-400/60 shadow-[0_0_16px_rgba(45,212,191,0.35),0_4px_10px_rgba(2,132,199,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:ring-teal-300 hover:shadow-[0_0_24px_rgba(45,212,191,0.6),0_6px_14px_rgba(2,132,199,0.35)] active:translate-y-0 active:scale-[0.98] motion-reduce:hover:translate-y-0"
          >
            <UserPlus className="h-5 w-5 text-white transition-transform duration-200 group-hover:scale-110 drop-shadow-md stroke-[2.2]" aria-hidden="true" />
          </a>

          {/* Botón Iniciar Sesión (Solo Desktop) */}
          <a
            href="https://app.finanzastrack.site/login"
            className="hidden md:flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_4px_14px_rgba(79,70,229,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)] active:translate-y-0 active:scale-[0.98] motion-reduce:hover:translate-y-0"
          >
            <LogIn className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            <span>Iniciar Sesión</span>
          </a>

          {/* Botón Hamburguesa Móvil */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white/95 px-6 pb-6 pt-3 backdrop-blur-xl md:hidden animate-fade-in">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="/precio"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-center text-sm font-bold text-white shadow-md shadow-indigo-600/30"
              onClick={(e) => handleLinkClick(e, '/precio')}
            >
              <span>Comenzar Ahora • S/ 30</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://app.finanzastrack.site/login"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-indigo-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn className="h-4 w-4" />
              <span>Iniciar Sesión</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
