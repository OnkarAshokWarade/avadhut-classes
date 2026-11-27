import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BrandIcon } from '../components/brand/BrandIcon'
import { RungMarker } from '../components/brand/RungMarker'
import { RungPattern } from '../components/brand/RungPattern'
import { ScholarDot } from '../components/brand/ScholarDot'
import { ButtonLink, CallButton } from '../components/ui/Buttons'
import { CtaBand } from '../components/ui/CtaBand'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { courses } from '../data/courses'
import { hero, insideAvadhut, ladderIntro, ladderSteps, quickFacts, testimonials, whyAvadhut } from '../data/home'
import { site } from '../data/site'
import { srcSet } from '../lib/responsiveImage'

// Natural width of each "Inside Avadhut" photo, in the order the data file lists them.
const insideAvadhutWidths = [736, 736, 564]

const ease = [0.22, 1, 0.36, 1] as const

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden bg-plum text-white">
        <RungPattern
          className="pointer-events-none absolute right-[-30px] top-0 hidden h-full w-[120px] lg:block xl:right-[3%]"
          rungs={7}
        />
        <div className="container-page relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <div>
            <motion.p
              className="label flex items-center gap-3 text-yellow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <RungMarker tone="yellow" width={22} />
              {hero.label}
            </motion.p>
            <motion.h1
              id="hero-title"
              className="mt-6 font-light text-[clamp(46px,32.7px+3.54vw,78px)] leading-[1.05] text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease }}
            >
              {hero.headline.light}
              <br />
              <span className="font-medium text-yellow">{hero.headline.medium}</span>
            </motion.h1>
            <motion.p
              className="mt-5 font-accent text-[clamp(26px,23.5px+0.66vw,32px)] italic text-white"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              {hero.accent}
            </motion.p>
            <motion.p
              className="mt-6 max-w-lg text-[17px] text-white/75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {hero.text}
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <ButtonLink to="/admissions" variant="light">
                Book a free demo class
              </ButtonLink>
              <ButtonLink to="/courses" variant="outline-light">
                Explore courses
              </ButtonLink>
            </motion.div>
          </div>
          <motion.div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease }}
          >
            {/* Photo framed as a ladder: purple rails, yellow rungs (brand idea post) */}
            <div className="relative aspect-[4/5] border-x-[10px] border-purple">
              <img src={hero.image.src} alt={hero.image.alt} width={417} height={626} className="h-full w-full object-cover" />
              {[25, 50, 75].map((top) => (
                <span key={top} className="absolute inset-x-0 h-[6px] bg-yellow/90" style={{ top: `${top}%` }} aria-hidden="true" />
              ))}
            </div>
            <p className="absolute -bottom-5 left-4 bg-white px-4 py-3 font-display text-[15px] font-normal text-plum shadow-lg sm:-left-6">
              Every class is a rung on the ladder.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick facts */}
      <section aria-label="At a glance" className="border-b border-ink/10 bg-white">
        <dl className="container-page grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4">
          {quickFacts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.05} className="flex flex-col-reverse border-l border-ink/10 pl-5">
              <dt className="mt-1 text-[14px] text-ink/60">{f.label}</dt>
              <dd className="font-display text-[clamp(28px,25.5px+0.66vw,34px)] font-light text-purple">{f.value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Why Avadhut */}
      <section aria-labelledby="why-title" className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            id="why-title"
            label="WHY AVADHUT"
            title="More than tuition. A foundation for life."
            text="Three promises guide every class we teach: quality education, personal attention and academic excellence."
          />
          <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {whyAvadhut.map((f, i) => (
              <Reveal as="li" key={f.title} delay={(i % 3) * 0.06} className="border-t border-ink pt-6">
                <BrandIcon name={f.icon} />
                <h3 className="mt-5 text-[21px]">{f.title}</h3>
                <p className="mt-2 text-ink/70">{f.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Courses */}
      <section aria-labelledby="courses-title" className="bg-chalk py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading id="courses-title" label="COURSES" title="One programme for every step, Std 5th to 10th." />
            <Link to="/courses" className="link inline-flex items-center gap-2 text-[15px]">
              All course details <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {courses.map((c, i) => (
              <Reveal as="li" key={c.id} delay={i * 0.08}>
                <Link
                  to={`/courses#${c.id}`}
                  className="group flex h-full flex-col border border-ink/10 bg-white transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(59,15,64,0.45)]"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={c.image.src}
                      alt={c.image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="label text-deepblue">
                      {c.rung} · {c.standards}
                    </p>
                    <h3 className="mt-3 text-[24px]">{c.name}</h3>
                    <p className="mt-2 flex-1 text-[15px] text-ink/70">{c.summary}</p>
                    <p className="mt-5 inline-flex items-center gap-2 text-[15px] font-normal text-purple">
                      View course{' '}
                      <ArrowRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How we teach — the ladder */}
      <section aria-labelledby="ladder-title" className="relative overflow-hidden bg-plum py-20 text-white sm:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionHeading id="ladder-title" label={ladderIntro.label} title={ladderIntro.title} text={ladderIntro.text} dark />
          <ol className="relative border-l border-yellow/40 pl-8">
            {[...ladderSteps].reverse().map((s, i) => (
              <Reveal as="li" key={s.number} delay={i * 0.08} className="relative pb-8 last:pb-0">
                <span
                  className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-plum ring-1 ring-yellow"
                  aria-hidden="true"
                >
                  <ScholarDot tone="yellow" size={7} />
                </span>
                <p className="text-[12px] font-medium text-yellow">{s.number}</p>
                <h3 className="mt-1 text-[24px] font-normal text-white">{s.title}</h3>
                <p className="mt-1 text-white/75">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Inside Avadhut */}
      <section aria-labelledby="inside-title" className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading id="inside-title" label={insideAvadhut.label} title={insideAvadhut.title} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-3">
            {insideAvadhut.photos.map((p, i) => (
              <Reveal as="li" key={p.src} delay={i * 0.08}>
                <figure className={`bg-white p-3 pb-4 shadow-[0_16px_40px_-24px_rgba(59,15,64,0.5)] ${i === 1 ? 'sm:translate-y-6' : ''}`}>
                  <img
                    src={p.src}
                    srcSet={srcSet(p.src, insideAvadhutWidths[i])}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    alt={p.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <figcaption className="mt-3 font-accent text-[18px] italic text-plum">{p.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="voices-title" className="bg-lavender py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading id="voices-title" label="PARENTS & STUDENTS" title="What families say." />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={t.name} delay={i * 0.08} className="flex flex-col bg-white p-7">
                <Quote size={26} strokeWidth={1.5} className="text-yellow" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 font-display text-[17px] font-light leading-relaxed text-plum">{t.quote}</blockquote>
                <p className="mt-6 text-[14px] text-ink/60">— {t.name}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Visit */}
      <section aria-labelledby="visit-title" className="bg-white py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading id="visit-title" label="VISIT US" title={`Find us at ${site.area}.`} />
            <Reveal>
              <p className="mt-6 flex max-w-md items-start gap-3 text-ink/80">
                <MapPin size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-purple" aria-hidden="true" />
                {site.address}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton variant="primary" />
                <ButtonLink to="/contact" variant="secondary">
                  Directions and timings
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <iframe
              title="Map showing Avadhut Classes, Market Yard, Baramati"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full border border-ink/10"
            />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
