// Student Zone: free study tools for students. Edit the questions, cards and goals here.
import type { AlertKind, AmbientKind } from '../lib/audio'

export const zoneIntro = {
  label: 'STUDENT ZONE · FREE STUDY TOOLS',
  text: 'A focus timer, a quick quiz, formula cards, an exam countdown and a daily goal list. Free for every student, every day.',
}

export const zoneTabs = [
  { id: 'focus', label: 'Focus timer' },
  { id: 'quiz', label: 'Ladder quiz' },
  { id: 'cards', label: 'Formula cards' },
  { id: 'exam', label: 'Exam countdown' },
  { id: 'goals', label: 'Today’s goals' },
] as const

export type ZoneTabId = (typeof zoneTabs)[number]['id']

export const focusModes = [
  { label: 'Focus 25', minutes: 25 },
  { label: 'Deep 45', minutes: 45 },
  { label: 'Quick 15', minutes: 15 },
  { label: 'Break 5', minutes: 5 },
]

export const ambientSounds: { label: string; value: AmbientKind }[] = [
  { label: 'Off', value: 'off' },
  { label: 'Rain', value: 'rain' },
  { label: 'Calm tones', value: 'calm' },
  { label: 'Ocean', value: 'ocean' },
  { label: 'White noise', value: 'whitenoise' },
]

export const alertSounds: { label: string; value: AlertKind }[] = [
  { label: 'Melody', value: 'melody' },
  { label: 'Bell', value: 'bell' },
  { label: 'Buzzer', value: 'buzz' },
  { label: 'Chime', value: 'chime' },
  { label: 'Digital', value: 'digital' },
]

/** Lets a student set any custom focus length, in minutes. */
export const customFocusMinutes = { min: 1, max: 120 }

export interface QuizQuestion {
  question: string
  options: string[]
  answer: number // index of the correct option
}

// A larger pool than one play needs — the quiz picks QUIZ_QUESTIONS_PER_PLAY of these at random each time.
export const quizQuestions: QuizQuestion[] = [
  { question: 'What is 3/4 + 1/4?', options: ['1', '4/8', '3/16', '2'], answer: 0 },
  { question: 'Which gas do plants take in to make food?', options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'], answer: 1 },
  { question: 'The past tense of “teach” is…', options: ['teached', 'taught', 'teaching', 'teaches'], answer: 1 },
  { question: 'What is 2⁵?', options: ['10', '25', '32', '64'], answer: 2 },
  { question: 'Which planet is the Red Planet?', options: ['Venus', 'Jupiter', 'Mars', 'Saturn'], answer: 2 },
  { question: 'H₂O is the formula of…', options: ['Salt', 'Water', 'Hydrogen', 'Oxygen'], answer: 1 },
  { question: 'What is the LCM of 4 and 6?', options: ['10', '12', '24', '2'], answer: 1 },
  { question: 'Which part of the plant makes food by photosynthesis?', options: ['Root', 'Stem', 'Leaf', 'Flower'], answer: 2 },
  { question: 'Choose the correctly spelt word.', options: ['Recieve', 'Receive', 'Receeve', 'Receve'], answer: 1 },
  { question: 'What is the square root of 144?', options: ['11', '12', '13', '14'], answer: 1 },
  { question: 'The capital of Maharashtra is…', options: ['Pune', 'Nagpur', 'Mumbai', 'Nashik'], answer: 2 },
  { question: 'Which is a prime number?', options: ['21', '27', '29', '33'], answer: 2 },
  { question: 'An adjective describes a…', options: ['Verb', 'Noun', 'Adverb', 'Preposition'], answer: 1 },
  { question: 'Water boils at what temperature (°C) at sea level?', options: ['90°C', '100°C', '110°C', '120°C'], answer: 1 },
  { question: 'What is 15% of 200?', options: ['15', '20', '30', '35'], answer: 2 },
]

export const QUIZ_QUESTIONS_PER_PLAY = 6

/** Shuffles a copy of the array (Fisher–Yates) and returns the first `count` items. */
export function pickRandomQuestions(count = QUIZ_QUESTIONS_PER_PLAY): QuizQuestion[] {
  const pool = [...quizQuestions]
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, Math.min(count, pool.length))
}

export const formulaCards = {
  Maths: [
    ['Area of a circle', 'πr²'],
    ['(a + b)²', 'a² + 2ab + b²'],
    ['Pythagoras theorem', 'a² + b² = c²'],
    ['Simple interest', '(P × R × T) / 100'],
    ['Sum of angles of a triangle', '180°'],
    ['Area of a triangle', '½ × base × height'],
  ],
  Science: [
    ['Speed', 'Distance ÷ Time'],
    ['Force', 'Mass × Acceleration'],
    ['Chemical formula of water', 'H₂O'],
    ['Ohm’s law', 'V = I × R'],
    ['Unit of force', 'Newton (N)'],
    ['Powerhouse of the cell', 'Mitochondria'],
  ],
  English: [
    ['Antonym of “ancient”', 'Modern'],
    ['Past tense of “write”', 'Wrote'],
    ['Plural of “child”', 'Children'],
    ['Synonym of “rapid”', 'Fast'],
    ['A word that describes a noun', 'Adjective'],
    ['Past participle of “go”', 'Gone'],
  ],
} satisfies Record<string, [string, string][]>

export type FormulaSubject = keyof typeof formulaCards

export const dailyGoals = ['Revise one chapter', 'Solve 10 questions', 'One focus session', 'Ask one doubt in class']
