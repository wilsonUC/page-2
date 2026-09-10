function StatCard({ value, label, sublabel, variant = 'primary' }) {
  const valueColor = variant === 'emerald' ? 'text-emerald-600' : 'text-indigo-600'

  return (
    <article className="group w-full rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-[0_4px_16px_rgba(15,23,42,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_12px_28px_rgba(79,70,229,0.08)] motion-reduce:hover:translate-y-0">
      <p className={`text-[40px] font-bold leading-none tracking-tight ${valueColor} transition-transform duration-300 group-hover:scale-[1.04]`}>
        {value}
      </p>
      <p className="mt-2.5 text-[15px] font-medium text-slate-800">{label}</p>
      {sublabel ? <p className="mt-1 text-[13px] font-semibold text-emerald-600 bg-emerald-50 inline-block px-2.5 py-0.5 rounded-full">{sublabel}</p> : null}
    </article>
  )
}

export default StatCard
