// Admissions page. Steps, documents and FAQ answers are PLACEHOLDERS — confirm with the centre.

export const admissionSteps = [
  { number: '01', title: 'Enquire', text: 'Call, send a WhatsApp message or fill in the form below. We reply the same day.' },
  {
    number: '02',
    title: 'Visit and meet',
    text: 'Come to the centre at Market Yard with your child, see the classrooms and meet the subject teachers.',
  },
  { number: '03', title: 'Free demo class', text: 'Your child attends a demo class and a short, friendly placement test.' },
  { number: '04', title: 'Join the batch', text: 'Choose a batch timing, complete the form and start the next step.' },
]

export const documents = [
  'Last school report card or marksheet',
  'Two passport-size photographs',
  'Parent’s contact number for updates',
  'Aadhaar card copy of the student (if available)',
]

export const faqs = [
  {
    q: 'Which standards and boards do you teach?',
    a: 'We teach Std 5th to 10th. Students from State Board (SSC) and CBSE schools are welcome.',
  },
  {
    q: 'How many students are in a batch?',
    a: 'Batches are kept small, with at most 25 students, so every student gets attention and doubts are cleared in class.',
  },
  {
    q: 'How will I know how my child is doing?',
    a: 'Students take a test every week. You receive a monthly progress report and can meet the subject teacher at the parent meeting.',
  },
  {
    q: 'Can my child join in the middle of the year?',
    a: 'Yes. After the placement test we plan extra sessions so your child can catch up on chapters already covered.',
  },
  {
    q: 'What are the fees?',
    a: 'Fees depend on the standard and the subjects chosen. Please call us or visit the centre for the current fee structure.',
  },
  {
    q: 'Do you offer a demo class?',
    a: 'Yes, every new student can attend one free demo class before joining.',
  },
]

export const standardsOptions = ['Std 5th', 'Std 6th', 'Std 7th', 'Std 8th', 'Std 9th', 'Std 10th']

/** Marathi admissions notice (brand guide sample copy) */
export const marathiNotice = 'नमस्कार पालक! इयत्ता ५ वी ते १० वी च्या नवीन बॅचेससाठी प्रवेश सुरू आहेत. अधिक माहितीसाठी संपर्क: ०७३८५३ २२००९'

/** "Plan your child's next step" helper on the Admissions page: what the parent cares about most, and how we help. */
export const needOptions = [
  {
    id: 'basics',
    label: 'Stronger basics',
    advice: 'Concepts rebuilt from the ground up, with practice until each topic is clear.',
  },
  { id: 'exam', label: 'Board exam', advice: 'Regular tests, timed practice and feedback from subject teachers.' },
  { id: 'routine', label: 'Discipline', advice: 'A fixed study rhythm, homework follow-up and personal mentoring.' },
  {
    id: 'confidence',
    label: 'Confidence',
    advice: 'Personal attention so your child asks doubts and attempts every question.',
  },
]
