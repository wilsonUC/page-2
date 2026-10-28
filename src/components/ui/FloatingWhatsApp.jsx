const WHATSAPP_NUMBER = '51991880390'
const WHATSAPP_MESSAGE = encodeURIComponent(
  '¡Hola! FinanzasTrack deseo mi acceso a la app .'
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Contacto por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center sm:bottom-6 sm:right-6 select-none"
    >
      {/* Botón Circular Flotante Principal */}
      <div className="relative group">
        {/* Halo / Anillo de Pulso Animado */}
        <span
          className="pointer-events-none absolute -inset-2.5 rounded-full bg-[#25D366]/35 blur-md animate-pulse"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -inset-1 rounded-full bg-[#25D366]/25 animate-ping duration-1000"
          aria-hidden="true"
        />

        {/* Botón Verde con SVG */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        >
          <img
            src="/logo-whatsapp.svg"
            alt="WhatsApp"
            className="h-8 w-8 sm:h-9 sm:w-9 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          />

          {/* Badge de Notificación Roja "1" */}
          <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#e11d48] text-[11px] sm:text-xs font-black text-white ring-2 ring-white shadow-md animate-bounce">
            1
          </span>
        </a>
      </div>
    </aside>
  )
}
