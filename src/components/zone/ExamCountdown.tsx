import { useEffect, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const DAY = 86_400_000
const HOUR = 3_600_000
const MINUTE = 60_000

/** Days, hours, minutes and seconds until the student's exam. Name and date are remembered in the browser. */
export function ExamCountdown() {
  const [name, setName] = useLocalStorage('av-exam-name', '')
  const [date, setDate] = useLocalStorage('av-exam-date', '')
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (!date) return
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [date])

  const msLeft = date ? Math.max(0, new Date(`${date}T09:00:00`).getTime() - now) : null
  const parts =
    msLeft === null
      ? null
      : [
          { label: 'Days', value: Math.floor(msLeft / DAY) },
          { label: 'Hours', value: Math.floor((msLeft % DAY) / HOUR) },
          { label: 'Minutes', value: Math.floor((msLeft % HOUR) / MINUTE) },
          { label: 'Seconds', value: Math.floor((msLeft % MINUTE) / 1000) },
        ]

  const examName = name.trim() || 'your exam'
  const days = parts?.[0].value ?? 0
  const message =
    msLeft === null
      ? 'Pick your exam date to start the countdown.'
      : msLeft === 0
        ? 'It’s exam day. You’ve climbed every rung. All the best!'
        : days > 60
          ? `${days} days to ${examName}. Plenty of time to build strong basics.`
          : days > 14
            ? `${days} days to ${examName}. Time for regular revision and practice tests.`
            : `Final stretch to ${examName}. Revise, rest well, stay calm.`

  const field =
    'mt-2 w-full border border-ink/20 bg-white px-3.5 py-3 text-[15px] font-normal text-ink placeholder:text-ink/40 focus:border-deepblue focus:outline-none'

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="label text-ink/65">Exam name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Std 10 Board Exam" className={field} />
        </label>
        <label className="block">
          <span className="label text-ink/65">Exam date</span>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
        </label>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {(parts ?? ['Days', 'Hours', 'Minutes', 'Seconds'].map((label) => ({ label, value: null }))).map((p) => (
          <div key={p.label} className="flex flex-col-reverse bg-lavender px-3 py-5 text-center">
            <dt className="label mt-1 text-ink/55">{p.label}</dt>
            <dd className="font-display text-[42px] font-light leading-none text-plum">{p.value ?? '--'}</dd>
          </div>
        ))}
      </dl>
      <p aria-live="polite" className="mt-5 font-display text-[17px] text-purple">
        {message}
      </p>
    </div>
  )
}
