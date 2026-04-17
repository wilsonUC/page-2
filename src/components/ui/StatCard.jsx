function StatCard({ value, label, sublabel }) {
  return (
    <article className="group w-full rounded-2xl border border-[#e6e6e6] bg-white p-6 text-center shadow-[0_10px_25px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#c5ebe8] hover:shadow-[0_16px_34px_rgba(10,166,160,0.12)] motion-reduce:hover:translate-y-0">
      <p className="text-[42px] font-semibold leading-none tracking-[-0.03em] text-[#0aa6a0] transition-transform duration-300 group-hover:scale-[1.04]">
        {value}
      </p>
      <p className="mt-2 text-[15px] text-[#111827]">{label}</p>
      {sublabel ? <p className="mt-1 text-[15px] text-[#111827]">{sublabel}</p> : null}
    </article>
  )
}

export default StatCard
