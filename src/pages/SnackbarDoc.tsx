import React from 'react'
import { Snackbar } from '@/components/ui/snackbar'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'

const snackbarProps: PropDef[] = [
  {
    name: 'message',
    type: 'string',
    required: true,
    description: 'The text content displayed inside the snackbar.',
  },
  {
    name: 'action',
    type: 'string',
    default: '—',
    description: 'Label for the optional action button rendered beside the message.',
  },
  {
    name: 'onAction',
    type: '() => void',
    default: '—',
    description: 'Callback fired when the action button is clicked.',
  },
  {
    name: 'onDismiss',
    type: '() => void',
    default: '—',
    description: 'Callback fired when the dismiss (close) button is clicked. Passing this prop renders the dismiss icon.',
  },
  {
    name: 'open',
    type: 'boolean',
    default: 'true',
    description: 'Controls the visibility of the snackbar. When false the component is unmounted.',
  },
]

const usageCode = `import { Snackbar } from '@/components/ui/snackbar'

{/* Basic snackbar */}
<Snackbar message="File has been deleted" />

{/* With action */}
<Snackbar
  message="File has been deleted"
  action="Undo"
  onAction={() => console.log('undo')}
/>

{/* With dismiss */}
<Snackbar
  message="Connection restored"
  onDismiss={() => setOpen(false)}
  open={open}
/>`

function SnackbarDemo() {
  const [basicOpen, setBasicOpen] = React.useState(false)
  const [actionOpen, setActionOpen] = React.useState(false)
  const [dismissOpen, setDismissOpen] = React.useState(false)

  return (
    <div className="space-y-6 w-full">
      {/* Basic */}
      <div className="space-y-3">
        <Button onClick={() => setBasicOpen((o) => !o)}>
          {basicOpen ? 'Hide' : 'Show'} basic snackbar
        </Button>
        <Snackbar message="Item archived" open={basicOpen} />
      </div>

      {/* With action */}
      <div className="space-y-3">
        <Button onClick={() => setActionOpen((o) => !o)}>
          {actionOpen ? 'Hide' : 'Show'} snackbar with action
        </Button>
        <Snackbar
          message="File has been deleted"
          action="Undo"
          onAction={() => setActionOpen(false)}
          open={actionOpen}
        />
      </div>

      {/* With dismiss */}
      <div className="space-y-3">
        <Button onClick={() => setDismissOpen(true)}>
          Show snackbar with dismiss
        </Button>
        <Snackbar
          message="Connection restored"
          onDismiss={() => setDismissOpen(false)}
          open={dismissOpen}
        />
      </div>
    </div>
  )
}

export default function SnackbarDoc() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Snackbar"
        description="Snackbars provide brief messages about app processes at the bottom of the screen. They can include an optional action and dismiss button."
        status="stable"
      />

      {/* --- Variants --- */}
      <Section
        title="Variants"
        description="Toggle each snackbar variant with the buttons below."
      >
        <ComponentPreview title="Interactive demo" className="flex-col items-start">
          <SnackbarDemo />
        </ComponentPreview>
      </Section>

      {/* --- Static examples --- */}
      <Section
        title="Static examples"
        description="Static renderings of the three snackbar configurations."
      >
        <ComponentPreview title="Basic">
          <Snackbar message="Item archived" />
        </ComponentPreview>

        <ComponentPreview title="With action button">
          <Snackbar
            message="File has been deleted"
            action="Undo"
            onAction={() => {}}
          />
        </ComponentPreview>

        <ComponentPreview title="With dismiss">
          <Snackbar
            message="Connection restored"
            onDismiss={() => {}}
          />
        </ComponentPreview>
      </Section>

      {/* --- Usage --- */}
      <Section title="Usage">
        <CodeBlock code={usageCode} />
      </Section>

      {/* --- Props --- */}
      <Section title="API Reference">
        <PropsTable props={snackbarProps} />
      </Section>

      {/* --- Accessibility --- */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'The snackbar uses role="status" and aria-live="polite" so screen readers announce the message without interrupting the current task.',
            'The dismiss button includes an aria-label of "Dismiss" for clear intent.',
            'Avoid stacking multiple snackbars simultaneously; queue them so only one is visible at a time.',
            'Action buttons use semantic <button> elements and are reachable via keyboard tab order.',
            'Snackbars should auto-dismiss after a reasonable duration (4-10 seconds) to avoid blocking content for keyboard-only users.',
          ]}
        />
      </Section>

      {/* --- Responsive --- */}
      <Section
        title="Responsive behavior"
        description="Guidelines for snackbar placement and sizing across viewports."
      >
        <div className="prose prose-sm max-w-none text-m3-on-surface-variant">
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li>
              On mobile, the snackbar stretches to full width with horizontal margins of 16px, positioned at the bottom of the viewport.
            </li>
            <li>
              On tablet and larger screens, the snackbar has a minimum width of 288px and a maximum width of 560px, aligned to the leading edge at the bottom.
            </li>
            <li>
              When a FAB is present, the snackbar should appear above it to avoid overlap.
            </li>
            <li>
              The text content wraps to a second line if it exceeds the maximum width rather than truncating.
            </li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
