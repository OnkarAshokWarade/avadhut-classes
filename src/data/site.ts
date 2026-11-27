// Site-wide facts and navigation.
// Facts marked "brand guide" come from the Avadhut Classes brand PDF. Anything marked PLACEHOLDER is
// sample content to be replaced with real details.

export const site = {
  name: 'Avadhut Classes',
  tagline: 'Classes Right Toh Future Bright', // brand guide
  promise: { first: 'Building strong foundations.', second: 'Creating bright futures.' }, // brand guide
  motto: 'Discipline today, success tomorrow.', // brand guide
  bigIdea: 'One step forward.', // brand guide
  standards: 'Std 5th – 10th', // brand guide
  area: 'Market Yard, Baramati', // brand guide
  address: '1st Floor, Trimurti Heights, Market Yard Rd, opp. Chirau Hospital, Desai Estate, Baramati, Maharashtra 413102', // brand guide
  phone: '073853 22009', // brand guide
  phoneHref: 'tel:+917385322009',
  whatsappNumber: '917385322009',
  email: 'info@avadhutclasses.in', // PLACEHOLDER — the brand guide only shows "[email@avadhutclasses.in]"
  hours: [
    { days: 'Monday – Saturday', time: '7:00 a.m. – 8:30 p.m.' }, // PLACEHOLDER
    { days: 'Sunday', time: 'Doubt-solving and test days, 9:00 a.m. – 1:00 p.m.' }, // PLACEHOLDER
  ],
  mapQuery: 'Trimurti Heights, Market Yard Road, Baramati 413102',
} as const

export interface NavLinkItem {
  label: string
  path: string
}

export const nav: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Results', path: '/results' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Student zone', path: '/student-zone' },
  { label: 'Contact', path: '/contact' },
]

export const logoFiles = {
  primary: '/assets/logos/web/logo-primary.png',
  reversed: '/assets/logos/web/logo-reversed-white.png',
} as const

/** Builds a WhatsApp link with a pre-filled message to the centre. */
export const whatsappLink = (message: string) => `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
