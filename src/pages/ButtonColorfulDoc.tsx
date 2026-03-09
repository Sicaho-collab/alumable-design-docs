import { useState } from 'react'
import { ButtonColorful } from '@/components/ui/button-colorful'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'

const props: PropDef[] = [
  {
    name: 'label',
    type: 'string',
    default: "'Explore Components'",
    description: 'The text displayed inside the button.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the button. Shows grey text and grey stroke with transparent background.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional classes applied to the outer wrapper.',
  },
]

const usageCode = `import { ButtonColorful } from '@/components/ui/button-colorful'

export function Example() {
  return (
    <div className="flex items-center gap-4">
      <ButtonColorful label="Get Started" />
      <ButtonColorful label="Disabled" disabled />
      <ButtonColorful label="Submit" />
    </div>
  )
}`

const statesCode = `// 3 visual states:

// 1. Disabled — grey text, grey stroke, transparent bg
<ButtonColorful label="Disabled" disabled />

// 2. Enabled — gradient text, gradient stroke, transparent bg
<ButtonColorful label="Enabled" />

// 3. Hover — gradient fill background, white text
// (hover over the enabled button to see this state)`

export default function ButtonColorfulDoc() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="space-y-10">
      <PageHeader
        title="Button Colorful"
        description="A gradient-accented CTA button with three visual states: disabled (grey), enabled (gradient stroke + text), and hover (gradient fill + white text). Ideal for primary call-to-action moments."
        status="stable"
      />

      {/* ── States ── */}
      <Section
        title="Visual States"
        description="The button transitions through three distinct states based on interaction."
      >
        <ComponentPreview title="Disabled → Enabled → Hover">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <ButtonColorful label="Disabled" disabled />
              <span className="text-xs text-m3-on-surface-variant">Disabled</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ButtonColorful label="Get Started" />
              <span className="text-xs text-m3-on-surface-variant">Enabled (hover me)</span>
            </div>
          </div>
        </ComponentPreview>
        <CodeBlock code={statesCode} />
      </Section>

      {/* ── Interactive Demo ── */}
      <Section
        title="Interactive Demo"
        description="Toggle the button between disabled and enabled to see the transition."
      >
        <ComponentPreview title="Toggle state">
          <div className="flex items-center gap-4">
            <ButtonColorful
              label="Get Started"
              disabled={!enabled}
              onClick={() => alert('Clicked!')}
            />
            <label className="flex items-center gap-2 text-sm text-m3-on-surface cursor-pointer">
              <input
                type="checkbox"
                checked={enabled}
                onChange={e => setEnabled(e.target.checked)}
                className="accent-purple-500"
              />
              Enable button
            </label>
          </div>
        </ComponentPreview>
      </Section>

      {/* ── Custom Labels ── */}
      <Section
        title="Custom Labels"
        description="Pass any label text to customize the button."
      >
        <ComponentPreview title="Different labels">
          <div className="flex flex-wrap items-center gap-4">
            <ButtonColorful label="Get Started" />
            <ButtonColorful label="Submit" />
            <ButtonColorful label="Explore" />
            <ButtonColorful label="Try Now" />
          </div>
        </ComponentPreview>
      </Section>

      {/* ── Usage ── */}
      <Section title="Usage">
        <CodeBlock code={usageCode} />
      </Section>

      {/* ── Props ── */}
      <Section title="API Reference">
        <PropsTable props={props} />
      </Section>

      {/* ── Accessibility ── */}
      <AccessibilityNote
        items={[
          'Uses native <button> element for full keyboard support.',
          'Disabled state prevents click and shows cursor-not-allowed.',
          'Gradient text uses bg-clip-text which is purely visual — screen readers read the label text.',
          'ArrowUpRight icon is decorative and does not need alt text.',
        ]}
      />
    </div>
  )
}
