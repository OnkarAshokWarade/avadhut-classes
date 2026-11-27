// p20 · 05 Scholar dot: the head of our scholar, used as a small bullet or highlight dot.
type Tone = 'purple' | 'blue' | 'yellow' | 'warn'

const toneClass: Record<Tone, string> = { purple: 'bg-purple', blue: 'bg-blue', yellow: 'bg-yellow', warn: 'bg-warn' }

export function ScholarDot({ tone = 'purple', size = 6, className = '' }: { tone?: Tone; size?: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 rounded-full ${toneClass[tone]} ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
