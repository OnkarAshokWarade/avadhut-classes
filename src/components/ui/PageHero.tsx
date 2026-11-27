import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { RungMarker } from '../brand/RungMarker'
import { RungPattern } from '../brand/RungPattern'

interface PageHeroProps {
  label: string
  title: ReactNode
  text?: ReactNode
}

/** Deep Plum page header with a hairline ladder cropped off the right edge (brand guide: rung pattern). */
export function PageHero({ label, title, text }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden bg-plum text-white">
      <RungPattern className="pointer-events-none absolute -right-10 top-0 h-full w-[110px] sm:right-[6%] sm:w-[150px]" rungs={5} />
      <div className="container-page relative py-16 sm:py-24">
        <motion.p
          className="label flex items-center gap-3 text-yellow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <RungMarker tone="yellow" width={22} />
          {label}
        </motion.p>
        <motion.h1
          className="mt-5 max-w-3xl pr-16 font-light text-[clamp(40px,31.7px+2.21vw,60px)] leading-[1.1] text-white sm:pr-0 sm:leading-[68px]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {text && (
          <motion.p
            className="mt-6 max-w-xl pr-16 text-[17px] text-white/75 sm:pr-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    </header>
  )
}
