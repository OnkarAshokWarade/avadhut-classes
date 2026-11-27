import { MessageCircle, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { site, whatsappLink } from '../../data/site'

type Variant = 'primary' | 'secondary' | 'light' | 'outline-light'

const styles: Record<Variant, string> = {
  primary: 'bg-purple text-white hover:bg-plum',
  secondary: 'border border-purple/40 text-purple hover:border-purple hover:bg-lavender',
  light: 'bg-yellow text-plum hover:bg-white',
  'outline-light': 'border border-white/40 text-white hover:border-white hover:bg-white/10',
}

const base =
  'inline-flex items-center justify-center gap-2 px-5 py-3 font-display text-[15px] font-normal transition-colors focus-visible:outline-offset-4'

export function ButtonLink({ to, children, variant = 'primary' }: { to: string; children: ReactNode; variant?: Variant }) {
  return (
    <Link to={to} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  )
}

export function CallButton({ variant = 'secondary' }: { variant?: Variant }) {
  return (
    <a href={site.phoneHref} className={`${base} ${styles[variant]}`}>
      <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
      Call {site.phone}
    </a>
  )
}

export function WhatsAppButton({
  variant = 'secondary',
  message = 'Namaskar! I would like to know more about admissions at Avadhut Classes.',
}: {
  variant?: Variant
  message?: string
}) {
  return (
    <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]}`}>
      <MessageCircle size={16} strokeWidth={1.5} aria-hidden="true" />
      WhatsApp us
    </a>
  )
}
