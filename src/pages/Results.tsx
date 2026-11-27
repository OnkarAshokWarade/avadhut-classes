import { TrendingUp } from 'lucide-react'
import { CtaBand } from '../components/ui/CtaBand'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { celebration, progressStories, resultsIntro, socialPosts, studyTips } from '../data/results'
import { srcSet } from '../lib/responsiveImage'

export default function Results() {
  return (
    <>
      <PageHero
        label={resultsIntro.label}
        title={
          <>
            Every mark is a <span className="font-medium text-yellow">step.</span>
          </>
        }
        text={resultsIntro.text}
      />

      <section aria-labelledby="stories-title" className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            id="stories-title"
            label="IMPROVEMENT, EFFORT AND RESULTS"
            title="Progress over perfection."
            text="Stories are shared with the consent of students and parents."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {progressStories.map((s, i) => (
              <Reveal as="li" key={s.student} delay={i * 0.08} className="flex flex-col border border-ink/10 p-7">
                <p className="label text-deepblue">
                  {s.standard} · {s.subject}
                </p>
                <div className="mt-6 flex items-end gap-4" aria-label={`Marks went from ${s.from} to ${s.to} ${s.period}`}>
                  <span className="font-display text-[34px] font-light text-ink/40">{s.from}</span>
                  <TrendingUp size={26} strokeWidth={1.5} className="mb-2 text-yellow" aria-hidden="true" />
                  <span className="font-display text-[52px] font-light leading-none text-purple">{s.to}</span>
                </div>
                <div className="mt-4 h-1.5 bg-lavender" aria-hidden="true">
                  <div className="h-full bg-purple" style={{ width: `${s.to}%` }} />
                </div>
                <p className="mt-2 text-[13px] text-ink/55">Marks out of 100, {s.period}</p>
                <blockquote className="mt-6 flex-1 font-accent text-[18px] italic text-plum">“{s.quote}”</blockquote>
                <p className="mt-4 text-[14px] text-ink/60">— {s.student}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="celebrate-title" className="bg-plum text-white">
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <img
              src={celebration.image.src}
              srcSet={srcSet(celebration.image.src, 564)}
              sizes="(min-width: 1024px) 42vw, 100vw"
              alt={celebration.image.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="celebrate-title" className="font-light text-[clamp(34px,29.9px+1.1vw,44px)] leading-tight text-white">
              {celebration.title} <em className="block font-accent italic text-yellow">{celebration.accent}</em>
            </h2>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="tips-title" className="bg-chalk py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            id="tips-title"
            label="STEP OF THE WEEK"
            title={
              <>
                Study smarter, <span className="font-medium text-purple">not longer.</span>
              </>
            }
          />
          <ol className="space-y-4">
            {studyTips.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 0.06} className="flex gap-5 border-b border-ink/10 pb-4">
                <span className="font-display text-[28px] font-light text-yellow" aria-hidden="true">
                  {t.number}
                </span>
                <div>
                  <p className="font-display text-[20px] font-normal text-plum">{t.title}</p>
                  <p className="text-ink/65">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="social-title" className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading id="social-title" label="FROM OUR FEED" title="Tips, notices and motivation, every week." />
          <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
            {socialPosts.map((p, i) => (
              <Reveal as="li" key={p.src} delay={(i % 3) * 0.05}>
                <img
                  src={p.src}
                  srcSet={srcSet(p.src, 1080)}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  alt={p.alt}
                  width={1080}
                  height={1080}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
