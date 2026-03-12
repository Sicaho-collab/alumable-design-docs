import { useState } from 'react'
import { ChatInput } from '@/components/ui/chat-input'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { PlatformUsage } from '@/components/docs/PlatformUsage'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'

const props: PropDef[] = [
  {
    name: 'value',
    type: 'string',
    required: true,
    description: 'The current text value of the input.',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    required: true,
    description: 'Callback fired when the text changes.',
  },
  {
    name: 'onSubmit',
    type: '(value: string) => void',
    required: true,
    description: 'Callback fired on submit (Enter key or button click).',
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "'Describe what you need help with...'",
    description: 'Placeholder text shown when the input is empty.',
  },
  {
    name: 'submitLabel',
    type: 'string',
    default: "'Get Started'",
    description: 'Label text for the submit button (ButtonColorful).',
  },
  {
    name: 'maxLength',
    type: 'number',
    default: '500',
    description: 'Maximum character count.',
  },
  {
    name: 'minLength',
    type: 'number',
    default: '10',
    description: 'Minimum characters required before submit is enabled.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional classes applied to the outer container.',
  },
]

const usageCode = `import { useState } from 'react'
import { ChatInput } from '@/components/ui/chat-input'

export function Example() {
  const [value, setValue] = useState('')

  return (
    <ChatInput
      value={value}
      onChange={setValue}
      onSubmit={(text) => console.log('Submitted:', text)}
      placeholder="Describe the work you need done..."
      submitLabel="Get Started"
      maxLength={500}
      minLength={10}
    />
  )
}`

const featuresCode = `// Features:
// - Auto-resizing textarea (grows up to 200px)
// - Enter to submit, Shift+Enter for new line
// - Attachment menu (+) with Upload file, Add image, Import code
// - Character counter (current/max)
// - ButtonColorful CTA with 3 visual states
// - Focus state: primary border + elevated shadow
// - M3 design tokens throughout`

export default function ChatInputDoc() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('I need a student to help me redesign my company website with a modern look.')
  const [submitted, setSubmitted] = useState<string | null>(null)

  return (
    <div className="space-y-10">
      <PageHeader
        title="Chat Input"
        description="A rich text input component inspired by AI chat interfaces. Features auto-resizing textarea, attachment menu, character counter, and a gradient CTA button. Built for conversational entry points."
        status="stable"
      />

      {/* ── Default ── */}
      <Section
        title="Default"
        description="The chat input in its default empty state. The submit button is disabled until minimum character count is reached."
      >
        <ComponentPreview title="Empty state">
          <div className="w-full max-w-[600px]">
            <ChatInput
              value={value1}
              onChange={setValue1}
              onSubmit={(text) => setSubmitted(text)}
              placeholder="Describe what you need help with..."
            />
          </div>
          {submitted && (
            <div className="mt-4 p-3 rounded-m3-sm bg-m3-primary-container text-m3-on-primary-container text-sm">
              Submitted: "{submitted}"
            </div>
          )}
        </ComponentPreview>
      </Section>

      {/* ── With Content ── */}
      <Section
        title="With Content"
        description="When text exceeds the minLength threshold, the submit button transitions from disabled (grey) to enabled (gradient)."
      >
        <ComponentPreview title="Enabled state">
          <div className="w-full max-w-[600px]">
            <ChatInput
              value={value3}
              onChange={setValue3}
              onSubmit={(text) => alert(`Submitted: ${text}`)}
            />
          </div>
        </ComponentPreview>
      </Section>

      {/* ── Custom Props ── */}
      <Section
        title="Custom Configuration"
        description="Customize the placeholder, submit label, and character limits."
      >
        <ComponentPreview title="Custom props">
          <div className="w-full max-w-[600px]">
            <ChatInput
              value={value2}
              onChange={setValue2}
              onSubmit={(text) => alert(`Submitted: ${text}`)}
              placeholder="What kind of talent are you looking for?"
              submitLabel="Find Talent"
              maxLength={300}
              minLength={5}
            />
          </div>
        </ComponentPreview>
      </Section>

      {/* ── Features ── */}
      <Section title="Features">
        <CodeBlock code={featuresCode} />
      </Section>

      {/* ── Usage ── */}
      <PlatformUsage webCode={usageCode} />

      {/* ── Props ── */}
      <Section title="API Reference">
        <PropsTable props={props} />
      </Section>

      {/* ── Accessibility ── */}
      <AccessibilityNote
        items={[
          'Textarea is a native <textarea> element with full keyboard support.',
          'Enter submits, Shift+Enter adds a new line.',
          'Attachment button has aria-label="Add attachment".',
          'Character counter provides visual feedback on input limits.',
          'Focus state shows elevated border for clear visual indication.',
          'Submit button uses native disabled attribute when text is below minLength.',
        ]}
      />
    </div>
  )
}
