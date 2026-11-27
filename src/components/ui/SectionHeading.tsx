import type { ReactNode } from 'react'
import { FoundationLine } from '../brand/FoundationLine'
import { RungMarker } from '../brand/RungMarker'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  label?: string
  title: ReactNode
  text?: ReactNode
  dark?: boolean
  align?: 'left' | 'center'
  id?: string
}

/** Section label with rung marker, light headline and the short yellow foundation line. */
export function SectionHeading({ label, title, text, dark = false, align = 'left', id }: SectionHeadingProps) {
  const center = align === 'center'
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {label && (
        <p className={`label flex items-center gap-3 ${center ? 'justify-center' : ''} ${dark ? 'text-yellow' : 'text-purple'}`}>
          <RungMarker tone={dark ? 'yellow' : 'purple'} width={22} />
          {label}
        </p>
      )}
      <h2 id={id} className={`mt-4 font-light text-[clamp(32px,27.9px+1.1vw,42px)] leading-[1.15] ${dark ? 'text-white' : ''}`}>
        {title}
      </h2>
      <FoundationLine className={`mt-5 ${center ? 'mx-auto' : ''}`} />
      {text && <p className={`mt-5 text-[17px] leading-[28px] ${dark ? 'text-white/75' : 'text-ink/70'}`}>{text}</p>}
    </Reveal>
  )
}
