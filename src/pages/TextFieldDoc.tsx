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
    type: "'filled' | 'outlined'",
    default: "'filled'",
    description: 'The visual style of the text field container.',
  },
  {
    name: 'label',
    type: 'string',
    default: '—',
    description: 'The floating label text displayed above the input when focused or filled.',
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
    description: 'When true, applies error styling (red border) and displays errorText instead of supportingText.',
  },
  {
    name: 'errorText',
    type: 'string',
    default: '—',
    description: 'Error message displayed below the input when error is true.',
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
    name: '...props',
    type: 'InputHTMLAttributes',
    default: '—',
    description: 'All native HTML input attributes are forwarded to the underlying input element.',
  },
]

const usageCode = `import { TextField } from '@/components/ui/text-field'
import { Search, Eye } from 'lucide-react'

{/* Filled variant */}
<TextField label="Email" variant="filled" />

{/* Outlined variant */}
<TextField label="Username" variant="outlined" />

{/* With leading and trailing icons */}
<TextField
  label="Search"
  variant="outlined"
  leadingIcon={<Search />}
  trailingIcon={<Eye />}
/>

{/* With supporting text */}
<TextField
  label="Password"
  type="password"
  supportingText="Must be at least 8 characters"
/>

{/* Error state */}
<TextField
  label="Email"
  error
  errorText="Please enter a valid email address"
  value="invalid-email"
/>`

export default function TextFieldDoc() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Text field"
        description="Text fields allow users to enter and edit text. They come in filled and outlined variants and support labels, helper text, icons, and validation states."
        status="stable"
      />

      {/* --- Filled --- */}
      <Section
        title="Filled"
        description="Filled text fields have more visual weight and work well on surfaces that need emphasis."
      >
        <ComponentPreview title="Filled variant" className="flex-col items-stretch gap-6">
          <div className="max-w-sm">
            <TextField label="Full name" variant="filled" />
          </div>
          <div className="max-w-sm">
            <TextField
              label="Email address"
              variant="filled"
              type="email"
              supportingText="We will not share your email"
            />
          </div>
        </ComponentPreview>
      </Section>

      {/* --- Outlined --- */}
      <Section
        title="Outlined"
        description="Outlined text fields have less visual emphasis and are suited for dense forms."
      >
        <ComponentPreview title="Outlined variant" className="flex-col items-stretch gap-6">
          <div className="max-w-sm">
            <TextField label="Username" variant="outlined" />
          </div>
          <div className="max-w-sm">
            <TextField
              label="Phone number"
              variant="outlined"
              type="tel"
              supportingText="Include country code"
            />
          </div>
        </ComponentPreview>
      </Section>

      {/* --- Icons --- */}
      <Section
        title="With icons"
        description="Leading and trailing icons provide additional affordance and context."
      >
        <ComponentPreview title="Leading and trailing icons" className="flex-col items-stretch gap-6">
          <div className="max-w-sm">
            <TextField
              label="Search"
              variant="outlined"
              leadingIcon={<Search />}
            />
          </div>
          <div className="max-w-sm">
            <TextField
              label="Email"
              variant="filled"
              leadingIcon={<Mail />}
              trailingIcon={<Eye />}
            />
          </div>
        </ComponentPreview>
      </Section>

      {/* --- Supporting text --- */}
      <Section
        title="Supporting text"
        description="Helper text provides additional guidance beneath the text field."
      >
        <ComponentPreview title="With supporting text" className="flex-col items-stretch gap-6">
          <div className="max-w-sm">
            <TextField
              label="Password"
              variant="filled"
              type="password"
              supportingText="Must be at least 8 characters"
            />
          </div>
        </ComponentPreview>
      </Section>

      {/* --- Error --- */}
      <Section
        title="Error state"
        description="Error styling highlights validation issues with a red border and error message."
      >
        <ComponentPreview title="Error" className="flex-col items-stretch gap-6">
          <div className="max-w-sm">
            <TextField
              label="Email"
              variant="filled"
              error
              errorText="Please enter a valid email address"
              defaultValue="not-an-email"
            />
          </div>
          <div className="max-w-sm">
            <TextField
              label="Username"
              variant="outlined"
              error
              errorText="Username is already taken"
              defaultValue="admin"
            />
          </div>
        </ComponentPreview>
      </Section>

      {/* --- Usage --- */}
      <Section title="Usage">
        <CodeBlock code={usageCode} />
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
            'Supporting text and error text are connected to the input through aria-describedby.',
            'The error state sets aria-invalid="true" on the input so assistive technology can announce the invalid state.',
            'Floating labels animate out of the input area to avoid obscuring user input, maintaining readability.',
            'Icon elements are decorative and hidden from the accessibility tree. Provide meaningful labels through the label prop instead.',
          ]}
        />
      </Section>

      {/* --- Responsive --- */}
      <Section
        title="Responsive behavior"
        description="How text fields adapt across breakpoints and form layouts."
      >
        <div className="prose prose-sm max-w-none text-m3-on-surface-variant">
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li>
              Text fields expand to fill their container width by default. Use <code className="text-xs bg-m3-surface-container-high px-1 py-0.5 rounded">max-w-*</code> utilities to constrain width in wide layouts.
            </li>
            <li>
              On mobile, use full-width text fields stacked vertically. On desktop, fields can be arranged in multi-column grids.
            </li>
            <li>
              The 56px height (14 * 4px) provides a comfortable touch target on all devices, meeting the 48px minimum recommended by Material Design.
            </li>
            <li>
              Floating labels transition smoothly and remain visible at all viewport sizes, ensuring the field purpose is clear even when scrolled into view.
            </li>
            <li>
              Supporting and error text wraps to multiple lines if needed and does not truncate, ensuring the full message is readable on narrow screens.
            </li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
