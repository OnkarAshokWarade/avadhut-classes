import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { Footer } from './Footer'
import { BackToTop } from './BackToTop'
import { MobileActionBar } from './MobileActionBar'
import { Navbar } from './Navbar'

/** App frame: sticky navbar, fading page transitions, scroll restoration, footer. */
export function RootLayout() {
  const location = useLocation()
  const outlet = useOutlet()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }
    // Pages are lazy-loaded, so wait (up to ~2 s) for the target section to mount.
    let timer = 0
    let tries = 0
    const scrollToHash = () => {
      const el = document.getElementById(location.hash.slice(1))
      if (el) el.scrollIntoView()
      else if (tries++ < 40) timer = window.setTimeout(scrollToHash, 50)
    }
    scrollToHash()
    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main"
          key={location.pathname}
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
      <MobileActionBar />
    </div>
  )
}
