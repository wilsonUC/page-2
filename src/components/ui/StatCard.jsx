function StatCard({ value, label, sublabel, variant = 'primary' }) {
  const valueColor = variant === 'emerald' ? 'text-emerald-600' : 'text-indigo-600'
  const sublabelBadgeClass =
    variant === 'emerald'
      ? 'text-emerald-600 bg-emerald-50 border-emerald-100'
      : 'text-indigo-600 bg-indigo-50 border-indigo-100'

  return (
    <article className="group w-full rounded-2xl border border-white/80 bg-white/95 p-6 text-center shadow-[0_10px_25px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-300 hover:shadow-[0_16px_32px_rgba(79,70,229,0.12)] motion-reduce:hover:translate-y-0">
      <p className={`text-[40px] font-bold leading-none tracking-tight ${valueColor} transition-transform duration-300 group-hover:scale-[1.04]`}>
        {value}
      </p>
      <p className="mt-2.5 text-[15px] font-medium text-slate-800">{label}</p>
      {sublabel ? (
        <p className={`mt-1 text-[13px] font-semibold inline-block px-2.5 py-0.5 rounded-full border ${sublabelBadgeClass}`}>
          {sublabel}
        </p>
      ) : null}
    </article>
  )
}

export default StatCard
