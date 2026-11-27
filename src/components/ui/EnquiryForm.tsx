import { Send } from 'lucide-react'
import { useRef, useState, type FormEvent } from 'react'
import { standardsOptions } from '../../data/admissions'
import { whatsappLink } from '../../data/site'
import { useToast } from './toast-context'

type Field = 'parent' | 'student' | 'standard' | 'phone' | 'message'
type Errors = Partial<Record<Field, string>>

// Letters (English or Marathi), spaces and dots only. Indian mobile: 10 digits starting with 6, 7, 8 or 9.
const NOT_NAME_CHARS = /[^A-Za-z\p{Script=Devanagari} .]/gu
const NAME_OK = /^[A-Za-z\p{Script=Devanagari} .]{2,}$/u
const MOBILE_OK = /^[6-9]\d{9}$/

function validate(form: Record<Field, string>): Errors {
  const errors: Errors = {}
  if (!NAME_OK.test(form.parent.trim())) errors.parent = 'Please enter the parent’s name (letters only).'
  if (!NAME_OK.test(form.student.trim())) errors.student = 'Please enter the student’s name (letters only).'
  if (!form.standard) errors.standard = 'Please choose a standard.'
  if (!MOBILE_OK.test(form.phone)) errors.phone = 'Please enter a valid 10-digit mobile number.'
  return errors
}

/**
 * Admission enquiry form. There is no backend yet, so submitting opens WhatsApp
 * with the details pre-filled for the centre's number. Swap `handleSubmit` for an API call later.
 */
export function EnquiryForm() {
  const toast = useToast()
  const [form, setForm] = useState<Record<Field, string>>({ parent: '', student: '', standard: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const refs = useRef<Partial<Record<Field, HTMLInputElement | HTMLSelectElement | null>>>({})

  // Clean the value as the visitor types: names lose digits/symbols, the mobile keeps digits only (max 10).
  const clean = (key: Field, value: string) => {
    if (key === 'parent' || key === 'student') return value.replace(NOT_NAME_CHARS, '').replace(/\s{2,}/g, ' ')
    if (key === 'phone') return value.replace(/\D/g, '').slice(0, 10)
    return value
  }

  const update = (key: Field) => (e: { target: { value: string } }) => {
    const next = { ...form, [key]: clean(key, e.target.value) }
    setForm(next)
    // After the first submit, re-check as they fix things so errors disappear straight away.
    if (submitted) setErrors(validate(next))
  }

  // Mark the mobile number red while it is being typed wrongly (e.g. starts with 5, or too short on blur).
  const phoneLooksWrong = form.phone.length > 0 && !/^[6-9]/.test(form.phone)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const found = validate(form)
    setErrors(found)
    const firstBad = (Object.keys(found) as Field[])[0]
    if (firstBad) {
      refs.current[firstBad]?.focus()
      return
    }

    const text = [
      'Namaskar! Admission enquiry for Avadhut Classes.',
      `Parent: ${form.parent.trim()}`,
      `Student: ${form.student.trim()}`,
      `Standard: ${form.standard}`,
      `Phone: ${form.phone}`,
      form.message.trim() && `Message: ${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
    toast('Opening WhatsApp with your enquiry')
  }

  const field = (bad: boolean) =>
    `mt-2 w-full border bg-white px-3.5 py-3 text-[15px] font-normal text-ink placeholder:text-ink/40 focus:outline-none ${
      bad ? 'border-warn ring-2 ring-warn/15 focus:border-warn' : 'border-ink/20 focus:border-deepblue'
    }`

  const errorText = (key: Field) =>
    errors[key] && (
      <span id={`enq-${key}-error`} className="mt-1.5 block text-[13px] text-warn">
        {errors[key]}
      </span>
    )

  const a11y = (key: Field) => ({
    'aria-invalid': Boolean(errors[key]),
    'aria-describedby': errors[key] ? `enq-${key}-error` : undefined,
  })

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <label className="block">
        <span className="label text-ink/65">Parent’s name</span>
        <input
          ref={(el) => (refs.current.parent = el)}
          value={form.parent}
          onChange={update('parent')}
          autoComplete="name"
          maxLength={40}
          className={field(Boolean(errors.parent))}
          {...a11y('parent')}
        />
        {errorText('parent')}
      </label>
      <label className="block">
        <span className="label text-ink/65">Student’s name</span>
        <input
          ref={(el) => (refs.current.student = el)}
          value={form.student}
          onChange={update('student')}
          maxLength={40}
          className={field(Boolean(errors.student))}
          {...a11y('student')}
        />
        {errorText('student')}
      </label>
      <label className="block">
        <span className="label text-ink/65">Standard</span>
        <select
          ref={(el) => (refs.current.standard = el)}
          value={form.standard}
          onChange={update('standard')}
          className={field(Boolean(errors.standard))}
          {...a11y('standard')}
        >
          <option value="" disabled>
            Select a standard
          </option>
          {standardsOptions.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        {errorText('standard')}
      </label>
      <label className="block">
        <span className="label text-ink/65">Mobile number (10 digits)</span>
        <input
          ref={(el) => (refs.current.phone = el)}
          type="tel"
          inputMode="numeric"
          maxLength={10}
          placeholder="98XXXXXXXX"
          value={form.phone}
          onChange={update('phone')}
          autoComplete="tel-national"
          className={field(Boolean(errors.phone) || phoneLooksWrong)}
          {...a11y('phone')}
        />
        {errorText('phone')}
      </label>
      <label className="block sm:col-span-2">
        <span className="label text-ink/65">Message (optional)</span>
        <textarea
          rows={3}
          value={form.message}
          onChange={update('message')}
          placeholder="Preferred batch timing, subjects, questions…"
          className={field(false)}
        />
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-ink/55">Sends your enquiry to us on WhatsApp. We reply the same day.</p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-purple px-6 py-3 font-display text-[15px] font-normal text-white transition-colors hover:bg-plum"
        >
          <Send size={16} strokeWidth={1.5} aria-hidden="true" />
          Send enquiry
        </button>
      </div>
    </form>
  )
}
