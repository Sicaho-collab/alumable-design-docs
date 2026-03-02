import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'

const dialogProps: PropDef[] = [
  {
    name: 'open',
    type: 'boolean',
    description: 'Controlled open state of the dialog. Use with onOpenChange for full control.',
  },
  {
    name: 'onOpenChange',
    type: '(open: boolean) => void',
    description: 'Callback fired when the dialog open state changes, including close via overlay click or Escape key.',
  },
  {
    name: 'defaultOpen',
    type: 'boolean',
    default: 'false',
    description: 'The initial open state when the dialog is uncontrolled.',
  },
  {
    name: 'modal',
    type: 'boolean',
    default: 'true',
    description: 'Whether the dialog behaves as a modal. When true, interaction with outside elements is blocked and a scrim overlay is rendered.',
  },
]

const dialogContentProps: PropDef[] = [
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes applied to the dialog content panel.',
  },
  {
    name: 'onEscapeKeyDown',
    type: '(event: KeyboardEvent) => void',
    description: 'Callback fired when the Escape key is pressed. Call event.preventDefault() to prevent closing.',
  },
  {
    name: 'onPointerDownOutside',
    type: '(event: PointerDownOutsideEvent) => void',
    description: 'Callback fired when a pointer event occurs outside the dialog. Call event.preventDefault() to prevent closing.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    required: true,
    description: 'The content rendered inside the dialog panel. Typically composed of DialogHeader, body content, and DialogFooter.',
  },
]

const basicUsageCode = `import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogFooter,
  DialogTitle, DialogDescription
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

function BasicDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="filled">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>
            A brief description that provides context for the
            dialog content and helps users understand the action.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-m3-on-surface-variant">
          Place your main dialog content here. This can include
          text, forms, or any other React components.
        </p>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button variant="text">Cancel</Button>
          </DialogTrigger>
          <Button variant="filled">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`

const confirmationUsageCode = `import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogFooter,
  DialogTitle, DialogDescription
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

function ConfirmDeleteDialog() {
  const [open, setOpen] = useState(false)

  const handleDelete = () => {
    // Perform delete operation
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outlined">Delete project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete project?</DialogTitle>
          <DialogDescription>
            This will permanently remove "Project Aurora" and
            all of its associated data. This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="text" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="filled" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`

function DialogDoc() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Dialog"
        description="Dialogs provide important prompts in a user flow. They can require an action, communicate information, or help users accomplish a task. Built on Radix UI Dialog primitives for robust accessibility and focus management."
        status="stable"
      />

      {/* --- Basic Dialog --- */}
      <Section
        title="Basic dialog"
        description="A standard dialog with a title, description, body content, and action buttons in the footer."
      >
        <ComponentPreview title="Basic" className="justify-start">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="filled">Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog title</DialogTitle>
                <DialogDescription>
                  A brief description that provides context for the dialog content and
                  helps users understand the expected action.
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-m3-on-surface-variant">
                This is the main body of the dialog. You can include text, form controls,
                lists, or any other content that supports the user's task.
              </p>
              <DialogFooter>
                <DialogTrigger asChild>
                  <Button variant="text">Cancel</Button>
                </DialogTrigger>
                <Button variant="filled">Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </Section>

      {/* --- Confirmation Dialog --- */}
      <Section
        title="Confirmation dialog"
        description="Use a confirmation dialog for destructive or irreversible actions. Keep the message clear and concise so users can make an informed decision quickly."
      >
        <ComponentPreview title="Destructive Confirmation" className="justify-start">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outlined">Delete project</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete project?</DialogTitle>
                <DialogDescription>
                  This will permanently remove "Project Aurora" and all of its associated data.
                  This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogTrigger asChild>
                  <Button variant="text">Cancel</Button>
                </DialogTrigger>
                <Button variant="filled">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </Section>

      {/* --- Usage --- */}
      <Section
        title="Usage"
        description="Import the Dialog compound components and compose them within a Dialog root."
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-m3-on-surface mb-2">Basic dialog</h3>
            <CodeBlock code={basicUsageCode} language="tsx" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-m3-on-surface mb-2">Controlled confirmation dialog</h3>
            <CodeBlock code={confirmationUsageCode} language="tsx" />
          </div>
        </div>
      </Section>

      {/* --- Props --- */}
      <Section
        title="Props"
        description="The Dialog is a compound component. The root Dialog accepts Radix UI's standard props."
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-m3-on-surface mb-2">Dialog (Root)</h3>
            <PropsTable props={dialogProps} />
          </div>
          <div>
            <h3 className="text-sm font-medium text-m3-on-surface mb-2">DialogContent</h3>
            <PropsTable props={dialogContentProps} />
          </div>
        </div>
      </Section>

      {/* --- Accessibility --- */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'Dialog uses Radix UI primitives which provide built-in focus trapping, return focus on close, and Escape key dismissal.',
            'DialogTitle is linked via aria-labelledby and DialogDescription via aria-describedby automatically through Radix internals.',
            'The scrim overlay blocks interaction with the rest of the page and is announced to screen readers as a modal boundary.',
            'A visible close button is provided in the top-right corner with an sr-only "Close" label for assistive technologies.',
            'When using controlled state (open/onOpenChange), ensure the trigger and close actions remain keyboard accessible.',
            'Avoid auto-opening dialogs on page load. Unexpected modals are disorienting for screen reader users and those with cognitive disabilities.',
          ]}
        />
      </Section>

      {/* --- Responsive Behavior --- */}
      <Section
        title="Responsive behavior"
        description="Dialogs automatically adapt to the viewport while maintaining readability and touch targets."
      >
        <div className="rounded-m3-md border border-m3-outline-variant bg-m3-surface-container p-4 space-y-3">
          <div className="space-y-1.5">
            <h4 className="text-sm font-medium text-m3-on-surface">Mobile (below 640px)</h4>
            <p className="text-sm text-m3-on-surface-variant">
              Dialogs stretch to nearly full width with horizontal margin. Consider using a
              bottom sheet pattern for complex forms on very small screens. Footer buttons
              should stack vertically when space is constrained.
            </p>
          </div>
          <div className="space-y-1.5">
            <h4 className="text-sm font-medium text-m3-on-surface">Tablet (640px - 1024px)</h4>
            <p className="text-sm text-m3-on-surface-variant">
              The default max-width of 560px works well at tablet sizes. The dialog remains
              centered both horizontally and vertically with the scrim covering the full viewport.
            </p>
          </div>
          <div className="space-y-1.5">
            <h4 className="text-sm font-medium text-m3-on-surface">Desktop (above 1024px)</h4>
            <p className="text-sm text-m3-on-surface-variant">
              Dialogs are constrained to their max-width and centered in the viewport. For
              content-heavy dialogs, consider scrollable body areas with sticky headers and
              footers using <code className="text-xs bg-m3-surface-container-high px-1 py-0.5 rounded">max-h-[80vh] overflow-y-auto</code>.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default DialogDoc
