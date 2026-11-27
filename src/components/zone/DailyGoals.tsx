import { useState } from 'react'
import { dailyGoals } from '../../data/studentZone'
import { playAlert, unlockAudio } from '../../lib/audio'

/** A short checklist for the day. Each ticked goal fills the progress bar. */
export function DailyGoals() {
  const [done, setDone] = useState<boolean[]>(() => dailyGoals.map(() => false))
  const count = done.filter(Boolean).length
  const total = dailyGoals.length

  const toggle = (i: number) => {
    const next = done.map((d, j) => (j === i ? !d : d))
    setDone(next)
    if (next.every(Boolean)) {
      unlockAudio()
      playAlert.melody()
    }
  }

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <ul className="space-y-2.5">
        {dailyGoals.map((g, i) => (
          <li key={g}>
            <label className="flex min-h-[52px] cursor-pointer items-center gap-3 bg-lavender px-4 text-plum">
              <input type="checkbox" checked={done[i]} onChange={() => toggle(i)} className="h-5 w-5 accent-purple" />
              <span className={done[i] ? 'text-ink/50 line-through' : ''}>{g}</span>
            </label>
          </li>
        ))}
      </ul>
      <div aria-live="polite">
        <p className="label text-purple">My ladder today</p>
        <h3 className="mt-3 text-[34px] font-light">
          {count} of {total} steps
        </h3>
        <div
          className="mt-5 h-2 bg-lavender"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={count}
          aria-label="Goals done"
        >
          <div className="h-full bg-yellow transition-[width] duration-500" style={{ width: `${(count / total) * 100}%` }} />
        </div>
        <p className="mt-5 font-display text-[17px] text-purple">
          {count === 0
            ? 'Tick a goal to take your first step.'
            : count < total
              ? 'One step forward. Keep going!'
              : 'All steps done today. Brilliant!'}
        </p>
      </div>
    </div>
  )
}
