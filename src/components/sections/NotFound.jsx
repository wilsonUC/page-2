import { useState } from 'react'
import {
  ArrowRight,
  HelpCircle,
  Home,
  LogIn,
  MessageCircle,
  PiggyBank,
  Sparkles,
  Wallet,
  Zap,
} from 'lucide-react'

const WHATSAPP_NUMBER = '51980570301'

export default function NotFound({ currentPath = '', onGoHome }) {
  const [savingsCount, setSavingsCount] = useState(0)
  const [coinAnimating, setCoinAnimating] = useState(false)

  // Mensaje para WhatsApp con la ruta intentada
  const errorPath = currentPath || (typeof window !== 'undefined' ? window.location.pathname : '')
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `¡Hola FinanzasTrack! Estaba navegando en el sitio web y me encontré con la página no encontrada (Error 404) en la ruta: ${errorPath}`
  )}`

  // Easter egg interactivo: ahorrar monedas al hacer clic
  const handleCollectCoin = () => {
    setSavingsCount((prev) => prev + 1)
    setCoinAnimating(true)
    setTimeout(() => setCoinAnimating(false), 400)
  }

  // Navegación fluida a secciones de la página principal
  const handleNavigate = (targetHref) => {
    if (onGoHome) {
      onGoHome(targetHref)
    } else {
      window.location.href = targetHref
    }
  }

  const floatingCards = [
    {
      id: 'beneficios',
      title: 'Beneficios',
      desc: 'Elimina gastos hormiga y detecta fugas de dinero.',
      href: '/beneficios',
      icon: Zap,
      badge: 'CONTROL',
      color: 'from-amber-500/15 to-orange-500/10 text-amber-700 border-amber-200/80',
      positionClasses:
        'lg:absolute lg:top-4 xl:top-8 lg:-left-6 xl:left-2 lg:w-56 xl:w-64 rotate-[-8deg] hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300',
    },
    {
      id: 'funcionalidades',
      title: 'Funcionalidades',
      desc: 'Simulador de ahorro, presupuestos y asistente con IA.',
      href: '/funcionalidades',
      icon: Sparkles,
      badge: 'INTELIGENCIA',
      color: 'from-blue-500/15 to-indigo-500/10 text-blue-700 border-blue-200/80',
      positionClasses:
        'lg:absolute lg:bottom-4 xl:bottom-8 lg:-left-8 xl:left-4 lg:w-56 xl:w-64 rotate-[7deg] hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300',
    },
    {
      id: 'precio',
      title: 'Precio: S/ 30',
      desc: 'Acceso completo a todas las herramientas, sin mensualidades.',
      href: '/precio',
      icon: Wallet,
      badge: 'OFERTA',
      color: 'from-emerald-500/15 to-teal-500/10 text-emerald-700 border-emerald-200/80',
      positionClasses:
        'lg:absolute lg:top-4 xl:top-8 lg:-right-6 xl:right-2 lg:w-56 xl:w-64 rotate-[8deg] hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300',
    },
    {
      id: 'faq',
      title: 'Preguntas Frecuentes',
      desc: 'Seguridad bancaria, dispositivos y métodos de pago.',
      href: '/faq',
      icon: HelpCircle,
      badge: 'SOPORTE',
      color: 'from-purple-500/15 to-pink-500/10 text-purple-700 border-purple-200/80',
      positionClasses:
        'lg:absolute lg:bottom-4 xl:bottom-8 lg:-right-8 xl:right-4 lg:w-56 xl:w-64 rotate-[-7deg] hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300',
    },
  ]

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#f1f5f9] py-10 sm:py-14 lg:py-20 px-4 sm:px-6 flex items-center justify-center">
      {/* Luces y patrones de fondo */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-full max-w-5xl -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-200/40 via-teal-200/30 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-10 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl"
        aria-hidden="true"
      />

      {/* Contenedor relativo principal */}
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Contenido Central */}
        <div className="relative z-10 mx-auto max-w-xl text-center">
          {/* Badge Superior */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50/90 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-amber-900 shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Error 404 • Ruta fuera de balance</span>
            <span className="rounded-md bg-amber-200/70 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-900">
              No encontrada
            </span>
          </div>

          {/* Visual 404 con Moneda Central Interactiva */}
          <div className="relative my-6 sm:my-8 flex items-center justify-center select-none">
            <div className="flex items-center justify-center gap-2 sm:gap-4 font-black tracking-tighter">
              <span className="text-7xl sm:text-9xl md:text-[10.5rem] leading-none bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent drop-shadow-sm">
                4
              </span>

              {/* Moneda / Alcancía interactiva como el "0" */}
              <div className="relative flex flex-col items-center">
                <button
                  type="button"
                  onClick={handleCollectCoin}
                  title="¡Haz clic para recolectar un sol de ahorro!"
                  className={`group relative flex h-20 w-20 sm:h-28 sm:w-28 md:h-34 md:w-34 items-center justify-center rounded-3xl sm:rounded-[2.4rem] bg-gradient-to-br from-[#1d4ed8] via-[#0284c7] to-[#2dd4bf] p-1 shadow-2xl shadow-teal-500/30 transition-all duration-300 hover:scale-105 active:scale-95 ${
                    coinAnimating ? 'scale-110 rotate-6 ring-4 ring-teal-300' : ''
                  }`}
                >
                  {/* Destello de brillo */}
                  <span
                    className="pointer-events-none absolute inset-0 -translate-x-full rounded-3xl sm:rounded-[2.4rem] bg-gradient-to-r from-transparent via-white/35 to-transparent animate-[logo-shine_3s_infinite]"
                    aria-hidden="true"
                  />

                  <div className="flex h-full w-full flex-col items-center justify-center rounded-[1.3rem] sm:rounded-[2.1rem] bg-white/10 backdrop-blur-sm border border-white/30 text-white">
                    <PiggyBank className="h-9 w-9 sm:h-12 sm:w-12 md:h-15 md:w-15 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 drop-shadow-md" />
                    <span className="mt-0.5 text-[10px] sm:text-xs font-bold tracking-wider text-teal-100">
                      S/ {savingsCount}.00
                    </span>
                  </div>

                  {/* Pulso animado flotante */}
                  <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white text-[11px] font-black shadow-md ring-2 ring-white animate-bounce">
                    +1
                  </span>
                </button>
              </div>

              <span className="text-7xl sm:text-9xl md:text-[10.5rem] leading-none bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent drop-shadow-sm">
                4
              </span>
            </div>
          </div>

          {/* Título con Degradado y Subtítulo */}
          <div className="mx-auto max-w-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#1d4ed8] via-[#0284c7] to-[#2dd4bf] bg-clip-text text-transparent pb-1">
              Página no encontrada
            </h1>

            <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-600">
              La dirección que buscas no existe o fue movida. Puedes volver al inicio para continuar navegando.
            </p>
          </div>

          {/* Acciones Principales (CTAs) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {/* Botón Principal: Volver al Inicio */}
            <button
              type="button"
              onClick={() => handleNavigate('/')}
              className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#1d4ed8] via-[#0284c7] to-[#2dd4bf] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-teal-500/40 active:scale-[0.98]"
            >
              <Home className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              <span>Volver a la Página Principal</span>
            </button>

            {/* Botón Secundario: Iniciar Sesión en la App */}
            <a
              href="https://app.finanzastrack.site/login"
              className="group flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-600 hover:shadow-md active:scale-[0.98]"
            >
              <LogIn className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              <span>Ir a la App FinanzasTrack</span>
            </a>

            {/* Botón Terciario: Contacto WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50/70 px-5 py-3 text-sm font-semibold text-emerald-800 transition-all duration-200 hover:bg-emerald-100 hover:border-emerald-300 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600 transition-transform duration-200 group-hover:scale-110" />
              <span>Reportar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Tarjetas Flotantes estilo Mockup (Alrededor en pantallas grandes, cuadrícula en móvil) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3.5 lg:contents">
          {floatingCards.map((card) => {
            const Icon = card.icon
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => handleNavigate(card.href)}
                className={`group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 text-left shadow-xl shadow-slate-200/60 backdrop-blur-md transition-all duration-300 cursor-pointer text-slate-800 select-none ${card.positionClasses}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border bg-gradient-to-br ${card.color}`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="rounded-full bg-slate-100/90 px-2 py-0.5 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-3.5 flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
                  <span>Ir a la sección</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
