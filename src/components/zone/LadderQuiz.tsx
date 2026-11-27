import { useEffect, useState } from 'react'
import { pickRandomQuestions, type QuizQuestion } from '../../data/studentZone'
import { playAlert, playCorrect, unlockAudio } from '../../lib/audio'

const cheers = ['One step up!', 'Nice climb!', 'Well done!', 'On fire!']

/** Multiple-choice quiz: a fresh set of random questions each play; every right answer lights a rung. */
export function LadderQuiz() {
  // Picked once when the component first mounts, and again each time "Play again" is pressed.
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => pickRandomQuestions())
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [feedback, setFeedback] = useState('')

  const total = questions.length
  const rungBottom = (i: number) => 8 + i * (84 / total) // % from the bottom of the ladder
  const finished = index >= total
  const current = questions[index]

  // After an answer, wait a moment so the student sees right/wrong, then show the next question.
  useEffect(() => {
    if (picked === null) return
    const id = window.setTimeout(() => {
      setIndex((i) => i + 1)
      setPicked(null)
      setFeedback('')
    }, 1300)
    return () => window.clearTimeout(id)
  }, [picked])

  useEffect(() => {
    if (finished && score === total) playAlert.melody()
  }, [finished, score, total])

  const answer = (option: number) => {
    if (picked !== null) return
    unlockAudio()
    setPicked(option)
    if (option === current.answer) {
      setScore((s) => s + 1)
      playCorrect()
      setFeedback(cheers[Math.floor(Math.random() * cheers.length)])
    } else {
      setFeedback('Not quite. The next rung is yours.')
    }
  }

  const restart = () => {
    setQuestions(pickRandomQuestions())
    setIndex(0)
    setScore(0)
    setPicked(null)
    setFeedback('')
  }

  const optionClass = (i: number) => {
    if (picked === null) return 'border-ink/15 bg-white hover:border-purple'
    if (i === current.answer) return 'border-yellow bg-yellow/25'
    if (i === picked) return 'border-warn/50 bg-warn/10'
    return 'border-ink/15 bg-white opacity-60'
  }

  return (
    <div className="grid gap-10 md:grid-cols-[150px_1fr]">
      {/* Mini ladder */}
      <div className="relative mx-auto h-[300px] w-[110px]" aria-hidden="true">
        <span className="absolute inset-y-0 left-0 w-2.5 bg-purple" />
        <span className="absolute inset-y-0 right-0 w-2.5 bg-purple" />
        {questions.map((q, i) => (
          <span
            key={q.question}
            className={`absolute inset-x-2.5 h-2 transition-colors duration-500 ${i < score ? 'bg-yellow shadow-[0_0_18px_rgba(254,190,35,0.9)]' : 'bg-lavender'}`}
            style={{ bottom: `${rungBottom(i)}%` }}
          />
        ))}
        <span
          className="absolute left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-purple ring-[6px] ring-purple/20 transition-[bottom] duration-700 ease-out motion-reduce:transition-none"
          style={{ bottom: score === 0 ? '-10px' : `calc(${rungBottom(score - 1)}% - 12px)` }}
        />
      </div>

      <div aria-live="polite">
        {finished ? (
          <>
            <p className="label text-purple">
              {score} of {total} rungs climbed
            </p>
            <h3 className="mt-4 text-[clamp(30px,28.3px+0.44vw,34px)] font-light">
              {score === total
                ? 'You reached the top. Future bright!'
                : score >= 4
                  ? 'So close. Keep climbing!'
                  : 'Every rung counts. Try again?'}
            </h3>
            <button
              type="button"
              onClick={restart}
              className="mt-7 min-h-[48px] bg-purple px-6 font-display text-[15px] font-normal text-white hover:bg-plum"
            >
              Play again
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-between text-[13px] text-ink/55">
              <span>
                Question {index + 1} of {total}
              </span>
              <span>Rungs: {score}</span>
            </div>
            <p className="mt-3 font-display text-[clamp(24px,22.3px+0.44vw,28px)] font-light text-plum">{current.question}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {current.options.map((o, i) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => answer(i)}
                  disabled={picked !== null}
                  className={`min-h-[56px] border px-4 py-3 text-left text-[16px] text-plum transition-colors ${optionClass(i)}`}
                >
                  {o}
                </button>
              ))}
            </div>
            <p className="mt-4 min-h-[28px] font-display text-[17px] text-purple">{feedback}</p>
          </>
        )}
      </div>
    </div>
  )
}
