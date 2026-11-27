import { MessageCircle, Phone } from 'lucide-react'
import { site, whatsappLink } from '../../data/site'

/** Call / WhatsApp bar pinned to the bottom of small screens — the two actions parents use most. */
export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-ink/10 bg-white pb-[env(safe-area-inset-bottom)] lg:hidden"
      style={{ paddingLeft: 'env(safe-area-inset-left)', paddingRight: 'env(safe-area-inset-right)' }}
    >
      <a href={site.phoneHref} className="flex min-h-[44px] items-center justify-center gap-2 py-3.5 font-display text-[15px] text-purple">
        <Phone size={17} strokeWidth={1.5} aria-hidden="true" />
        Call us
      </a>
      <a
        href={whatsappLink('Namaskar! I would like to know more about admissions at Avadhut Classes.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[44px] items-center justify-center gap-2 bg-purple py-3.5 font-display text-[15px] text-white"
      >
        <MessageCircle size={17} strokeWidth={1.5} aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  )
}
