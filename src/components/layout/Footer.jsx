import {
  ArrowRight,
  ExternalLink,
  Lock,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react'

const navLinks = [
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Precio', href: '#precio' },
  { label: 'Preguntas Frecuentes', href: '#faq' },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800/80 bg-[#080d1a] text-slate-300">
      {/* Luces ambientales de fondo */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-full max-w-5xl -translate-x-1/2 bg-gradient-to-b from-indigo-500/15 via-teal-500/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Línea superior con gradiente de neón */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500 via-teal-400 to-transparent opacity-80" />

      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-start">
          {/* 1. Columna Marca y Propuesta */}
          <div className="lg:col-span-4">
            <a
              className="group inline-flex items-center gap-2 outline-offset-4 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              href="#inicio"
            >
              <img
                src="/v4.svg"
                alt="FinanzasTrack"
                className="h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-white">
                  FinanzasTrack
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  v2.0
                </span>
              </div>
            </a>

            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Control financiero inteligente, presupuestos, metas de ahorro y asesoría con Inteligencia Artificial conectada a tus datos reales.
            </p>

            {/* Badges de Certificación */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-slate-300">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/90 px-2 py-1 shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span className="font-medium">100% Seguro & Privado</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/90 px-2 py-1 shadow-sm">
                <Smartphone className="h-3.5 w-3.5 text-indigo-400" />
                <span className="font-medium">PWA Web & Móvil</span>
              </span>
            </div>
          </div>

          {/* 2 & 3. Columnas Horizontales: Navegación Rápida y Garantía & Acceso */}
          <div className="grid grid-cols-2 gap-5 sm:gap-8 lg:col-span-5">
            {/* 2. Navegación Rápida */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Navegación
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-xs">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block text-slate-400 transition-all duration-200 hover:text-white hover:translate-x-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Garantía y Métodos */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Garantía & Acceso
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-xs text-slate-400">
                <li className="flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                  <span className="truncate">Sin vincular tarjetas</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">Asesor Financiero con IA</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">Plan anual • S/ 30</span>
                </li>
              </ul>

              <div className="mt-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="rounded border border-purple-500/30 bg-purple-500/10 px-1.5 py-0.5 text-[10px] font-bold text-purple-300">
                    💜 Yape
                  </span>
                  <span className="rounded border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 text-[10px] font-bold text-cyan-300">
                    💙 Plin
                  </span>
                  <span className="rounded border border-slate-700 bg-slate-800/80 px-1.5 py-0.5 text-[10px] font-medium text-slate-300">
                    🏦 Transferencias
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Columna Accesos Directos a la App */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Accesos Directos
            </h3>

            <div className="mt-2.5 flex flex-col gap-2">
              <a
                href="https://app.finanzastrack.site/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-indigo-500/30 bg-gradient-to-r from-indigo-500/20 to-teal-500/10 px-3.5 py-2 text-xs font-bold text-indigo-200 transition-all duration-200 hover:border-indigo-400 hover:bg-indigo-500/30 hover:text-white"
              >
                <span>Ingresar a FinanzasTrack</span>
                <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://wa.me/51980570301?text=%C2%A1Hola!%20FinanzasTrack%20deseo%20mi%20acceso%20a%20la%20app%20."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-300 transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300"
              >
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Soporte por WhatsApp</span>
                </span>
                <ArrowRight className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <hr className="my-5 border-slate-800/80" />

        {/* Barra Inferior de Derechos */}
        <div className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
          <p className="inline-flex items-center gap-1.5 text-slate-400 text-[11px]">
            <Sparkles className="h-3 w-3 text-teal-400" aria-hidden="true" />
            <span>Tecnología inteligente para el control total de tu dinero</span>
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-slate-400 font-medium">© 2026 FinanzasTrack</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Todos los derechos reservados</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


