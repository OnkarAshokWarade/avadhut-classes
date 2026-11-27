// About page. Welcome, mission, positioning and personality come from the brand guide;
// teacher profiles are PLACEHOLDERS.

export const about = {
  intro: {
    lead: 'Avadhut Classes is a trusted educational institute in Baramati, dedicated to quality education for students from Standards 5th to 10th.',
    body: [
      'With a commitment to academic excellence and holistic student development, we focus on building strong conceptual foundations, improving problem-solving abilities and developing confidence among students.',
      'Our teaching approach combines experienced subject-specific educators, personalised mentoring and regular assessments, so that every student receives the attention and guidance they deserve.',
    ],
    image: { src: '/assets/photos/photo-hands-notebook.jpg', alt: 'A student writing notes beside an open textbook.' },
  },
  mission: {
    before: 'Every child has unique potential. Our mission is to help each student ',
    discover: 'discover',
    achieve: 'achieve',
    after: ' it.',
  },
  story: {
    label: 'OUR STORY IN ONE LINE',
    title: { light: 'One step', medium: 'forward.' },
    paragraphs: [
      'That is what our tagline means. The right class today builds a bright future tomorrow, not through shortcuts or promises, but through steady, guided steps.',
      'At Avadhut Classes we don’t ask students to be perfect. We ask them to take the next step, and we take it with them: every student, every class, every day.',
    ],
  },
  positioning:
    'For families in Baramati who want more than tuition, Avadhut Classes is the coaching institute that builds strong foundations through personal attention, disciplined practice and regular assessment, so students grow in marks and in confidence.',
  values: [
    { trait: 'Disciplined mentor', not: 'not a strict headmaster' },
    { trait: 'Encouraging', not: 'not over-promising' },
    { trait: 'Clear & honest', not: 'not salesy' },
    { trait: 'Warm & local', not: 'not casual' },
  ],
}

export interface Teacher {
  name: string
  subject: string
  experience: string
  note: string
}

/** PLACEHOLDER faculty — replace names, subjects and experience with real details. */
export const teachers: Teacher[] = [
  {
    name: '[Teacher name]',
    subject: 'Mathematics',
    experience: '[X] years of teaching',
    note: 'Makes algebra and geometry feel like puzzles worth solving.',
  },
  {
    name: '[Teacher name]',
    subject: 'Science',
    experience: '[X] years of teaching',
    note: 'Connects every chapter of Physics, Chemistry and Biology to everyday life.',
  },
  {
    name: '[Teacher name]',
    subject: 'English',
    experience: '[X] years of teaching',
    note: 'Builds grammar, reading and writing skills one paragraph at a time.',
  },
  {
    name: '[Teacher name]',
    subject: 'Social Science',
    experience: '[X] years of teaching',
    note: 'Turns History and Geography into stories students remember.',
  },
]
