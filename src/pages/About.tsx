import { RungMarker } from '../components/brand/RungMarker'
import { CtaBand } from '../components/ui/CtaBand'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { about, teachers } from '../data/about'
import { site } from '../data/site'
import { srcSet } from '../lib/responsiveImage'

export default function About() {
  const m = about.mission
  return (
    <>
      <PageHero
        label="ABOUT US"
        title={
          <>
            Welcome to <span className="font-medium text-yellow">Avadhut Classes</span>
          </>
        }
        text={`${site.promise.first} ${site.promise.second}`}
      />

      <section aria-labelledby="intro-title" className="bg-white py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 id="intro-title" className="sr-only">
              Who we are
            </h2>
            <Reveal>
              <p className="font-display text-[clamp(24px,22.3px+0.44vw,28px)] font-light leading-[1.5] text-plum">{about.intro.lead}</p>
              {about.intro.body.map((p) => (
                <p key={p} className="mt-6 text-ink/75">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <img
              src={about.intro.image.src}
              srcSet={srcSet(about.intro.image.src, 736)}
              sizes="(min-width: 1024px) 42vw, 100vw"
              alt={about.intro.image.alt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="mission-title" className="bg-lavender py-20 sm:py-24">
        <div className="container-page max-w-4xl text-center">
          <Reveal>
            <p id="mission-title" className="label text-purple">
              OUR MISSION
            </p>
            <p className="mt-6 font-display text-[clamp(28px,23.9px+1.1vw,38px)] font-light leading-[1.45] text-plum">
              {m.before}
              <em className="font-accent italic text-purple">{m.discover}</em> and{' '}
              <em className="font-accent italic text-deepblue">{m.achieve}</em>
              {m.after}
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="story-title" className="bg-plum py-20 text-white sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="label text-yellow">{about.story.label}</p>
            <h2 id="story-title" className="mt-5 font-light text-[clamp(56px,46.1px+2.65vw,80px)] leading-[1] text-white">
              {about.story.title.light}
              <br />
              <span className="font-medium text-yellow">{about.story.title.medium}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 self-center text-white/80">
            {about.story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="font-display text-[22px] font-light text-white">
              Today’s class. <span className="text-yellow">Tomorrow’s future.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="values-title" className="bg-white py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading id="values-title" label="WHAT WE STAND FOR" title="A good teacher: calm, organised and encouraging." />
            <Reveal>
              <p className="mt-6 border-l-2 border-yellow pl-5 text-ink/75">{about.positioning}</p>
            </Reveal>
          </div>
          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {about.values.map((v, i) => (
              <Reveal as="li" key={v.trait} delay={i * 0.05} className="card p-6">
                <p className="font-display text-[20px] font-medium text-plum">{v.trait}</p>
                <p className="mt-1 text-[15px] text-ink/60">{v.not}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="teachers-title" className="bg-chalk py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading id="teachers-title" label="OUR TEACHERS" title="Subject experts who know every student by name." />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((t, i) => (
              <Reveal as="li" key={t.subject} delay={i * 0.06} className="flex flex-col bg-white p-6">
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-lavender font-display text-[22px] font-normal text-purple"
                  aria-hidden="true"
                >
                  {t.subject[0]}
                </span>
                <p className="label mt-5 text-deepblue">{t.subject}</p>
                <h3 className="mt-2 text-[20px] font-normal">{t.name}</h3>
                <p className="text-[13px] text-ink/55">{t.experience}</p>
                <p className="mt-4 flex gap-3 text-[15px] text-ink/70">
                  <RungMarker tone="yellow" width={16} className="mt-2" />
                  {t.note}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
