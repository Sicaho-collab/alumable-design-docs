import { Badge } from '@/components/ui/badge'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { PlatformUsage } from '@/components/docs/PlatformUsage'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'
import { Bell, Mail } from 'lucide-react'

const badgeProps: PropDef[] = [
  {
    name: 'variant',
    type: "'small' | 'large'",
    default: "'large'",
    description:
      'The visual style of the badge. Small renders a dot indicator, large renders a badge with an optional count.',
  },
  {
    name: 'count',
    type: 'number',
    default: '—',
    description:
      'The number to display inside the badge. Only visible when variant is large. Values above 999 are displayed as 999+.',
  },
  {
    name: 'className',
    type: 'string',
    default: '—',
    description: 'Additional CSS class names to apply to the badge element.',
  },
]

const usageCode = `import { Badge } from '@/components/ui/badge'
import { Bell } from 'lucide-react'

{/* Small dot badge on an icon */}
<div className="relative inline-flex">
  <Bell className="size-6" />
  <Badge variant="small" className="absolute -top-0.5 -right-0.5" />
</div>

{/* Large badge with count */}
<div className="relative inline-flex">
  <Bell className="size-6" />
  <Badge variant="large" count={3} className="absolute -top-2 -right-3" />
</div>`

export default function BadgeDoc() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Badge"
        description="Badges convey dynamic information such as counts or status. They can include labels or be used as a standalone dot indicator."
        status="stable"
      />

      {/* --- Variants --- */}
      <Section
        title="Variants"
        description="The badge component supports a small dot indicator and a large badge with a numeric count."
      >
        <ComponentPreview title="Small (dot)">
          <div className="relative inline-flex">
            <Bell className="size-6 text-m3-on-surface" />
            <Badge variant="small" className="absolute -top-0.5 -right-0.5" />
          </div>
          <div className="relative inline-flex">
            <Mail className="size-6 text-m3-on-surface" />
            <Badge variant="small" className="absolute -top-0.5 -right-0.5" />
          </div>
        </ComponentPreview>

        <ComponentPreview title="Large (with count)">
          <div className="relative inline-flex">
            <Bell className="size-6 text-m3-on-surface" />
            <Badge variant="large" count={3} className="absolute -top-2 -right-3" />
          </div>
          <div className="relative inline-flex">
            <Mail className="size-6 text-m3-on-surface" />
            <Badge variant="large" count={120} className="absolute -top-2 -right-3" />
          </div>
          <div className="relative inline-flex">
            <Bell className="size-6 text-m3-on-surface" />
            <Badge variant="large" count={1000} className="absolute -top-2 -right-4" />
          </div>
        </ComponentPreview>
      </Section>

      {/* --- Positioning --- */}
      <Section
        title="Positioning on icons"
        description="Use relative positioning on the parent container and absolute positioning on the badge to anchor it to an icon or avatar."
      >
        <ComponentPreview title="Icon with badge">
          <div className="flex items-center gap-8">
            <div className="relative inline-flex">
              <div className="flex items-center justify-center size-10 rounded-full bg-m3-surface-container-high">
                <Bell className="size-5 text-m3-on-surface" />
              </div>
              <Badge variant="small" className="absolute top-0 right-0" />
            </div>

            <div className="relative inline-flex">
              <div className="flex items-center justify-center size-10 rounded-full bg-m3-surface-container-high">
                <Mail className="size-5 text-m3-on-surface" />
              </div>
              <Badge variant="large" count={8} className="absolute -top-1 -right-2" />
            </div>
          </div>
        </ComponentPreview>
      </Section>

      {/* --- Usage --- */}
      <PlatformUsage webCode={usageCode} />

      {/* --- Props --- */}
      <Section title="API Reference">
        <PropsTable props={badgeProps} />
      </Section>

      {/* --- Accessibility --- */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'The badge renders an aria-label that announces the count (e.g. "3 notifications") for screen readers.',
            'When no count is provided the aria-label defaults to "notification".',
            'Badges are decorative indicators and should be associated with their parent element through grouping or labelling.',
            'Avoid relying on color alone to convey meaning; the numeric count provides a textual alternative.',
          ]}
        />
      </Section>

      {/* --- Responsive --- */}
      <Section
        title="Responsive behavior"
        description="Guidelines for how the badge component adapts across screen sizes."
      >
        <div className="prose prose-sm max-w-none text-m3-on-surface-variant">
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li>
              Badge size remains constant across breakpoints to maintain legibility at small sizes.
            </li>
            <li>
              On compact screens (mobile), prefer the small dot variant to conserve space within dense icon layouts.
            </li>
            <li>
              The large badge truncates counts above 999 to "999+" to prevent overflow in tight containers.
            </li>
            <li>
              Ensure the parent container maintains <code className="text-xs bg-m3-surface-container-high px-1 py-0.5 rounded">position: relative</code> at all viewport widths for correct badge placement.
            </li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
