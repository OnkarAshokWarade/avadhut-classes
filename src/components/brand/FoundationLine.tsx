// p20 · 02 Foundation line: a short yellow rule under key headlines. Once per layout.
export function FoundationLine({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`block h-[2px] w-14 bg-yellow ${className}`} />
}
