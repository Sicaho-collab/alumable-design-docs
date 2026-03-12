import { TextField } from '@/components/ui/text-field'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'
import { Search, Eye, Mail } from 'lucide-react'

const textFieldProps: PropDef[] = [
  {
    name: 'variant',
    type: '"filled" | "outlined"',
    default: '"filled"',
    description: 'The visual style variant. Outlined is recommended for most use cases.',
  },
  {
    name: 'label',
    type: 'string',
    default: '—',
    description: 'Label text displayed above the input field, always visible regardless of state.',
  },
  {
    name: 'placeholder',
    type: 'string',
    default: '—',
    description: 'Placeholder text shown inside the input when empty.',
  },
  {
    name: 'supportingText',
    type: 'string',
    default: '—',
    description: 'Helper text displayed below the input. Replaced by errorText when error is true.',
  },
  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    description: 'When true, applies error styling (red border and label) and displays errorText.',
  },
  {
    name: 'errorText',
    type: 'string',
    default: '—',
    description: 'Error message displayed below the input when error is true.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'When true, the field becomes non-interactive with reduced opacity.',
  },
  {
    name: 'leadingIcon',
    type: 'ReactNode',
    default: '—',
    description: 'Icon element rendered at the start (left) of the input.',
  },
  {
    name: 'trailingIcon',
    type: 'ReactNode',
    default: '—',
    description: 'Icon element rendered at the end (right) of the input.',
  },
  {
    name: 'multiline',
    type: 'boolean',
    default: 'false',
    description: 'When true, renders a textarea instead of a single-line input.',
  },
  {
    name: 'rows',
    type: 'number',
    default: '4',
    description: 'Number of visible text rows when multiline is true.',
  },
  {
    name: '...props',
    type: 'InputHTMLAttributes',
    default: '—',
    description: 'All native HTML input attributes are forwarded to the underlying input element.',
  },
]

const webUsageCode = `import { TextField } from '@alumable/ui-web'
import { CalendarDays } from 'lucide-react'

{/* Default */}
<TextField variant="outlined" label="Full name" placeholder="Enter your name" />

{/* With leading icon */}
<TextField
  variant="outlined"
  label="Start date"
  placeholder="Select start date"
  leadingIcon={<CalendarDays />}
/>

{/* Error state */}
<TextField
  variant="outlined"
  label="Email"
  error
  errorText="Please enter a valid email address"
  value="invalid-email"
/>

{/* Disabled */}
<TextField variant="outlined" label="Disabled field" disabled value="Cannot edit" />

{/* Multiline */}
<TextField variant="outlined" label="Description" multiline rows={4} placeholder="Enter details..." />`

const mobileUsageCode = `import { TextField } from '@alumable/ui-mobile'
import { Ionicons } from '@expo/vector-icons'

{/* Default */}
<TextField variant="outlined" label="Full name" placeholder="Enter your name" />

{/* With leading icon */}
<TextField
  variant="outlined"
  label="Start date"
  placeholder="Select start date"
  leadingIcon={<Ionicons name="calendar-outline" size={20} color="#49454F" />}
/>

{/* Error state */}
<TextField
  variant="outlined"
  label="Email"
  error
  errorText="Please enter a valid email address"
  value="invalid-email"
/>

{/* Disabled */}
<TextField variant="outlined" label="Disabled field" disabled value="Cannot edit" />

{/* Multiline */}
<TextField variant="outlined" label="Description" multiline numberOfLines={4} />`

