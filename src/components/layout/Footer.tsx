import { Link } from 'react-router-dom'
import { nav, site } from '../../data/site'
import { Logo } from '../brand/Logo'
import { RungPattern } from '../brand/RungPattern'

/** Footer modelled on the brand guide's back cover: Deep Plum, reversed logo, italic sign-off, address. */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-plum pb-[calc(136px+env(safe-area-inset-bottom))] text-white lg:pb-20">
      <RungPattern className="pointer-events-none absolute -right-8 top-0 hidden h-full w-[140px] md:block lg:right-[6%]" rungs={7} />
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:pr-40">
        <div>
          <Logo variant="reversed" className="w-[210px]" />
          <p className="mt-8 font-accent text-[26px] italic text-yellow">{site.bigIdea}</p>
          <p className="mt-3 max-w-sm text-[15px] text-white/70">Quality coaching for {site.standards} students in Baramati.</p>
        </div>
        <nav aria-label="Footer">
          <p className="label text-white/50">Explore</p>
          <ul>
            {nav.map((n) => (
              <li key={n.path}>
                <Link to={n.path} className="flex min-h-[44px] items-center text-[15px] text-white/80 transition-colors hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="label text-white/50">Visit us</p>
          <address className="mt-4 text-[15px] not-italic leading-relaxed text-white/80">{site.address}</address>
          <a href={site.phoneHref} className="mt-2 inline-flex min-h-[44px] items-center text-[15px] text-white hover:underline">
            {site.phone}
          </a>
          <ul className="mt-4 space-y-1 text-[14px] text-white/65">
            {site.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span className="label">{site.tagline}</span>
          <span className="text-[13px]">
            © {new Date().getFullYear()} {site.name}, Baramati
          </span>
        </div>
      </div>
    </footer>
  )
}
