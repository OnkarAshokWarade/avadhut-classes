import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { needOptions, standardsOptions } from '../../data/admissions'
import { whatsappLink } from '../../data/site'

interface ChipsProps {
  legend: string
  name: string
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
}

/** Radio buttons styled as chips. Real radio inputs, so the keyboard and screen readers work normally. */
function Chips({ legend, name, options, value, onChange }: ChipsProps) {
  return (
    <fieldset>
      <legend className="font-display text-[16px] font-normal text-plum">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o.value} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="peer sr-only"
            />
            <span className="inline-flex min-h-[44px] items-center border border-ink/15 bg-white px-4 text-[15px] text-plum transition-colors hover:border-purple peer-checked:border-purple peer-checked:bg-purple peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-deepblue">
              {o.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

/** Parent picks the standard and what matters most; we show how we help and a pre-filled WhatsApp link. */
export function ParentPlanner() {
  const [standard, setStandard] = useState('')
  const [need, setNeed] = useState('')
  const choice = needOptions.find((n) => n.id === need)

  return (
    <div className="space-y-7">
      <Chips
        legend="Your child’s standard"
        name="planner-standard"
        options={standardsOptions.map((s) => ({ value: s, label: s.replace('Std ', '') }))}
        value={standard}
        onChange={setStandard}
      />
      <Chips
        legend="What matters most?"
        name="planner-need"
        options={needOptions.map((n) => ({ value: n.id, label: n.label }))}
        value={need}
        onChange={setNeed}
      />

      <div aria-live="polite">
        <AnimatePresence>
          {standard && choice && (
            <motion.div
              key={`${standard}-${choice.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-l-2 border-yellow bg-lavender p-6"
            >
              <h3 className="text-[20px] font-medium">
                {standard} · {choice.label}
              </h3>
              <p className="mt-2 text-ink/75">{choice.advice}</p>
              <a
                href={whatsappLink(
                  `Namaskar! My child is in ${standard}. We are looking for help with ${choice.label.toLowerCase()}. Please share admission details.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 bg-purple px-5 py-3 font-display text-[15px] font-normal text-white transition-colors hover:bg-plum"
              >
                <MessageCircle size={16} strokeWidth={1.5} aria-hidden="true" />
                Ask on WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
