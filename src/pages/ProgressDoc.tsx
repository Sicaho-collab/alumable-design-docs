import React from 'react'
import { Progress } from '@/components/ui/progress'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'

const progressProps: PropDef[] = [
  {
    name: 'value',
    type: 'number',
    default: '0',
    description: 'The current progress value between 0 and 100.',
  },
  {
    name: 'variant',
    type: "'linear' | 'circular'",
    default: "'linear'",
    description: 'The visual style of the indicator. Linear renders a horizontal bar, circular renders an SVG ring.',
  },
  {
    name: 'indeterminate',
    type: 'boolean',
    default: 'false',
    description: 'When true the indicator animates continuously without a specific value to represent an unknown duration.',
  },
]

const usageCode = `import { Progress } from '@/components/ui/progress'

{/* Determinate linear */}
<Progress value={60} />

{/* Indeterminate linear */}
<Progress indeterminate />

{/* Determinate circular */}
<Progress variant="circular" value={75} />

{/* Indeterminate circular */}
<Progress variant="circular" indeterminate />`

function AnimatedProgress({ variant }: { variant?: 'linear' | 'circular' }) {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return <Progress variant={variant} value={value} />
}

export default function ProgressDoc() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Progress indicator"
        description="Progress indicators inform users about the status of ongoing processes such as loading, processing, or uploading. They can be determinate or indeterminate."
        status="stable"
      />

      {/* --- Linear --- */}
      <Section
        title="Linear"
        description="A horizontal bar that fills from left to right."
      >
        <ComponentPreview title="Determinate" className="flex-col items-stretch gap-6">
          <div className="space-y-2">
            <span className="text-xs text-m3-on-surface-variant">Animated 0 - 100</span>
            <AnimatedProgress variant="linear" />
          </div>
          <div className="space-y-2">
            <span className="text-xs text-m3-on-surface-variant">Static at 60%</span>
            <Progress value={60} />
          </div>
        </ComponentPreview>

        <ComponentPreview title="Indeterminate" className="flex-col items-stretch">
          <Progress indeterminate />
        </ComponentPreview>
      </Section>

      {/* --- Circular --- */}
      <Section
        title="Circular"
        description="A ring indicator suited for compact spaces or overlays."
      >
        <ComponentPreview title="Determinate">
          <AnimatedProgress variant="circular" />
          <Progress variant="circular" value={25} />
          <Progress variant="circular" value={50} />
          <Progress variant="circular" value={75} />
        </ComponentPreview>

        <ComponentPreview title="Indeterminate">
          <Progress variant="circular" indeterminate />
        </ComponentPreview>
      </Section>

      {/* --- Usage --- */}
      <Section title="Usage">
        <CodeBlock code={usageCode} />
      </Section>

      {/* --- Props --- */}
      <Section title="API Reference">
        <PropsTable props={progressProps} />
      </Section>

      {/* --- Accessibility --- */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'The component uses role="progressbar" with aria-valuenow, aria-valuemin, and aria-valuemax for screen reader support.',
            'Indeterminate variants omit aria-valuenow so assistive technology can announce the loading state without a specific percentage.',
            'Pair the indicator with a visible label or aria-label describing the operation (e.g. "Uploading file") for full context.',
            'The circular variant uses an inline SVG which inherits color from the parent for high contrast mode compatibility.',
          ]}
        />
      </Section>

      {/* --- Responsive --- */}
      <Section
        title="Responsive behavior"
        description="Guidelines for adapting progress indicators across screen sizes."
      >
        <div className="prose prose-sm max-w-none text-m3-on-surface-variant">
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li>
              Linear indicators span the full width of their container and scale naturally on all breakpoints.
            </li>
            <li>
              Circular indicators maintain a fixed 48px diameter. Use them in toolbars, cards, or compact layouts where horizontal space is limited.
            </li>
            <li>
              On mobile, prefer a single top-level linear indicator over multiple circular indicators to reduce visual noise.
            </li>
            <li>
              When used inside a button or card, ensure sufficient padding so the indicator does not clip at narrow widths.
            </li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
