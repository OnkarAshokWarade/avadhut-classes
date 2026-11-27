// Brand icon style (brand guide p20): line icons on a 28 px grid, 1.5 px stroke, rounded ends, Purple or Deep Blue.
import { BarChart3, BookOpen, Clock, Lightbulb, Target, Users, type LucideIcon } from 'lucide-react'

const icons = {
  Subjects: BookOpen,
  Goals: Target,
  Schedule: Clock,
  Concepts: Lightbulb,
  Mentoring: Users,
  Progress: BarChart3,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof icons

export function BrandIcon({ name, tone = 'purple', className = '' }: { name: IconName; tone?: 'purple' | 'deepblue'; className?: string }) {
  const Icon = icons[name]
  return (
    <Icon
      aria-hidden="true"
      size={28}
      strokeWidth={1.5}
      absoluteStrokeWidth
      className={`${tone === 'purple' ? 'text-purple' : 'text-deepblue'} ${className}`}
    />
  )
}
