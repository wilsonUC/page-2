import { CircleHelp, Gift, Heart, LayoutGrid, Tag } from 'lucide-react'

const footerLinks = [
  { label: 'Beneficios', href: '#beneficios', Icon: Gift },
  { label: 'Funcionalidades', href: '#funcionalidades', Icon: LayoutGrid },
  { label: 'Precio', href: '#precio', Icon: Tag },
  { label: 'FAQ', href: '#faq', Icon: CircleHelp },
]

function Footer() {
  return (
    <footer className="border-t border-[#ececec]">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a
            className="group flex items-center gap-2 rounded-lg outline-offset-4 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100"
            href="#inicio"
          >
            <span className="grid h-9 w-9 place-content-center rounded-lg bg-linear-to-br from-emerald-300 to-cyan-500 text-lg font-bold text-[#03383a] shadow-sm transition-shadow duration-300 group-hover:shadow-md group-hover:shadow-emerald-200/50">
              B
            </span>
            <span className="text-[22px] font-bold leading-none tracking-[-0.03em] text-[#111827] transition-colors duration-200 group-hover:text-[#0f766e]">
              FinanzasTrack
            </span>
          </a>

          <nav>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[14px] text-[#111827]">
              {footerLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    className="group/link inline-flex items-center gap-2 rounded-md px-1 py-0.5 transition-colors duration-200 hover:text-[#d97706]"
                    href={href}
                  >
                    <Icon
                      className="h-4 w-4 stroke-2 transition-transform duration-200 group-hover/link:-translate-y-px group-hover/link:scale-110"
                      aria-hidden="true"
                    />
                    <span className="relative after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 group-hover/link:after:scale-x-100">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="my-6 border-[#ececec]" />

        <div className="flex flex-col gap-3 text-[13px] text-[#64748b] md:flex-row md:items-center md:justify-between">
          <p className="inline-flex items-center gap-1">
            Hecho con
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" aria-hidden="true" />
            en Perú
          </p>
          <p className="text-center md:text-right">
            © 2026 FinanzasTrack. Todos los derechos reservados. • Website Builder
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
