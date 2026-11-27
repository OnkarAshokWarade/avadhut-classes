import { ctaBand } from '../../data/home'
import { RungPattern } from '../brand/RungPattern'
import { ButtonLink, CallButton } from './Buttons'
import { Reveal } from './Reveal'

/** Closing call to action used at the bottom of most pages. */
export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-purple text-white">
      <RungPattern className="pointer-events-none absolute -right-8 top-0 h-full w-24 opacity-70 sm:right-[10%] sm:w-32" rungs={4} />
      <div className="container-page relative grid gap-8 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <Reveal>
          <h2 id="cta-title" className="pr-14 font-light text-[clamp(34px,29.9px+1.1vw,44px)] leading-tight text-white sm:pr-0">
            {ctaBand.title} <em className="font-accent italic text-yellow">{ctaBand.accent}</em>
          </h2>
          <p className="mt-4 max-w-xl text-white/80">{ctaBand.text}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-wrap gap-3 lg:justify-end">
          <ButtonLink to="/admissions" variant="light">
            Book a free demo class
          </ButtonLink>
          <CallButton variant="outline-light" />
        </Reveal>
      </div>
    </section>
  )
}
