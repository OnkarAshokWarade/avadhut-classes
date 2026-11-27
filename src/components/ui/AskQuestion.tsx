import { MessageCircle } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { whatsappLink } from '../../data/site'
import { CallButton } from './Buttons'

/** "More questions?" box under the FAQ: sends the typed question to the centre on WhatsApp. */
export function AskQuestion() {
  const [question, setQuestion] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    window.open(whatsappLink(`Namaskar! I have a question: ${question.trim()}`), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 bg-lavender p-6 sm:p-8">
      <h3 className="text-[22px]">More questions? Ask us directly.</h3>
      <label className="mt-4 block">
        <span className="label text-ink/65">Your question</span>
        <input
          required
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. What are the batch timings for Std 9?"
          className="mt-2 w-full border border-ink/20 bg-white px-3.5 py-3 text-[15px] font-normal text-ink placeholder:text-ink/40 focus:border-deepblue focus:outline-none"
        />
      </label>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-purple px-5 py-3 font-display text-[15px] font-normal text-white transition-colors hover:bg-plum"
        >
          <MessageCircle size={16} strokeWidth={1.5} aria-hidden="true" />
          Ask on WhatsApp
        </button>
        <CallButton />
      </div>
    </form>
  )
}
