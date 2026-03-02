import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'

const checkboxProps: PropDef[] = [
  {
    name: 'checked',
    type: 'boolean | "indeterminate"',
    default: 'false',
    description: 'The controlled checked state of the checkbox.',
  },
  {
    name: 'onCheckedChange',
    type: '(checked: boolean | "indeterminate") => void',
    description: 'Callback fired when the checked state changes.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'When true, prevents the user from interacting with the checkbox.',
  },
  {
    name: 'required',
    type: 'boolean',
    default: 'false',
    description: 'When true, indicates the checkbox must be checked for form submission.',
  },
  {
    name: 'name',
    type: 'string',
    description: 'The name of the checkbox used when submitting an HTML form.',
  },
]

const usageCode = `import { Checkbox } from '@/components/ui/checkbox'

function NotificationSettings() {
  const [emailNotifs, setEmailNotifs] = React.useState(true)

  return (
    <div className="flex items-center gap-3">
      <Checkbox
        id="email-notifs"
        checked={emailNotifs}
        onCheckedChange={(checked) => setEmailNotifs(checked as boolean)}
      />
      <label
        htmlFor="email-notifs"
        className="text-sm text-m3-on-surface cursor-pointer"
      >
        Enable email notifications
      </label>
    </div>
  )
}`

export default function CheckboxDoc() {
  const [checked, setChecked] = React.useState(false)
  const [indeterminate, setIndeterminate] = React.useState<
    boolean | 'indeterminate'
  >('indeterminate')

  return (
    <div className="space-y-10">
      <PageHeader
        title="Checkbox"
        description="Checkboxes allow users to select one or more items from a set, or to turn an option on or off. They follow the Material 3 selection control pattern."
        status="stable"
      />

      {/* Variants */}
      <Section title="Variants" description="Checkboxes support checked, unchecked, indeterminate, and disabled states.">
        <ComponentPreview title="States">
          <div className="flex items-center gap-3">
            <Checkbox id="unchecked-demo" />
            <label htmlFor="unchecked-demo" className="text-sm text-m3-on-surface cursor-pointer">
              Unchecked
            </label>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              id="checked-demo"
              checked={checked}
              onCheckedChange={(v) => setChecked(v as boolean)}
              defaultChecked
            />
            <label htmlFor="checked-demo" className="text-sm text-m3-on-surface cursor-pointer">
              Checked
            </label>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              id="indeterminate-demo"
              checked={indeterminate}
              onCheckedChange={(v) => setIndeterminate(v)}
            />
            <label htmlFor="indeterminate-demo" className="text-sm text-m3-on-surface cursor-pointer">
              Indeterminate
            </label>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox id="disabled-demo" disabled />
            <label htmlFor="disabled-demo" className="text-sm text-m3-on-surface-variant opacity-38 cursor-not-allowed">
              Disabled
            </label>
          </div>
        </ComponentPreview>
      </Section>

      {/* With label */}
      <Section title="With Label" description="Use the htmlFor attribute on the label to associate it with the checkbox for proper accessibility.">
        <ComponentPreview title="Label association">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm text-m3-on-surface cursor-pointer">
                I agree to the terms and conditions
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="newsletter" defaultChecked />
              <label htmlFor="newsletter" className="text-sm text-m3-on-surface cursor-pointer">
                Subscribe to newsletter
              </label>
            </div>
          </div>
        </ComponentPreview>
      </Section>

      {/* Usage */}
      <Section title="Usage" description="Basic usage with controlled state and label association.">
        <CodeBlock code={usageCode} />
      </Section>

      {/* Props */}
      <Section title="API Reference">
        <PropsTable props={checkboxProps} />
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'Built on Radix UI Checkbox, which uses the native aria-checked attribute to convey checked, unchecked, and indeterminate states to assistive technology.',
            'Press Space to toggle the checkbox when focused.',
            'Associate a visible label with the checkbox using the htmlFor attribute on the label element matching the checkbox id.',
            'The disabled state is conveyed to screen readers automatically and removes the element from the tab order.',
            'When used in a group, wrap with fieldset and legend for screen reader context.',
          ]}
        />
      </Section>

      {/* Responsive behavior */}
      <Section
        title="Responsive Behavior"
        description="Guidelines for checkbox layouts across screen sizes."
      >
        <div className="rounded-m3-md border border-m3-outline-variant p-4 space-y-3">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-m3-on-surface">Touch targets</h4>
            <p className="text-sm text-m3-on-surface-variant">
              The checkbox includes a minimum 48x48dp touch target area on mobile to meet M3
              accessibility guidelines, even though the visual indicator is 18x18dp. No additional
              padding is needed on touch devices.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-m3-on-surface">Stacked vs. inline</h4>
            <p className="text-sm text-m3-on-surface-variant">
              On narrow viewports (below 640px), checkbox groups should stack vertically using a
              flex-col layout. On wider screens, they can be displayed inline with flex-row and
              appropriate gap spacing.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-m3-on-surface">Label wrapping</h4>
            <p className="text-sm text-m3-on-surface-variant">
              Long labels will wrap naturally alongside the checkbox. The checkbox remains aligned to
              the top of the first line of text using items-start when labels may span multiple lines.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
