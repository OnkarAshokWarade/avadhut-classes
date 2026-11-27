import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useCallback, useRef, useState, type ReactNode } from 'react'
import { ToastContext } from './toast-context'

/** Shows a short confirmation (e.g. "Copied #7F2786") at the bottom of the screen. */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null)
  const timer = useRef<number>()

  const show = useCallback((text: string) => {
    setMessage(text)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setMessage(null), 1800)
  }, [])

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
        <AnimatePresence>
          {message && (
            <motion.div
              key={message}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2 bg-plum px-4 py-3 text-sm font-normal text-white shadow-lg"
            >
              <Check size={16} strokeWidth={1.5} className="text-yellow" aria-hidden="true" />
              {message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
