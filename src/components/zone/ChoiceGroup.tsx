interface ChoiceGroupProps<T extends string | number> {
  label: string
  options: { label: string; value: T }[]
  value: T
  onChange: (value: T) => void
}

/** A row of toggle buttons where one option is selected (e.g. timer length, subject). */
export function ChoiceGroup<T extends string | number>({ label, options, value, onChange }: ChoiceGroupProps<T>) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const selected = o.value === value
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(o.value)}
            className={`min-h-[44px] border px-4 font-display text-[14px] font-normal transition-colors ${
              selected ? 'border-purple bg-purple text-white' : 'border-ink/15 bg-white text-plum hover:border-purple'
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}
