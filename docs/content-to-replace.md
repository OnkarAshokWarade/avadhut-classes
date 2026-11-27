# Content to replace

The site uses real brand facts from the brand guide (name, tagline, promises, address, phone, standards, logo, colours, fonts and tone of voice). Everything below is **placeholder content** to be replaced with real details. Each item is marked `PLACEHOLDER` in the file listed.

| What | File | Notes |
|---|---|---|
| Email address | `src/data/site.ts` | Currently `info@avadhutclasses.in` (made up) |
| Centre timings | `src/data/site.ts` | Mon–Sat and Sunday hours |
| Admissions banner text | `src/data/home.ts` | "ADMISSIONS OPEN · STD 5TH – 10TH": update each year |
| Quick facts (batch size 25, weekly tests, 1:1 mentoring) | `src/data/home.ts` | Confirm the numbers |
| Supporting reasons ("A routine that works" and the rest) | `src/data/home.ts` | |
| Parent and student testimonials | `src/data/home.ts` | Use real quotes, shared with consent |
| Teacher names, subjects and experience | `src/data/about.ts` | Shown as `[Teacher name]`; add photos later if you like |
| Course names, subjects, batch timings and inclusions | `src/data/courses.ts` | Foundation (5–7), Concept Builder (8–9), Board Ready (10) |
| Boards taught (State Board / CBSE) | `src/data/courses.ts`, `src/data/admissions.ts` | |
| Weekly routine | `src/data/courses.ts` | |
| Progress stories and marks | `src/data/results.ts` | Use real stories, with consent |
| Admission steps, documents and FAQ answers | `src/data/admissions.ts` | Including the free demo class and the fees answer |
| Photos | `public/assets/photos/` | The brand guide calls these "mood references only": replace them with Avadhut's own classroom photos |
| Social post images | `public/assets/social/` | Sample posts from the brand guide; swap in real posts |

The enquiry form has no backend: it opens WhatsApp to 073853 22009 with the details filled in. To collect enquiries another way, change `handleSubmit` in `src/components/ui/EnquiryForm.tsx`.
