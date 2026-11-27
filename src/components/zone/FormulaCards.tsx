import { useEffect, useRef, useState } from 'react'
import { formulaCards, type FormulaSubject } from '../../data/studentZone'
import { ChoiceGroup } from './ChoiceGroup'

const subjects = Object.keys(formulaCards) as FormulaSubject[]

/** Flip cards: the question on the front, the formula or answer on the back. */
export function FormulaCards() {
  const [subject, setSubject] = useState<FormulaSubject>('Maths')
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const cards = formulaCards[subject]
  const [front, back] = cards[index]

  // Flip back to the front first, then change the card, so the next answer is never shown early.
  const goTo = (next: number, nextSubject = subject) => {
    window.clearTimeout(timer.current)
    const change = () => {
      setSubject(nextSubject)
      setIndex(next)
    }
    if (flipped) {
      setFlipped(false)
      timer.current = window.setTimeout(change, 350)
    } else change()
  }

  const face = 'absolute inset-0 flex flex-col items-center justify-center p-8 text-center [backface-visibility:hidden]'

  return (
    <div>
      <ChoiceGroup label="Subject" options={subjects.map((s) => ({ label: s, value: s }))} value={subject} onChange={(s) => goTo(0, s)} />

      <div className="mt-6 [perspective:1200px]">
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          aria-label={flipped ? `Answer: ${back}. Tap to see the question.` : `${front}. Tap to see the answer.`}
          className={`relative h-[260px] w-full transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none ${
            flipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          <span className={`${face} border border-ink/10 bg-lavender`}>
            <span className="label text-purple">{subject}</span>
            <span className="mt-3 font-display text-[clamp(26px,24.3px+0.44vw,30px)] font-light text-plum">{front}</span>
            <span className="mt-4 text-[13px] text-ink/55">Tap to flip</span>
          </span>
          <span className={`${face} bg-purple text-white [transform:rotateY(180deg)]`}>
            <span className="label text-yellow">Answer</span>
            <span className="mt-3 font-display text-[clamp(30px,28.3px+0.44vw,34px)] font-light">{back}</span>
          </span>
        </button>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => goTo((index - 1 + cards.length) % cards.length)}
          className="min-h-[48px] border border-purple/40 px-5 font-display text-[15px] font-normal text-purple hover:bg-lavender"
        >
          Previous
        </button>
        <span className="text-[14px] text-ink/55">
          {index + 1} / {cards.length}
        </span>
        <button
          type="button"
          onClick={() => goTo((index + 1) % cards.length)}
          className="min-h-[48px] bg-purple px-5 font-display text-[15px] font-normal text-white hover:bg-plum"
        >
          Next card
        </button>
      </div>
    </div>
  )
}
