// Results page. All stories, numbers and tips are PLACEHOLDERS — replace with real results shared with consent.
// The brand guide asks us to celebrate progress, never to promise marks or ranks.

export const resultsIntro = {
  label: 'PROGRESS STORIES',
  title: 'Every mark is a step.',
  text: 'Regular tests. Honest feedback. Visible progress, chapter by chapter. We celebrate every climb, not only the toppers.',
}

export interface ProgressStory {
  student: string
  standard: string
  subject: string
  from: number
  to: number
  period: string
  quote: string
}

export const progressStories: ProgressStory[] = [
  {
    student: 'Student A',
    standard: 'Std 9',
    subject: 'Mathematics',
    from: 52,
    to: 78,
    period: 'over two terms',
    quote: 'Weekly tests showed me exactly which chapters needed more practice.',
  },
  {
    student: 'Student B',
    standard: 'Std 7',
    subject: 'Science',
    from: 61,
    to: 84,
    period: 'in one year',
    quote: 'Now I understand the experiments instead of just learning answers.',
  },
  {
    student: 'Student C',
    standard: 'Std 10',
    subject: 'English',
    from: 58,
    to: 80,
    period: 'from prelims to boards',
    quote: 'Writing practice every week made the board paper feel familiar.',
  },
]

export const celebration = {
  title: 'Congratulations to our Std 10 students.',
  accent: 'Your discipline paid off.',
  image: { src: '/assets/photos/photo-boy-test-result.jpg', alt: 'A smiling student holding up a test paper marked 100.' },
}

/** "Step of the week" study tips (from the brand guide's sample post) */
export const studyTips = [
  { number: '1.', title: 'Study 25 minutes, rest 5.', text: 'Short sprints keep focus sharp.' },
  { number: '2.', title: 'Write, don’t just read.', text: 'Notes make concepts stick.' },
  { number: '3.', title: 'Revise the same day.', text: 'Ten minutes tonight saves an hour later.' },
]

export const socialPosts = [
  { src: '/assets/social/post-pillar-step.jpg', alt: 'Post: Study smarter, not longer — three study tips.' },
  { src: '/assets/social/post-photo-every-mark.jpg', alt: 'Post: Every mark is a step.' },
  { src: '/assets/social/post-pillar-inside.jpg', alt: 'Post: Inside Avadhut — Focus, Practice, Progress.' },
  { src: '/assets/social/post-quote-discipline.jpg', alt: 'Post: Discipline today. Success tomorrow.' },
  { src: '/assets/social/post-idea-potential.jpg', alt: 'Post: Every child has unique potential.' },
  { src: '/assets/social/post-photo-marathi.jpg', alt: 'Post in Marathi: शिस्त आज, यश उद्या.' },
]
