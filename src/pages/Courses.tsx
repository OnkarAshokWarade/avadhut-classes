import { CheckCircle2, Clock } from 'lucide-react'
import { ScholarDot } from '../components/brand/ScholarDot'
import { ButtonLink, WhatsAppButton } from '../components/ui/Buttons'
import { CtaBand } from '../components/ui/CtaBand'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { courses, coursesNote, weeklyRhythm } from '../data/courses'
import { srcSet } from '../lib/responsiveImage'

// Natural width of each course's photo, by image filename.
const courseImageWidths: Record<string, number> = {
  'photo-worksheet.jpg': 736,
  'photo-sticky-notes.jpg': 933,
  'photo-boy-test-result.jpg': 564,
}

export default function Courses() {
  return (
    <>
      <PageHero
        label="COURSES · STD 5TH – 10TH"
        title={
          <>
            Three rungs. <span className="font-medium text-yellow">One climb.</span>
          </>
        }
        text={coursesNote}
      />

      <nav aria-label="Courses" className="sticky top-[72px] z-20 border-b border-ink/10 bg-white/95 backdrop-blur">
        <ul className="container-page flex gap-1 overflow-x-auto py-2">
          {courses.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="block whitespace-nowrap px-3 py-2 font-display text-[14px] text-plum/80 transition-colors hover:text-purple"
              >
                {c.name} <span className="text-ink/45">· {c.standards}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {courses.map((c, i) => (
        <section
          key={c.id}
          id={c.id}
          aria-labelledby={`${c.id}-title`}
          className={`scroll-mt-32 py-20 sm:py-24 ${i % 2 ? 'bg-chalk' : 'bg-white'}`}
        >
          <div className={`container-page grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <Reveal>
              <img
                src={c.image.src}
                srcSet={srcSet(c.image.src, courseImageWidths[c.image.src.split('/').pop()!])}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt={c.image.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="label text-deepblue">
                {c.rung} · {c.standards}
              </p>
              <h2 id={`${c.id}-title`} className="mt-3 font-light text-[clamp(38px,34.7px+0.88vw,46px)]">
                {c.name}
              </h2>
              <span className="mt-4 block h-[2px] w-14 bg-yellow" aria-hidden="true" />
              <p className="mt-5 text-[18px] text-ink/75">{c.summary}</p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Subjects">
                {c.subjects.map((s) => (
                  <li key={s} className="bg-lavender px-3 py-1.5 text-[14px] font-normal text-plum">
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="label text-ink/55">What’s included</p>
                  <ul className="mt-3 space-y-2.5">
                    {c.includes.map((inc) => (
                      <li key={inc} className="flex gap-2.5 text-[15px] text-ink/80">
                        <CheckCircle2 size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-purple" aria-hidden="true" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label text-ink/55">Batch timings</p>
                  <ul className="mt-3 space-y-2.5">
                    {c.timings.map((t) => (
                      <li key={t} className="flex gap-2.5 text-[15px] text-ink/80">
                        <Clock size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-deepblue" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink to="/admissions">Enquire for {c.standards}</ButtonLink>
                <WhatsAppButton message={`Namaskar! I would like details of the ${c.name} course (${c.standards}) at Avadhut Classes.`} />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section aria-labelledby="week-title" className="bg-plum py-20 text-white sm:py-24">
        <div className="container-page">
          <SectionHeading id="week-title" label="A TYPICAL WEEK" title="Small steps, every day." dark />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {weeklyRhythm.map((w, i) => (
              <Reveal as="li" key={w.day} delay={i * 0.06} className="border-t border-yellow/50 pt-5">
                <p className="flex items-center gap-2 font-display text-[19px] font-normal text-white">
                  <ScholarDot tone="yellow" size={7} />
                  {w.day}
                </p>
                <p className="mt-2 text-white/75">{w.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
