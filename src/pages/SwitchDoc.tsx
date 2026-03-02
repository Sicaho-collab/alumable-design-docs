import React from 'react'
import { Switch } from '@/components/ui/switch'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'

const switchProps: PropDef[] = [
  {
    name: 'checked',
    type: 'boolean',
    default: 'false',
    description: 'The controlled checked state of the switch.',
  },
  {
    name: 'onCheckedChange',
    type: '(checked: boolean) => void',
    description: 'Callback fired when the checked state changes.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'When true, prevents the user from interacting with the switch.',
  },
  {
    name: 'name',
    type: 'string',
    description: 'The name of the switch used when submitting an HTML form.',
  },
]

const usageCode = `import { Switch } from '@/components/ui/switch'

function DarkModeToggle() {
  const [darkMode, setDarkMode] = React.useState(false)

  return (
    <div className="flex items-center justify-between gap-4">
      <label
        htmlFor="dark-mode"
        className="text-sm text-m3-on-surface cursor-pointer"
      >
        Dark mode
      </label>
      <Switch
        id="dark-mode"
        checked={darkMode}
        onCheckedChange={setDarkMode}
      />
    </div>
  )
}`

export default function SwitchDoc() {
  const [enabled, setEnabled] = React.useState(true)

  return (
    <div className="space-y-10">
      <PageHeader
        title="Switch"
        description="Switches toggle the state of a single setting on or off. They are the preferred way to adjust settings on mobile and follow the Material 3 selection control pattern."
        status="stable"
      />

      {/* States */}
      <Section title="Variants" description="Switches can be on, off, or disabled.">
        <ComponentPreview title="States">
          <div className="flex items-center gap-4">
            <label htmlFor="switch-off" className="text-sm text-m3-on-surface cursor-pointer">
              Off
            </label>
            <Switch id="switch-off" />
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="switch-on" className="text-sm text-m3-on-surface cursor-pointer">
              On
            </label>
            <Switch id="switch-on" defaultChecked />
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="switch-disabled-off" className="text-sm text-m3-on-surface-variant opacity-38 cursor-not-allowed">
              Disabled off
            </label>
            <Switch id="switch-disabled-off" disabled />
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="switch-disabled-on" className="text-sm text-m3-on-surface-variant opacity-38 cursor-not-allowed">
              Disabled on
            </label>
            <Switch id="switch-disabled-on" disabled defaultChecked />
          </div>
        </ComponentPreview>
      </Section>

      {/* With label using flexbox */}
      <Section title="With Label" description="Use a flexbox row with justify-between to place the label and switch on opposite ends, a common pattern for settings screens.">
        <ComponentPreview title="Settings pattern" className="flex-col !items-stretch">
          <div className="flex items-center justify-between gap-4 py-2">
            <label htmlFor="setting-wifi" className="text-sm text-m3-on-surface cursor-pointer">
              Wi-Fi
            </label>
            <Switch
              id="setting-wifi"
              checked={enabled}
              onCheckedChange={setEnabled}
            />
          </div>
          <div className="border-t border-m3-outline-variant" />
          <div className="flex items-center justify-between gap-4 py-2">
            <label htmlFor="setting-bluetooth" className="text-sm text-m3-on-surface cursor-pointer">
              Bluetooth
            </label>
            <Switch id="setting-bluetooth" />
          </div>
          <div className="border-t border-m3-outline-variant" />
          <div className="flex items-center justify-between gap-4 py-2">
            <label htmlFor="setting-airplane" className="text-sm text-m3-on-surface cursor-pointer">
              Airplane mode
            </label>
            <Switch id="setting-airplane" />
          </div>
        </ComponentPreview>
      </Section>

      {/* Usage */}
      <Section title="Usage" description="Basic usage with controlled state and a label.">
        <CodeBlock code={usageCode} />
      </Section>

      {/* Props */}
      <Section title="API Reference">
        <PropsTable props={switchProps} />
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'Built on Radix UI Switch, which applies role="switch" and the aria-checked attribute to communicate the on/off state to assistive technology.',
            'Press Space or Enter to toggle the switch when focused.',
            'Associate a visible label with the switch using the htmlFor attribute on the label matching the switch id.',
            'The disabled state is conveyed to screen readers automatically and removes the element from the tab order.',
            'Avoid using a switch for actions that require a confirmation step. Switches should take immediate effect.',
          ]}
        />
      </Section>

      {/* Responsive behavior */}
      <Section
        title="Responsive Behavior"
        description="Guidelines for switch layouts across screen sizes."
      >
        <div className="rounded-m3-md border border-m3-outline-variant p-4 space-y-3">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-m3-on-surface">Touch targets</h4>
            <p className="text-sm text-m3-on-surface-variant">
              The switch track is 52x32dp, which exceeds the minimum 48dp touch target
              requirement. The thumb transitions from 16dp (off) to 24dp (on) for a clear
              visual indicator of state.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-m3-on-surface">Settings list pattern</h4>
            <p className="text-sm text-m3-on-surface-variant">
              On all screen sizes, switches in a settings list should use a full-width row
              with the label on the leading side and the switch on the trailing side using
              justify-between. This ensures a consistent and predictable layout.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-m3-on-surface">Grouping</h4>
            <p className="text-sm text-m3-on-surface-variant">
              When displaying multiple switches in a settings screen, use thin dividers
              (border-m3-outline-variant) between rows for visual separation. On compact
              viewports, maintain 16dp horizontal padding for the list container.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
