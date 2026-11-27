// The master logo artwork, always used as supplied — never retyped or redrawn (p9).
import { logoFiles } from '../../data/site'

export function Logo({
  variant = 'primary',
  className = '',
  eager = false,
}: {
  variant?: 'primary' | 'reversed'
  className?: string
  eager?: boolean
}) {
  return (
    <img
      src={logoFiles[variant]}
      alt="Avadhut Classes — Classes Right Toh Future Bright"
      width={640}
      height={276}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`h-auto ${className}`}
    />
  )
}
