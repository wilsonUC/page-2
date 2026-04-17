import { Square } from 'lucide-react'

const navItems = [
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Precio', href: '#precio' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ececec] bg-[#f8f8f8]/95 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md supports-[backdrop-filter]:bg-[#f8f8f8]/90">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a
          className="group flex items-center gap-2 rounded-lg outline-offset-4 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100"
          href="#inicio"
        >
          <span className="grid h-8 w-8 place-content-center rounded-lg bg-linear-to-br from-emerald-300 to-cyan-500 text-[#03383a] shadow-sm transition-shadow duration-300 group-hover:shadow-md group-hover:shadow-emerald-200/60">
            <Square className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:rotate-6" aria-hidden="true" />
          </span>
          <span className="text-[31px] font-semibold leading-none tracking-[-0.04em] text-[#111827] transition-colors duration-200 group-hover:text-[#0f766e]">
            FinanzasTrack
          </span>
        </a>

        <ul className="hidden items-center gap-10 text-[14px] font-medium text-[#111827] md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                className="relative py-1 text-[#111827] transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[#d97706] after:transition-transform after:duration-300 hover:text-[#d97706] hover:after:scale-x-100 motion-reduce:after:hidden"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="group hidden items-center gap-2 rounded-xl bg-[#d98104] px-6 py-2.5 text-[14px] font-semibold text-white shadow-[0_4px_8px_rgba(217,129,4,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c87400] hover:shadow-[0_8px_20px_rgba(217,129,4,0.45)] active:translate-y-0 active:scale-[0.98] motion-reduce:hover:translate-y-0 md:inline-flex">
          Registrate a FinanzasTrack
          <Square
            className="h-3.5 w-3.5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
