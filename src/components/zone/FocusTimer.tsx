import { Bell, BarChart3 } from 'lucide-react'
import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { alertSounds, ambientSounds, customFocusMinutes, focusModes } from '../../data/studentZone'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { playAlert, startAmbient, unlockAudio, type AlertKind, type AmbientKind } from '../../lib/audio'
import { ChoiceGroup } from './ChoiceGroup'

const CIRCUMFERENCE = 339.3 // 2 × π × 54 (the ring's radius)
const formatTime = (secs: number) => `${String(Math.floor(secs / 60)).padStart(2, '0')}:${String(secs % 60).padStart(2, '0')}`

/** Pomodoro-style focus timer with optional background sound, an alarm and a daily session count. */
export function FocusTimer() {
  const [total, setTotal] = useState(25 * 60)
  const [left, setLeft] = useState(25 * 60)
  const [running, setRunning] = useState(false)
  const [sound, setSound] = useState<AmbientKind>('off')
  const [alertKind, setAlertKind] = useState<AlertKind>('melody')
  const [ringing, setRinging] = useState(false)
  const [customMinutesInput, setCustomMinutesInput] = useState('')
  const [today] = useState(() => new Date().toDateString())
  const [sessions, setSessions] = useLocalStorage(`av-sessions-${today}`, 0)
  const endAt = useRef(0)
  const stopButton = useRef<HTMLButtonElement>(null)

  // Count down. Uses the real clock (endAt), so it stays correct even if the tab is in the background.
  useEffect(() => {
    if (!running) return
    const id = window.setInterval(() => {
      const remaining = Math.max(0, Math.round((endAt.current - Date.now()) / 1000))
      setLeft(remaining)
      if (remaining === 0) {
        setRunning(false)
        if (total >= 15 * 60) setSessions((n) => n + 1) // only real focus sessions count, not breaks
        setRinging(true)
      }
    }, 250)
    return () => window.clearInterval(id)
  }, [running, total, setSessions])

  // Background sound plays only while the timer runs.
  useEffect(() => {
    if (!running) return
    return startAmbient(sound)
  }, [running, sound])

  // Show the time left in the browser tab title while running.
  useEffect(() => {
    if (!running) return
    const original = document.title
    document.title = `${formatTime(left)} · Focus · Avadhut Classes`
    return () => {
      document.title = original
    }
  }, [running, left])

  // Alarm: repeat the chosen sound (and vibrate on phones) until the student stops it.
  useEffect(() => {
    if (!ringing) return
    const play = () => {
      playAlert[alertKind]()
      navigator.vibrate?.([500, 200, 500, 200, 800])
    }
    play()
    const id = window.setInterval(play, 2400)
    try {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Time’s up!', { body: 'Focus session complete. Take a short break.' })
      }
    } catch {
      // Notifications not supported here.
    }
    stopButton.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setRinging(false)
    document.addEventListener('keydown', onKey)
    return () => {
      window.clearInterval(id)
      navigator.vibrate?.(0)
      document.removeEventListener('keydown', onKey)
    }
  }, [ringing, alertKind])

  const start = useCallback((seconds: number) => {
    unlockAudio()
    try {
      if ('Notification' in window && Notification.permission === 'default') void Notification.requestPermission()
    } catch {
      // Notifications not supported here.
    }
    setLeft(seconds)
    endAt.current = Date.now() + seconds * 1000
    setRunning(true)
  }, [])

  const toggle = () => (running ? setRunning(false) : start(left > 0 ? left : total))

  const chooseMode = (minutes: number) => {
    setRunning(false)
    setTotal(minutes * 60)
    setLeft(minutes * 60)
    setCustomMinutesInput('')
  }

  const applyCustomMinutes = (e: FormEvent) => {
    e.preventDefault()
    const minutes = Math.round(Number(customMinutesInput))
    if (!minutes || minutes < customFocusMinutes.min || minutes > customFocusMinutes.max) return
    setRunning(false)
    setTotal(minutes * 60)
    setLeft(minutes * 60)
  }

  const chooseSound = (value: AmbientKind) => {
    setSound(value)
    if (!running && value !== 'off') {
      unlockAudio()
      window.setTimeout(startAmbient(value), 1500) // short preview
    }
  }

  const chooseAlert = (value: AlertKind) => {
    setAlertKind(value)
    unlockAudio()
    playAlert[value]()
  }

  const startBreak = () => {
    setRinging(false)
    setTotal(5 * 60)
    start(5 * 60)
  }

  const minutesSelected = total / 60

  return (
    <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
      <div className="relative mx-auto h-[230px] w-[230px] sm:h-[270px] sm:w-[270px]">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="60" cy="60" r="54" fill="none" className="stroke-lavender" strokeWidth="5" />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            className="stroke-yellow transition-[stroke-dashoffset] duration-300"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - left / total)}
          />
        </svg>
        <p role="timer" aria-live="off" className="absolute inset-0 grid place-items-center font-display text-[54px] font-light text-plum">
          {formatTime(left)}
        </p>
      </div>

      <div>
        <h3 className="text-[28px] font-light">Focus mode</h3>
        <p className="label mt-6 text-ink/55">Session</p>
        <div className="mt-3">
          <ChoiceGroup
            label="Session length"
            options={focusModes.map((m) => ({ label: m.label, value: m.minutes }))}
            value={minutesSelected}
            onChange={chooseMode}
          />
        </div>
        <form onSubmit={applyCustomMinutes} className="mt-3 flex flex-wrap items-center gap-2">
          <label htmlFor="custom-minutes" className="text-[14px] text-ink/65">
            Custom:
          </label>
          <input
            id="custom-minutes"
            type="number"
            inputMode="numeric"
            min={customFocusMinutes.min}
            max={customFocusMinutes.max}
            placeholder="Minutes"
            value={customMinutesInput}
            onChange={(e) => setCustomMinutesInput(e.target.value)}
            className="min-h-[44px] w-24 border border-ink/15 bg-white px-3 text-[15px] text-plum focus:border-purple focus:outline-none"
          />
          <button
            type="submit"
            className="min-h-[44px] border border-purple/40 px-4 font-display text-[14px] font-normal text-purple transition-colors hover:border-purple hover:bg-lavender"
          >
            Set time
          </button>
        </form>
        <p className="label mt-6 text-ink/55">Focus sound</p>
        <div className="mt-3">
          <ChoiceGroup label="Focus sound" options={ambientSounds} value={sound} onChange={chooseSound} />
        </div>
        <p className="label mt-6 text-ink/55">When time is up</p>
        <div className="mt-3">
          <ChoiceGroup label="Alarm sound" options={alertSounds} value={alertKind} onChange={chooseAlert} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={toggle}
            className="min-h-[48px] min-w-[120px] bg-purple px-6 font-display text-[15px] font-normal text-white transition-colors hover:bg-plum"
          >
            {running ? 'Pause' : 'Start'}
          </button>
          <button
            type="button"
            onClick={() => chooseMode(minutesSelected)}
            className="min-h-[48px] border border-purple/40 px-6 font-display text-[15px] font-normal text-purple transition-colors hover:border-purple hover:bg-lavender"
          >
            Reset
          </button>
        </div>
        <p aria-live="polite" className="mt-6 inline-flex items-center gap-2 bg-lavender px-4 py-2 text-[14px] text-plum">
          <BarChart3 size={16} strokeWidth={1.5} className="text-purple" aria-hidden="true" />
          {sessions} {sessions === 1 ? 'session' : 'sessions'} today
        </p>
      </div>

      {ringing &&
        createPortal(
          <div className="fixed inset-0 z-50 grid place-items-center bg-plum/60 p-4 backdrop-blur-sm">
            <div
              role="alertdialog"
              aria-modal="true"
              aria-labelledby="alarm-title"
              className="w-full max-w-md bg-white p-10 text-center shadow-2xl"
            >
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-yellow text-plum motion-safe:animate-bounce">
                <Bell size={36} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 id="alarm-title" className="mt-5 text-[28px]">
                Time’s up!
              </h3>
              <p className="mt-2 text-ink/65">One more step climbed. Take a short break.</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <button
                  ref={stopButton}
                  type="button"
                  onClick={() => setRinging(false)}
                  className="min-h-[48px] bg-purple px-6 font-display text-[15px] font-normal text-white hover:bg-plum"
                >
                  Stop alarm
                </button>
                <button
                  type="button"
                  onClick={startBreak}
                  className="min-h-[48px] border border-purple/40 px-6 font-display text-[15px] font-normal text-purple hover:bg-lavender"
                >
                  Start 5-min break
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}
