// p20 · 01 Rung marker: "Three fine lines from the H … Always three, always thin."
type Tone = 'yellow' | 'purple' | 'blue'

const strokeClass: Record<Tone, string> = {
  yellow: 'bg-yellow',
  purple: 'bg-purple',
  blue: 'bg-blue',
}

export function RungMarker({ tone = 'yellow', width = 28, className = '' }: { tone?: Tone; width?: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 flex-col justify-between ${className}`}
      style={{ width, height: width * 0.6 }}
    >
      {[0, 1, 2].map((i) => (
        <span key={i} className={`block h-px w-full ${strokeClass[tone]}`} style={{ height: 1.5 }} />
      ))}
    </span>
  )
}
