import { useRef, useState, type KeyboardEvent } from 'react'
import { CtaBand } from '../components/ui/CtaBand'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { DailyGoals } from '../components/zone/DailyGoals'
import { ExamCountdown } from '../components/zone/ExamCountdown'
import { FocusTimer } from '../components/zone/FocusTimer'
import { FormulaCards } from '../components/zone/FormulaCards'
import { LadderQuiz } from '../components/zone/LadderQuiz'
import { zoneIntro, zoneTabs, type ZoneTabId } from '../data/studentZone'

const panels: Record<ZoneTabId, () => JSX.Element> = {
  focus: FocusTimer,
  quiz: LadderQuiz,
  cards: FormulaCards,
  exam: ExamCountdown,
  goals: DailyGoals,
}

export default function StudentZone() {
  const [active, setActive] = useState<ZoneTabId>('focus')
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Arrow keys move between tabs (standard tab-list keyboard pattern).
  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const last = zoneTabs.length - 1
    const next =
      e.key === 'ArrowRight'
        ? i === last
          ? 0
          : i + 1
        : e.key === 'ArrowLeft'
          ? i === 0
            ? last
            : i - 1
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? last
              : null
    if (next === null) return
    e.preventDefault()
    setActive(zoneTabs[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <>
      <PageHero
        label={zoneIntro.label}
        title={
          <>
            Study tools. <span className="font-medium text-yellow">Free. Every day.</span>
          </>
        }
        text={zoneIntro.text}
      />

      <section aria-labelledby="zone-title" className="bg-chalk py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading id="zone-title" label="PICK A TOOL" title="Climb one rung at a time." />

          <div role="tablist" aria-label="Student tools" className="mt-10 flex gap-1 overflow-x-auto border-b border-ink/10">
            {zoneTabs.map((t, i) => {
              const selected = t.id === active
              return (
                <button
                  key={t.id}
                  ref={(el) => (tabRefs.current[i] = el)}
                  id={`tab-${t.id}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(t.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`relative min-h-[48px] whitespace-nowrap px-4 font-display text-[15px] font-normal transition-colors ${
                    selected
                      ? 'text-purple after:absolute after:inset-x-3 after:bottom-0 after:h-[2px] after:bg-yellow'
                      : 'text-plum/70 hover:text-purple'
                  }`}
                >
                  {t.label}
                </button>
              )
            })}
          </div>

          {/* All panels stay mounted (only hidden), so the focus timer keeps running when you switch tools. */}
          {zoneTabs.map((t) => {
            const Panel = panels[t.id]
            return (
              <div
                key={t.id}
                id={`panel-${t.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${t.id}`}
                hidden={t.id !== active}
                tabIndex={0}
                className="mt-8 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(59,15,64,0.45)] sm:p-10"
              >
                <Panel />
              </div>
            )
          })}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
