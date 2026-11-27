// Home page content. Promises, ladder steps and the brand idea come from the brand guide;
// the rest is PLACEHOLDER copy written in the brand's voice.
import type { IconName } from '../components/brand/BrandIcon'

export const hero = {
  label: 'ADMISSIONS OPEN · STD 5TH – 10TH', // PLACEHOLDER — update each academic year
  headline: { light: 'Building strong', medium: 'foundations.' }, // brand guide
  accent: 'Creating bright futures.', // brand guide
  text: 'A trusted coaching institute in Market Yard, Baramati. Subject experts, small batches and regular tests help every student take the next step with confidence.',
  image: { src: '/assets/photos/photo-girl-writing.jpg', alt: 'A student concentrating while writing in her notebook.' },
}

/** Quick facts under the hero. PLACEHOLDER values — confirm before publishing. */
export const quickFacts = [
  { value: '5th – 10th', label: 'Standards we teach' },
  { value: '25', label: 'Students per batch, at most' },
  { value: 'Weekly', label: 'Tests and progress reports' },
  { value: '1 : 1', label: 'Mentoring for every student' },
]

export interface Feature {
  icon: IconName
  title: string
  text: string
}

/** The three promises (brand guide) plus supporting reasons (PLACEHOLDER). */
export const whyAvadhut: Feature[] = [
  { icon: 'Subjects', title: 'Quality Education', text: 'Strong conceptual teaching by experienced, subject-specific educators.' },
  { icon: 'Mentoring', title: 'Personal Attention', text: 'Personalised mentoring and individual guidance for every student.' },
  { icon: 'Progress', title: 'Academic Excellence', text: 'Regular assessments that turn practice into visible progress.' },
  {
    icon: 'Schedule',
    title: 'A routine that works',
    text: 'Fixed batch timings, homework planners and revision weeks before every school exam.',
  },
  {
    icon: 'Concepts',
    title: 'Concepts before shortcuts',
    text: 'We teach the “why” behind every formula, so answers make sense instead of being memorised.',
  },
  { icon: 'Goals', title: 'Parents in the loop', text: 'Monthly reports and parent meetings, so you always know how your child is doing.' },
]

/** "The ladder in the H" — brand guide */
export const ladderSteps = [
  { number: '01', title: 'Learn', text: 'The first rung: concepts built from the basics.' },
  { number: '02', title: 'Practise', text: 'Daily discipline and regular assessments.' },
  { number: '03', title: 'Persist', text: 'Personal mentoring keeps every student climbing.' },
  { number: '04', title: 'No ceiling', text: 'The ladder is open at the top. The only limit is the one you set for yourself.' },
]

export const ladderIntro = {
  label: 'HOW WE TEACH',
  title: 'Learning is a ladder, and every class is a rung.',
  text: 'Nobody climbs a ladder in one jump. Every concept understood, every doubt cleared, every test taken is one rung higher.',
}

export const insideAvadhut = {
  label: 'INSIDE AVADHUT',
  title: 'A quiet look at an ordinary day of extraordinary effort.',
  photos: [
    {
      src: '/assets/photos/photo-classroom-empty.jpg',
      alt: 'A bright classroom with wooden chairs, ready for the morning batch.',
      caption: 'Focus.',
    },
    {
      src: '/assets/photos/photo-hands-notebook.jpg',
      alt: 'A student writing careful notes beside an open textbook.',
      caption: 'Practice.',
    },
    { src: '/assets/photos/photo-boy-test-result.jpg', alt: 'A happy student holding up a test paper marked 100.', caption: 'Progress.' },
  ],
}

/** PLACEHOLDER testimonials — replace with real quotes, shared with consent. */
export const testimonials = [
  {
    quote: 'My son used to be scared of Maths. After two terms he asks for extra problems. The weekly reports helped us see the change.',
    name: 'Parent of a Std 8 student',
  },
  {
    quote: 'The teachers explain every chapter calmly and clear our doubts the same day. Tests every week keep me on track.',
    name: 'Std 10 student',
  },
  {
    quote: 'Small batches, honest feedback and regular parent meetings. We always know where our daughter stands.',
    name: 'Parent of a Std 6 student',
  },
]

export const ctaBand = {
  title: 'Your seat is ready.',
  accent: 'Take the first step.',
  text: 'Admissions are open for Std 5th to 10th. Visit the centre, meet the teachers and book a free demo class.',
}
