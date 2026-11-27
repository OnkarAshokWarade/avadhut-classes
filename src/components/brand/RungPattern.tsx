// p20 · 03 Rung pattern: a hairline ladder on Deep Plum or Purple backgrounds, cropped off the page edge.
// Proportions follow the cover (p1 / p29): two rails, evenly spaced yellow rungs.
export function RungPattern({ rungs = 8, className = '' }: { rungs?: number; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 100 400" preserveAspectRatio="none" fill="none">
      <line x1="0.5" y1="0" x2="0.5" y2="400" stroke="rgb(var(--c-yellow))" strokeOpacity="0.45" vectorEffect="non-scaling-stroke" />
      <line x1="99.5" y1="0" x2="99.5" y2="400" stroke="rgb(var(--c-yellow))" strokeOpacity="0.45" vectorEffect="non-scaling-stroke" />
      {Array.from({ length: rungs }, (_, i) => {
        const y = ((i + 1) * 400) / (rungs + 1)
        return (
          <line
            key={i}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="rgb(var(--c-yellow))"
            strokeOpacity="0.55"
            vectorEffect="non-scaling-stroke"
          />
        )
      })}
    </svg>
  )
}
