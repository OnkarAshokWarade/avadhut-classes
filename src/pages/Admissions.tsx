import { ChevronDown, FileText } from 'lucide-react'
import { CallButton, WhatsAppButton } from '../components/ui/Buttons'
import { AskQuestion } from '../components/ui/AskQuestion'
import { EnquiryForm } from '../components/ui/EnquiryForm'
import { ParentPlanner } from '../components/ui/ParentPlanner'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { admissionSteps, documents, faqs, marathiNotice } from '../data/admissions'

export default function Admissions() {
  return (
    <>
      <PageHero
        label="ADMISSIONS OPEN · STD 5TH – 10TH"
        title={
          <>
            Your pass to a <em className="font-accent italic text-yellow">brighter future.</em>
          </>
        }
        text="Four simple steps from first call to first class. Your step starts here."
      />

      <section aria-labelledby="steps-title" className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading id="steps-title" label="HOW TO JOIN" title="Four steps to your first class." />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((s, i) => (
              <Reveal as="li" key={s.number} delay={i * 0.06} className="border-t-2 border-purple pt-5">
                <span className="font-display text-[13px] font-medium text-purple">{s.number}</span>
                <h3 className="mt-2 text-[22px]">{s.title}</h3>
                <p className="mt-2 text-[15px] text-ink/70">{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <p lang="mr" className="mt-14 border-l-2 border-yellow bg-chalk px-6 py-5 font-display text-[16px] font-light text-plum">
              {marathiNotice}
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="planner-title" className="bg-chalk py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            id="planner-title"
            label="FOR PARENTS"
            title="Plan your child’s next step."
            text="Choose your child’s standard and what matters most to you. We’ll show how we help, and you can ask us on WhatsApp in one tap."
          />
          <Reveal delay={0.1} className="bg-white p-6 sm:p-8">
            <ParentPlanner />
          </Reveal>
        </div>
      </section>

      <section id="enquire" aria-labelledby="enquire-title" className="scroll-mt-24 bg-lavender py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              id="enquire-title"
              label="ENQUIRE NOW"
              title="Book a free demo class."
              text="Tell us about your child and we’ll call you back to fix a convenient time."
            />
            <Reveal className="mt-8 flex flex-wrap gap-3">
              <CallButton />
              <WhatsAppButton />
            </Reveal>
            <Reveal className="mt-10">
              <p className="label text-ink/60">Documents to bring</p>
              <ul className="mt-3 space-y-2.5">
                {documents.map((d) => (
                  <li key={d} className="flex gap-2.5 text-[15px] text-ink/80">
                    <FileText size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-deepblue" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="bg-white p-6 sm:p-8">
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="bg-white py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading id="faq-title" label="QUESTIONS PARENTS ASK" title="Frequently asked questions." />
          <div className="border-t border-ink/10">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-ink/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-[18px] font-normal text-plum [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0 text-purple transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-5 pr-8 text-ink/75">{f.a}</p>
              </details>
            ))}
            <AskQuestion />
          </div>
        </div>
      </section>
    </>
  )
}
