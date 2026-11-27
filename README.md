# Avadhut Classes website

The website for **Avadhut Classes**, a coaching institute in Market Yard, Baramati, for students of Std 5th to 10th.

The design follows the Avadhut Classes brand guide: the logo, colours (Avadhut Purple, Classes Blue, Foundation Yellow, Deep Plum…), fonts (Poppins, Inter, Lora Italic), graphic elements (rung markers, the yellow foundation line, the hairline ladder, scholar dots) and tone of voice. Much of the content is still placeholder. See [docs/content-to-replace.md](docs/content-to-replace.md).

Built with React 18, Vite, TypeScript, Tailwind CSS, React Router and Framer Motion.

## Pages

| Route | Page |
|---|---|
| `/` | Home: hero, quick facts, why Avadhut, courses, how we teach, inside Avadhut, testimonials, map, call to action |
| `/about` | About: who we are, mission, story, values, teachers |
| `/courses` | Courses: Foundation (Std 5–7), Concept Builder (Std 8–9), Board Ready (Std 10), weekly routine |
| `/results` | Results: progress stories, celebrations, study tips, social feed |
| `/admissions` | Admissions: steps, enquiry form, documents, FAQ |
| `/contact` | Contact: address, phone, email, timings, map, enquiry form |

On phones, a Call / WhatsApp bar stays pinned to the bottom of the screen.

## Run it locally

Requires Node.js 18 or newer.

```powershell
npm install
```

```powershell
npm run dev
```

Then open http://localhost:5173.

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Deploy

`npm run build` outputs a static site in `dist/`. Because it uses client-side routing, the host must send unknown paths to `index.html`:

- **Netlify:** add `public/_redirects` containing `/*  /index.html  200`.
- **Vercel:** add `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`.

## Editing content

All text lives in typed data files in `src/data/`, separate from the page layouts:

| File | Content |
|---|---|
| `site.ts` | Name, tagline, address, phone, email, timings, menu |
| `home.ts` | Hero, quick facts, reasons to choose us, teaching steps, testimonials |
| `about.ts` | About text, mission, story, values, teachers |
| `courses.ts` | Courses, subjects, batch timings, weekly routine |
| `results.ts` | Progress stories, study tips, social posts |
| `admissions.ts` | Admission steps, documents, FAQ, Marathi notice |

Images live in `public/assets/`: logos in `logos/`, photos in `photos/` and social posts in `social/`. To replace an image, overwrite the file with the same name, or point the data file at a new one.

## Project structure

```
src/
  data/                Site content (edit here)
  pages/               Home, About, Courses, Results, Admissions, Contact, NotFound
  components/brand/    Logo, RungMarker, FoundationLine, RungPattern, ScholarDot, BrandIcon
  components/layout/   Navbar, Footer, MobileActionBar, RootLayout
  components/ui/       Buttons, SectionHeading, PageHero, CtaBand, EnquiryForm, Reveal, Toast
  styles/              Brand colour tokens (CSS variables) and fonts
tailwind.config.js     Brand colours, fonts, weights and type scale as Tailwind tokens
docs/                  Brand-guide inventory, open questions, content to replace
```

## Brand rules the code enforces

- **Fonts:** headings use Poppins, body text uses Inter, and Lora Italic is kept to one short accent per section. Weights stay between Light and SemiBold: `font-bold` maps to 600, and `<strong>` renders Medium.
- **Marathi:** text marked `lang="mr"` is set in Poppins.
- **Colour:** never yellow text on white; small blue text uses Deep Blue.
- **Tone of voice:** copy follows the brand voice, with no marks or rank guarantees and no fear-based lines.
- **Motion:** respects `prefers-reduced-motion`.
