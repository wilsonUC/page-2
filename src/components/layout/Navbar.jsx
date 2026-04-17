import { Square } from 'lucide-react'

const navItems = ['Beneficios', 'Funcionalidades', 'Precio', 'FAQ']

function Navbar() {
  return (
    <header className="border-b border-[#ececec] bg-[#f8f8f8]">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a className="flex items-center gap-2" href="#">
          <span className="grid h-8 w-8 place-content-center rounded-lg bg-linear-to-br from-emerald-300 to-cyan-500 text-[#03383a]">
            <Square className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
          </span>
          <span className="text-[31px] font-semibold leading-none tracking-[-0.04em] text-[#111827]">
            FinanzasTrack
          </span>
        </a>

        <ul className="hidden items-center gap-10 text-[14px] font-medium text-[#111827] md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a className="transition hover:text-[#d97706]" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden items-center gap-2 rounded-xl bg-[#d98104] px-6 py-2.5 text-[14px] font-semibold text-white shadow-[0_4px_8px_rgba(217,129,4,0.35)] transition hover:bg-[#c87400] md:inline-flex">
          Registrate a BudgetTrack
          <Square className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
