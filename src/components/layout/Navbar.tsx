import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../../data/site'
import { Logo } from '../brand/Logo'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `relative whitespace-nowrap px-3 py-2 font-display text-[15px] font-normal transition-colors ${
    isActive
      ? 'text-purple after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[2px] after:bg-yellow'
      : 'text-plum/80 hover:text-purple'
  }`

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-white focus:px-3 focus:py-2">
          Skip to content
        </a>
        <div className="container-page flex h-[72px] items-center justify-between gap-4">
          <Link to="/" id="home-link" aria-label="Avadhut Classes — home">
            <Logo className="w-[118px]" eager />
          </Link>

          <nav aria-label="Main" className="hidden items-center lg:flex">
            {nav.map((n) => (
              <NavLink key={n.path} to={n.path} end={n.path === '/'} className={linkClass}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-[15px] font-normal text-deepblue hover:underline xl:inline-flex"
            >
              <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
              {site.phone}
            </a>
            <Link
              to="/admissions"
              className="bg-purple px-4 py-2.5 font-display text-[14px] font-normal text-white transition-colors hover:bg-plum"
            >
              Admissions open
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 p-2 font-display text-[15px] font-normal text-plum lg:hidden"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu <Menu size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Rendered outside the header: its backdrop-blur would otherwise trap this fixed panel. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-chalk"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container-page flex h-[72px] items-center justify-between">
              <Logo className="w-[118px]" />
              <button
                type="button"
                autoFocus
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 p-2 font-display text-[15px] text-plum"
              >
                Close <X size={20} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Main" className="container-page flex-1 pt-6">
              <ul>
                {nav.map((n, i) => (
                  <li key={n.path} className="border-t border-ink/10 last:border-b">
                    <NavLink
                      to={n.path}
                      end={n.path === '/'}
                      className={({ isActive }) => `flex items-baseline gap-5 py-4 ${isActive ? 'text-purple' : 'text-plum'}`}
                    >
                      <span className="w-6 font-display text-[12px] font-medium text-purple">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-display text-[24px] font-light">{n.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="container-page grid gap-3 py-8">
              <Link to="/admissions" className="bg-purple px-5 py-3.5 text-center font-display text-[15px] text-white">
                Admissions open · Book a demo
              </Link>
              <a href={site.phoneHref} className="border border-purple/40 px-5 py-3.5 text-center font-display text-[15px] text-purple">
                Call {site.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
