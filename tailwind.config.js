/**
 * Tailwind design tokens. Every colour value is taken from the brand guidelines PDF
 * (pages 15–16) and exposed through CSS variables defined in src/styles/tokens.css.
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: 'rgb(var(--c-purple) / <alpha-value>)', // Avadhut Purple #7F2786
        blue: 'rgb(var(--c-blue) / <alpha-value>)', // Classes Blue #1381C0
        yellow: 'rgb(var(--c-yellow) / <alpha-value>)', // Foundation Yellow #FEBE23
        plum: 'rgb(var(--c-plum) / <alpha-value>)', // Deep Plum #3B0F40
        deepblue: 'rgb(var(--c-deepblue) / <alpha-value>)', // Deep Blue #0E6699
        ink: 'rgb(var(--c-ink) / <alpha-value>)', // Ink #1C1A1E
        lavender: 'rgb(var(--c-lavender) / <alpha-value>)', // Lavender #F6EFF7
        sky: 'rgb(var(--c-sky) / <alpha-value>)', // Sky #EAF3FA
        chalk: 'rgb(var(--c-chalk) / <alpha-value>)', // Chalk #FBF9F6
        warn: 'rgb(var(--c-warn) / <alpha-value>)', // functional only — see docs/open-questions.md #4
      },
      fontFamily: {
        // p18: Poppins = headlines + all Marathi; Inter = text; Lora Italic = one accent per layout
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Lora', 'Georgia', 'serif'],
      },
      fontWeight: {
        // p18: "Use weights between Light and SemiBold; we never use Bold or Black."
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '600',
        extrabold: '600',
        black: '600',
      },
      fontSize: {
        // p19 type hierarchy (px size / line height)
        display: ['60px', { lineHeight: '68px' }],
        heading: ['34px', { lineHeight: '42px' }],
        subhead: ['22px', { lineHeight: '30px' }],
        body: ['17px', { lineHeight: '28px' }],
        label: ['12px', { lineHeight: '16px', letterSpacing: '0.22em' }],
        quote: ['32px', { lineHeight: '40px' }],
      },
      maxWidth: {
        page: '1200px',
      },
    },
  },
  plugins: [],
}
