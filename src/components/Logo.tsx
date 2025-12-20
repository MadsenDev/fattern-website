function Logo() {
  return (
    <div className="flex items-center gap-2 text-ink">
      <img
        src="/fattern-monogram.svg"
        alt="Fattern monogram"
        className="h-10 w-10"
      />
      <div className="flex flex-col leading-tight">
        <span className="font-display text-xl">Fattern</span>
        <span className="text-sm text-ink-subtle">Lokal fakturering</span>
      </div>
    </div>
  )
}

export default Logo