export default function TextFieldDoc() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Text Field"
        description="Text fields allow users to enter and edit text. The label is always displayed above the input. Supports icons, validation states, and multiline input."
        status="stable"
      />

      {/* --- Default --- */}
      <Section
        title="Default"
        description="Standard outlined text field with label above and placeholder inside."
      >
        <ComponentPreview title="Default" className="flex-col items-stretch gap-6">
          <div className="max-w-sm">
            <TextField variant="outlined" label="Full name" placeholder="Enter your name" />
          </div>
          <div className="max-w-sm">
            <TextField
              variant="outlined"
              label="Email address"
              placeholder="you@example.com"
              supportingText="We will not share your email"
            />
          </div>
        </ComponentPreview>
      </Section>

      {/* --- With Icons --- */}
      <Section
        title="With icons"
        description="Leading and trailing icons provide additional context. Commonly used in date pickers and search fields."
      >
        <ComponentPreview title="Icons" className="flex-col items-stretch gap-6">
          <div className="max-w-sm">
            <TextField
              variant="outlined"
              label="Search"
              placeholder="Search..."
              leadingIcon={<Search />}
            />
          </div>
          <div className="max-w-sm">
            <TextField
              variant="outlined"
              label="Email"
              placeholder="you@example.com"
              leadingIcon={<Mail />}
              trailingIcon={<Eye />}
            />
          </div>
        </ComponentPreview>
      </Section>

      {/* --- Error --- */}
      <Section
        title="Error"
        description="Error state with red border, red label, and error message below the field."
      >
        <ComponentPreview title="Error" className="flex-col items-stretch gap-6">
          <div className="max-w-sm">
            <TextField
              variant="outlined"
              label="Email"
              error
              errorText="Please enter a valid email address"
              defaultValue="not-an-email"
            />
          </div>
          <div className="max-w-sm">
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              error
              errorText="Password must be at least 8 characters"
            />
          </div>
        </ComponentPreview>
      </Section>

      {/* --- Disabled --- */}
      <Section
        title="Disabled"
        description="Disabled state with reduced opacity. The field is not interactive."
      >
        <ComponentPreview title="Disabled" className="flex-col items-stretch gap-6">
          <div className="max-w-sm">
            <TextField
              variant="outlined"
              label="Full name"
              disabled
              defaultValue="Jane Doe"
            />
          </div>
          <div className="max-w-sm">
            <TextField
              variant="outlined"
              label="Email"
              disabled
              placeholder="you@example.com"
            />
          </div>
        </ComponentPreview>
      </Section>

      {/* --- Multiline --- */}
      <Section
        title="Multiline"
        description="Multiline text fields render a resizable textarea for longer content."
      >
        <ComponentPreview title="Multiline" className="flex-col items-stretch gap-6">
          <div className="max-w-sm">
            <TextField
              variant="outlined"
              label="Description"
              placeholder="Enter a description..."
              multiline
              rows={4}
            />
          </div>
          <div className="max-w-sm">
            <TextField
              variant="outlined"
              label="Notes"
              multiline
              rows={3}
              defaultValue="Some existing content that can be edited."
            />
          </div>
        </ComponentPreview>
      </Section>

      {/* --- Web Usage --- */}
      <Section title="Web Usage" description="React + Tailwind">
        <CodeBlock code={webUsageCode} />
      </Section>

      {/* --- Mobile Usage --- */}
      <Section title="Mobile Usage" description="React Native + StyleSheet">
        <CodeBlock code={mobileUsageCode} />
      </Section>

      {/* --- Props --- */}
      <Section title="API Reference">
        <PropsTable props={textFieldProps} />
      </Section>

      {/* --- Accessibility --- */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'Each input is linked to its label via a generated id and htmlFor, ensuring screen readers announce the label on focus.',
            'Labels are always displayed above the input field, ensuring the field name is visible in all states (default, focused, error, disabled).',
            'Supporting text and error text are connected to the input through aria-describedby.',
            'The error state sets aria-invalid="true" on the input so assistive technology can announce the invalid state.',
            'The disabled state sets the native disabled attribute, removing the field from the tab order.',
            'On mobile (React Native), accessibilityLabel and accessibilityState are set automatically from the label and disabled props.',
          ]}
        />
      </Section>
    </div>
  )
}
