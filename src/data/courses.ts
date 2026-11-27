// Courses. Programme names, subjects, timings and inclusions are PLACEHOLDERS — replace with the real offering.

export interface Course {
  id: string
  rung: string
  name: string
  standards: string
  summary: string
  subjects: string[]
  timings: string[]
  includes: string[]
  image: { src: string; alt: string }
}

export const courses: Course[] = [
  {
    id: 'foundation',
    rung: 'Rung 1',
    name: 'Foundation',
    standards: 'Std 5th – 7th',
    summary: 'Strong basics in Maths, Science and English, with good study habits built early.',
    subjects: ['Mathematics', 'Science', 'English'],
    timings: ['Morning batch · 7:00 – 8:30 a.m.', 'Evening batch · 5:00 – 6:30 p.m.'],
    includes: ['Activity-based concept classes', 'Weekly chapter tests', 'Homework planner and reading log', 'Monthly parent update'],
    image: { src: '/assets/photos/photo-worksheet.jpg', alt: 'A young student working through a workbook with coloured pencils.' },
  },
  {
    id: 'builder',
    rung: 'Rung 2',
    name: 'Concept Builder',
    standards: 'Std 8th – 9th',
    summary: 'Deeper understanding and problem-solving practice as subjects get harder.',
    subjects: ['Mathematics', 'Science', 'English', 'Social Science'],
    timings: ['Morning batch · 7:00 – 9:00 a.m.', 'Evening batch · 6:00 – 8:00 p.m.'],
    includes: [
      'Chapter-wise notes and practice sets',
      'Weekly tests with analysis',
      'Doubt-solving sessions every Sunday',
      'Monthly parent–teacher meeting',
    ],
    image: { src: '/assets/photos/photo-sticky-notes.jpg', alt: 'A study planner organised with colourful sticky notes.' },
  },
  {
    id: 'board',
    rung: 'Rung 3',
    name: 'Board Ready',
    standards: 'Std 10th',
    summary: 'Complete syllabus, structured revision and board-pattern practice for Std 10.',
    subjects: ['Mathematics', 'Science', 'English', 'Social Science'],
    timings: ['Morning batch · 6:30 – 9:00 a.m.', 'Evening batch · 5:30 – 8:30 p.m.'],
    includes: [
      'Syllabus finished before the prelims',
      'Board-pattern papers and model answers',
      'Time-management practice',
      'One-to-one mentoring before exams',
    ],
    image: { src: '/assets/photos/photo-boy-test-result.jpg', alt: 'A smiling student holding up a full-marks test paper.' },
  },
]

export const coursesNote = 'We teach State Board (SSC) and CBSE students. Batch sizes are kept small so every student gets attention.' // PLACEHOLDER

/** A typical week. PLACEHOLDER */
export const weeklyRhythm = [
  { day: 'Mon – Fri', text: 'Concept classes and guided practice' },
  { day: 'Saturday', text: 'Weekly test on the chapters of the week' },
  { day: 'Sunday', text: 'Doubt-solving and revision for students who need it' },
  { day: 'Every month', text: 'Progress report and parent meeting' },
]
