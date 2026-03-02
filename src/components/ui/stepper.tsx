import * as React from 'react'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

export interface Step {
  label: string
  description?: string
  optional?: boolean
}

export interface StepperProps {
  steps: Step[]
  activeStep: number
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export function Stepper({ steps, activeStep, orientation = 'horizontal', className }: StepperProps) {
  if (orientation === 'vertical') {
    return (
      <div className={cn('flex flex-col', className)}>
        {steps.map((step, i) => {
          const completed = i < activeStep
          const active = i === activeStep
          const isLast = i === steps.length - 1
          return (
            <div key={i} className="flex gap-4">
              {/* Indicator column */}
              <div className="flex flex-col items-center">
                <StepIndicator index={i} completed={completed} active={active} />
                {!isLast && (
                  <div className={cn('w-0.5 flex-1 mt-1 mb-1 min-h-[24px]', completed ? 'bg-m3-primary' : 'bg-m3-outline-variant')} />
                )}
              </div>
              {/* Content */}
              <div className={cn('pb-6', isLast && 'pb-0')}>
                <p className={cn('text-sm font-medium leading-none', active ? 'text-m3-primary' : completed ? 'text-m3-on-surface' : 'text-m3-on-surface-variant')}>
                  {step.label}
                  {step.optional && <span className="ml-1 text-xs font-normal text-m3-on-surface-variant">(Optional)</span>}
                </p>
                {step.description && (
                  <p className="mt-1 text-xs text-m3-on-surface-variant">{step.description}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn('flex items-center w-full', className)}>
      {steps.map((step, i) => {
        const completed = i < activeStep
        const active = i === activeStep
        const isLast = i === steps.length - 1
        return (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-1.5 shrink-0">
              <StepIndicator index={i} completed={completed} active={active} />
              <span className={cn('text-xs text-center max-w-[80px] leading-tight', active ? 'text-m3-primary font-medium' : completed ? 'text-m3-on-surface' : 'text-m3-on-surface-variant')}>
                {step.label}
                {step.optional && <span className="block text-[10px] font-normal text-m3-on-surface-variant">Optional</span>}
              </span>
            </div>
            {!isLast && (
              <div className={cn('flex-1 h-0.5 mx-2 mb-4', completed ? 'bg-m3-primary' : 'bg-m3-outline-variant')} />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

function StepIndicator({ index, completed, active }: { index: number; completed: boolean; active: boolean }) {
  return (
    <div
      className={cn(
        'size-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 shrink-0',
        completed && 'bg-m3-primary text-m3-on-primary',
        active && !completed && 'bg-m3-primary text-m3-on-primary ring-4 ring-m3-primary/20',
        !active && !completed && 'bg-m3-surface-container-high text-m3-on-surface-variant border border-m3-outline-variant'
      )}
      aria-current={active ? 'step' : undefined}
    >
      {completed ? <Check className="size-4" /> : index + 1}
    </div>
  )
}
