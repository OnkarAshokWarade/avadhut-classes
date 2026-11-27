// Calm fade-and-rise reveal. The PDF has no motion rules (open question #3), so motion stays subtle.
// `as="li"` lets it be a list item directly, keeping list markup valid.
import { motion, type MotionStyle } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: MotionStyle
  as?: 'div' | 'li'
}

export function Reveal({ children, delay = 0, className = '', style, as = 'div' }: RevealProps) {
  const Component = as === 'li' ? motion.li : motion.div
  return (
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
