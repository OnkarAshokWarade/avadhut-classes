# Open questions

Things the PDF does not answer. The site makes the conservative choice listed for each one; please confirm or correct.

| # | Question | What the site does for now |
|---|---|---|
| 1 | **Pantone values.** The PDF gives HEX, RGB and CMYK only. | Shows "Pantone: not specified in guidelines" on every swatch. No values invented. |
| 2 | **Dark mode.** The PDF never mentions a dark theme. | No light/dark toggle. Dark (Deep Plum) sections are used the way the PDF uses them (covers, statements). |
| 3 | **Motion guidelines.** None in the PDF. | Only gentle fade/rise reveals (≈0.5 s, ease-out) and soft page fades, matching "calm, never cluttered". Respects `prefers-reduced-motion`. No Motion page. |
| 4 | **The "avoid / never" red** (⊗ icons, AVOID and NEVER labels on p14, p21, p22) has no named colour. | Uses `#C0392B`-style red sampled visually as a functional warning colour only (token `--warn`), never as a brand colour. Please supply the official value. |
| 5 | **Grey text tones** (captions, descriptors) are not in the palette. | Uses Ink at reduced opacity (70% / 55%) rather than a new grey. |
| 6 | **Grid / spacing system.** The PDF shows layouts but no column count or spacing scale. | 12-column responsive container with generous white space; documented on the Layout section as "observed from the PDF", not as a rule. |
| 7 | **Logo files.** The PDF says "Always use the master artwork supplied with this guide." No vector master files are included. | Logos on the site and in Downloads are high-resolution transparent PNGs rendered from the PDF's vector artwork (2400 px wide). Please supply the SVG/EPS masters to replace them. |
| 8 | **Futura** (CLASSES and tagline in the logo) is commercial. | Not loaded — it only appears inside the logo artwork, which is shown as an image. |
| 9 | **Digits in Marathi text.** The PDF's text layer (p19, p23, p27) stores Devanagari digits (५, १०, ०७३८५३ २२००९), but the rendered PDF pages show Latin-style numerals (5, 10, 073853 22009). On the site, Poppins draws the stored Devanagari digits, so they look different from the PDF image. | **Resolved (confirmed by the client):** Marathi copy uses Devanagari digits (५, १०, ०७३८५३ २२००९). |
| 9b | **Marathi text extraction.** The PDF's text layer doubles some vowel signs (e.g. "उद्याा", "इयत्ताा", "नमस्काार"), a known ligature artefact. | Corrected to the spelling visible on the rendered pages ("उद्या", "इयत्ता", "नमस्कार", "च्या", "चाचण्या"). |
| 10 | **Photography.** The PDF says the photos are "Mood references only. Replace with Avadhut's own classroom photography before publishing." | Photos are shown only on the Photography section, clearly labelled as mood references, with that note. |
| 11 | **Website domain / email.** The card shows the placeholder "[email@avadhutclasses.in]". | Shown exactly as the placeholder; no email invented. |
