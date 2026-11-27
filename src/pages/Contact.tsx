import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { CallButton, WhatsAppButton } from '../components/ui/Buttons'
import { EnquiryForm } from '../components/ui/EnquiryForm'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { site } from '../data/site'

export default function Contact() {
  const details = [
    { icon: MapPin, label: 'Address', content: <address className="not-italic">{site.address}</address> },
    {
      icon: Phone,
      label: 'Phone',
      content: (
        <a href={site.phoneHref} className="link">
          {site.phone}
        </a>
      ),
    },
    {
      icon: Mail,
      label: 'Email',
      content: (
        <a href={`mailto:${site.email}`} className="link">
          {site.email}
        </a>
      ),
    },
    {
      icon: Clock,
      label: 'Centre timings',
      content: (
        <ul>
          {site.hours.map((h) => (
            <li key={h.days}>
              {h.days}: {h.time}
            </li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <>
      <PageHero
        label="CONTACT"
        title={
          <>
            Come and see us at <span className="font-medium text-yellow">Market Yard.</span>
          </>
        }
        text="Visit the centre, call us or send a message. Parents are always welcome to meet the teachers."
      />

      <section aria-labelledby="details-title" className="bg-white py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="details-title" label="GET IN TOUCH" title="We’re here to help." />
            <ul className="mt-10 space-y-7">
              {details.map((d, i) => (
                <Reveal as="li" key={d.label} delay={i * 0.05} className="flex gap-4">
                  <d.icon size={22} strokeWidth={1.5} className="mt-1 shrink-0 text-purple" aria-hidden="true" />
                  <div>
                    <p className="label text-ink/55">{d.label}</p>
                    <div className="mt-1.5 text-ink/85">{d.content}</div>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-10 flex flex-wrap gap-3">
              <CallButton variant="primary" />
              <WhatsAppButton />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <iframe
              title="Map showing Avadhut Classes, Market Yard, Baramati"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-square w-full border border-ink/10 lg:aspect-auto lg:h-full lg:min-h-[480px]"
            />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="message-title" className="bg-lavender py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            id="message-title"
            label="SEND A MESSAGE"
            title="Ask us anything about admissions."
            text="Batch timings, subjects or fees: we usually reply the same day."
          />
          <Reveal delay={0.1} className="bg-white p-6 sm:p-8">
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
