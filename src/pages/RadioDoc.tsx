import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'

const radioGroupProps: PropDef[] = [
  {
    name: 'value',
    type: 'string',
    description: 'The controlled value of the selected radio item.',
  },
  {
    name: 'onValueChange',
    type: '(value: string) => void',
    description: 'Callback fired when the selected value changes.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'When true, prevents the user from interacting with any radio item in the group.',
  },
  {
    name: 'name',
    type: 'string',
    description: 'The name of the radio group used when submitting an HTML form.',
  },
  {
    name: 'orientation',
    type: '"horizontal" | "vertical"',
    default: '"vertical"',
    description: 'The axis the radio group items are aligned along, affecting keyboard navigation direction.',
  },
]

const radioGroupItemProps: PropDef[] = [
  {
    name: 'value',
    type: 'string',
    required: true,
    description: 'The unique value of the radio item.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'When true, prevents the user from interacting with this specific radio item.',
  },
]

const usageCode = `import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

function ThemeSelector() {
  const [theme, setTheme] = React.useState('system')

  return (
    <RadioGroup value={theme} onValueChange={setTheme}>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="light" id="theme-light" />
        <label htmlFor="theme-light" className="text-sm text-m3-on-surface cursor-pointer">
          Light
        </label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="dark" id="theme-dark" />
        <label htmlFor="theme-dark" className="text-sm text-m3-on-surface cursor-pointer">
          Dark
        </label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="system" id="theme-system" />
        <label htmlFor="theme-system" className="text-sm text-m3-on-surface cursor-pointer">
          System
        </label>
      </div>
    </RadioGroup>
  )
}`

export default function RadioDoc() {
  const [selected, setSelected] = React.useState('option-2')

  return (
    <div className="space-y-10">
      <PageHeader
        title="Radio Group"
        description="Radio groups allow users to select a single option from a set of mutually exclusive choices. They follow the Material 3 selection control pattern."
        status="stable"
      />

      {/* Default radio group */}
      <Section title="Variants" description="A radio group with three labeled options. Only one can be selected at a time.">
        <ComponentPreview title="Default">
          <RadioGroup value={selected} onValueChange={setSelected}>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="option-1" id="radio-option-1" />
              <label htmlFor="radio-option-1" className="text-sm text-m3-on-surface cursor-pointer">
                Option one
              </label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="option-2" id="radio-option-2" />
              <label htmlFor="radio-option-2" className="text-sm text-m3-on-surface cursor-pointer">
                Option two
              </label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="option-3" id="radio-option-3" />
              <label htmlFor="radio-option-3" className="text-sm text-m3-on-surface cursor-pointer">
                Option three
              </label>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </Section>

      {/* Disabled state */}
      <Section title="Disabled" description="Radio groups and individual items can be disabled.">
        <ComponentPreview title="Disabled group">
          <RadioGroup defaultValue="disabled-1" disabled>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="disabled-1" id="radio-disabled-1" />
              <label htmlFor="radio-disabled-1" className="text-sm text-m3-on-surface-variant opacity-38 cursor-not-allowed">
                Selected but disabled
              </label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="disabled-2" id="radio-disabled-2" />
              <label htmlFor="radio-disabled-2" className="text-sm text-m3-on-surface-variant opacity-38 cursor-not-allowed">
                Disabled option
              </label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="disabled-3" id="radio-disabled-3" />
              <label htmlFor="radio-disabled-3" className="text-sm text-m3-on-surface-variant opacity-38 cursor-not-allowed">
                Disabled option
              </label>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </Section>

      {/* With labels */}
      <Section title="With Labels" description="Labels are associated with radio items using htmlFor for proper accessibility.">
        <ComponentPreview title="Labeled options">
          <RadioGroup defaultValue="email">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="email" id="notif-email" />
              <label htmlFor="notif-email" className="text-sm text-m3-on-surface cursor-pointer">
                Email notifications
              </label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="sms" id="notif-sms" />
              <label htmlFor="notif-sms" className="text-sm text-m3-on-surface cursor-pointer">
                SMS notifications
              </label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="push" id="notif-push" />
              <label htmlFor="notif-push" className="text-sm text-m3-on-surface cursor-pointer">
                Push notifications
              </label>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </Section>

      {/* Usage */}
      <Section title="Usage" description="Basic usage with controlled state and label association.">
        <CodeBlock code={usageCode} />
      </Section>

      {/* RadioGroup Props */}
      <Section title="API Reference: RadioGroup">
        <PropsTable props={radioGroupProps} />
      </Section>

      {/* RadioGroupItem Props */}
      <Section title="API Reference: RadioGroupItem">
        <PropsTable props={radioGroupItemProps} />
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'Built on Radix UI RadioGroup, using role="radiogroup" on the container and role="radio" on each item with proper aria-checked states.',
            'Arrow keys (Up/Down or Left/Right depending on orientation) navigate between radio items within the group.',
            'Space selects the currently focused radio item.',
            'Tab moves focus into the group (to the selected item, or the first item if none is selected) and out of it. It does not cycle through individual items.',
            'Associate a visible label with each radio item using the htmlFor attribute on the label matching the item id.',
            'Wrap the radio group in a fieldset with a legend to provide group-level context for screen readers.',
          ]}
        />
      </Section>

      {/* Responsive behavior */}
      <Section
        title="Responsive Behavior"
        description="Guidelines for radio group layouts across screen sizes."
      >
        <div className="rounded-m3-md border border-m3-outline-variant p-4 space-y-3">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-m3-on-surface">Touch targets</h4>
            <p className="text-sm text-m3-on-surface-variant">
              Each radio item maintains a minimum 48x48dp touch target area on mobile devices.
              The vertical gap between items in the group ensures targets do not overlap.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-m3-on-surface">Orientation</h4>
            <p className="text-sm text-m3-on-surface-variant">
              Use vertical orientation (default) on narrow viewports to stack options. On wider
              layouts, set orientation to horizontal with flex-row and gap-6 to display options
              inline when there are three or fewer short-labeled choices.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-m3-on-surface">Scrollable groups</h4>
            <p className="text-sm text-m3-on-surface-variant">
              For radio groups with many options, consider wrapping in a scrollable container
              with a fixed max-height on mobile. Always ensure the selected option is scrolled
              into view on mount.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
