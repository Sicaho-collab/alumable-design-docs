import type React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export const Section: React.FC<SectionProps> = ({
  title,
  description,
  children,
  className,
}) => (
  <section className={cn('space-y-4', className)}>
    <div>
      <h2 className="text-xl font-medium text-m3-on-surface">{title}</h2>
      {description && (
        <p className="text-sm text-m3-on-surface-variant mt-1">{description}</p>
      )}
    </div>
    {children}
  </section>
)
