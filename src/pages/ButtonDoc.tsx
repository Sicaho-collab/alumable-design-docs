import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { PlatformUsage } from '@/components/docs/PlatformUsage'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'
import { Plus, Send, Heart, Download } from 'lucide-react'

const buttonProps: PropDef[] = [
  {
    name: 'variant',
    type: "'filled' | 'outlined' | 'text' | 'elevated' | 'tonal'",
    default: "'filled'",
    description: 'The visual style variant of the button.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'icon'",
    default: "'md'",
    description: 'Controls the size of the button. Use "icon" for square icon-only buttons.',
  },
  {
    name: 'asChild',
    type: 'boolean',
    default: 'false',
    description:
      'When true, the button will render its child element instead of a native button, merging props via Radix Slot.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description:
      'Disables the button, preventing interaction and applying reduced opacity.',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'The content rendered inside the button.',
  },
]

const usageCode = `import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'

export function Example() {
  return (
    <div className="flex gap-3">
      <Button>Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="tonal">
        <Send /> Send message
      </Button>
      <Button variant="text">Learn more</Button>
      <Button size="icon" variant="outlined">
        <Heart />
      </Button>
    </div>
  )
}`

export default function ButtonDoc() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Button"
        description="Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars."
        status="stable"
      />

      {/* ── Variants ── */}
      <Section
        title="Variants"
        description="Buttons come in five visual variants, each suited to a different level of emphasis."
      >
        <ComponentPreview title="All variants">
          <Button variant="filled">Filled</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
          <Button variant="elevated">Elevated</Button>
          <Button variant="tonal">Tonal</Button>
        </ComponentPreview>
      </Section>

      {/* ── Sizes ── */}
      <Section
        title="Sizes"
        description="Three standard sizes plus a dedicated icon size for square icon-only buttons."
      >
        <ComponentPreview title="Small / Medium / Large / Icon">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Add">
            <Plus />
          </Button>
        </ComponentPreview>
      </Section>

      {/* ── With icons ── */}
      <Section
        title="With Icons"
        description="Icons can be placed before or after the label text to clarify the action."
      >
        <ComponentPreview title="Leading and trailing icons">
          <Button>
            <Plus /> Create
          </Button>
          <Button variant="tonal">
            <Send /> Send
          </Button>
          <Button variant="outlined">
            <Download /> Download
          </Button>
          <Button variant="elevated">
            <Heart /> Favourite
          </Button>
        </ComponentPreview>
      </Section>

      {/* ── Disabled state ── */}
      <Section
        title="Disabled State"
        description="Disabled buttons are non-interactive and rendered at 38% opacity."
      >
        <ComponentPreview title="Disabled variants">
          <Button disabled>Filled</Button>
          <Button variant="outlined" disabled>
            Outlined
          </Button>
          <Button variant="text" disabled>
            Text
          </Button>
          <Button variant="elevated" disabled>
            Elevated
          </Button>
          <Button variant="tonal" disabled>
            Tonal
          </Button>
        </ComponentPreview>
      </Section>

      {/* ── Usage ── */}
      <PlatformUsage webCode={usageCode} />

      {/* ── Props ── */}
      <Section title="Props">
        <PropsTable props={buttonProps} />
      </Section>

      {/* ── Accessibility ── */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'Uses a native <button> element, which provides built-in keyboard and screen reader support.',
            'Supports activation via Enter and Space keys.',
            'Focus ring is visible by default and uses the M3 primary outline color.',
            'Disabled state is communicated to assistive technologies via the disabled attribute.',
            'When using the icon size without a text label, always provide an aria-label for screen readers.',
          ]}
        />
      </Section>

      {/* ── Responsive behaviour ── */}
      <Section
        title="Responsive Behaviour"
        description="Guidance for adapting buttons across breakpoints."
      >
        <div className="rounded-m3-md border border-m3-outline-variant overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-m3-surface-container border-b border-m3-outline-variant">
                <th className="text-left py-3 px-4 font-medium text-m3-on-surface">
                  Breakpoint
                </th>
                <th className="text-left py-3 px-4 font-medium text-m3-on-surface">
                  Recommendation
                </th>
              </tr>
            </thead>
            <tbody className="text-m3-on-surface-variant">
              <tr className="border-b border-m3-outline-variant">
                <td className="py-3 px-4 font-medium text-m3-on-surface">
                  Mobile (&lt; 640px)
                </td>
                <td className="py-3 px-4">
                  Use full-width buttons (<code className="text-xs bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">w-full</code>) in stacked layouts. Prefer the <code className="text-xs bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">md</code> size for comfortable touch targets (min 48 px).
                </td>
              </tr>
              <tr className="border-b border-m3-outline-variant">
                <td className="py-3 px-4 font-medium text-m3-on-surface">
                  Tablet (640px - 1024px)
                </td>
                <td className="py-3 px-4">
                  Use inline buttons in row layouts. The <code className="text-xs bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">md</code> size works well; <code className="text-xs bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">sm</code> may be used in denser UI regions.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-m3-on-surface">
                  Desktop (&gt; 1024px)
                </td>
                <td className="py-3 px-4">
                  All sizes are appropriate. Use <code className="text-xs bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">lg</code> for primary hero actions and <code className="text-xs bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">sm</code> inside data tables or dense toolbars.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  )
}
