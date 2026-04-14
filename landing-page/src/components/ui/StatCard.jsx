function StatCard({ value, label, sublabel }) {
  return (
    <article className="w-full rounded-2xl border border-[#e6e6e6] bg-white p-6 text-center shadow-[0_10px_25px_rgba(0,0,0,0.03)]">
      <p className="text-[42px] font-semibold leading-none tracking-[-0.03em] text-[#0aa6a0]">
        {value}
      </p>
      <p className="mt-2 text-[15px] text-[#111827]">{label}</p>
      {sublabel ? <p className="mt-1 text-[15px] text-[#111827]">{sublabel}</p> : null}
    </article>
  )
}

export default StatCard
