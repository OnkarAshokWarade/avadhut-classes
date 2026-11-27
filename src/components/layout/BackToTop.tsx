import { ArrowUp } from 'lucide-react'
import { useEffect, useState, type MouseEvent } from 'react'

/**
 * Floating "Back to top" pill. Appears after scrolling ~60% of the screen height.
 * It is a real link to #top (id on <body>), so it works without JavaScript.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
    // Return keyboard focus to the top of the page without interrupting the scroll.
    document.getElementById('home-link')?.focus({ preventScroll: true })
  }

  return (
    <a
      href="#top"
      onClick={handleClick}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`group fixed right-[calc(20px+env(safe-area-inset-right))] z-40 flex h-11 items-center gap-2 rounded-full bg-plum py-1.5 pl-1.5 pr-4 font-display text-[13px] font-semibold text-white ring-1 ring-white/20 shadow-[0_10px_28px_-10px_rgba(28,26,30,0.55)] transition-[opacity,transform,visibility,background-color] duration-300 hover:bg-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow motion-reduce:transition-none bottom-[calc(72px+env(safe-area-inset-bottom))] lg:bottom-[calc(20px+env(safe-area-inset-bottom))] ${
        visible ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible translate-y-3 opacity-0'
      }`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow text-plum transition-colors group-hover:bg-white group-hover:text-purple">
        <ArrowUp size={16} strokeWidth={2} aria-hidden="true" />
      </span>
      Back to top
    </a>
  )
}
