import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'
import { Heart, Share2, Bookmark, MoreVertical, Settings } from 'lucide-react'

const iconButtonProps: PropDef[] = [
  {
    name: 'variant',
    type: "'filled' | 'outlined' | 'text' | 'elevated' | 'tonal'",
    default: "'filled'",
    description: 'The visual style variant applied to the icon button.',
  },
  {
    name: 'size',
    type: "'icon'",
    default: "'icon'",
    description:
      'Must be set to "icon" to render a square 40x40 button without horizontal padding.',
  },
  {
    name: 'asChild',
    type: 'boolean',
    default: 'false',
    description:
      'When true, renders its child element instead of a native button via Radix Slot.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description:
      'Disables the icon button, preventing interaction and reducing opacity.',
  },
  {
    name: 'aria-label',
    type: 'string',
    required: true,
    description:
      'Accessible label describing the action. Required because there is no visible text.',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'The icon element rendered inside the button.',
  },
]

const usageCode = `import { Button } from '@/components/ui/button'
import { Heart, Share2, Bookmark, MoreVertical } from 'lucide-react'

export function Example() {
  return (
    <div className="flex items-center gap-2">
      {/* Filled icon button */}
      <Button size="icon" aria-label="Favourite">
        <Heart />
      </Button>

      {/* Outlined icon button */}
      <Button size="icon" variant="outlined" aria-label="Share">
        <Share2 />
      </Button>

      {/* Text (standard) icon button */}
      <Button size="icon" variant="text" aria-label="Bookmark">
        <Bookmark />
      </Button>

      {/* Tonal icon button */}
      <Button size="icon" variant="tonal" aria-label="More options">
        <MoreVertical />
      </Button>
    </div>
  )
}`

export default function IconButtonDoc() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Icon Button"
        description='Icon buttons display actions using a single icon with no text label. They are built with the Button component using size="icon" and require an aria-label for accessibility.'
        status="stable"
      />

      {/* ── Variants ── */}
      <Section
        title="Variants"
        description='All five Button variants work at size="icon". Choose a variant based on the level of emphasis the action needs.'
      >
        <ComponentPreview title="Filled / Outlined / Text / Elevated / Tonal">
          <Button size="icon" variant="filled" aria-label="Favourite">
            <Heart />
          </Button>
          <Button size="icon" variant="outlined" aria-label="Share">
            <Share2 />
          </Button>
          <Button size="icon" variant="text" aria-label="Bookmark">
            <Bookmark />
          </Button>
          <Button size="icon" variant="elevated" aria-label="More options">
            <MoreVertical />
          </Button>
          <Button size="icon" variant="tonal" aria-label="Settings">
            <Settings />
          </Button>
        </ComponentPreview>
      </Section>

      {/* ── Common patterns ── */}
      <Section
        title="Common Patterns"
        description="Icon buttons are frequently grouped in toolbars, card actions, and app bars."
      >
        <ComponentPreview title="Toolbar group">
          <div className="flex items-center gap-1 rounded-m3-full border border-m3-outline-variant px-1 py-1">
            <Button size="icon" variant="text" aria-label="Favourite">
              <Heart />
            </Button>
            <Button size="icon" variant="text" aria-label="Share">
              <Share2 />
            </Button>
            <Button size="icon" variant="text" aria-label="Bookmark">
              <Bookmark />
            </Button>
            <span className="w-px h-6 bg-m3-outline-variant mx-1" />
            <Button size="icon" variant="text" aria-label="More options">
              <MoreVertical />
            </Button>
          </div>
        </ComponentPreview>

        <ComponentPreview title="Card actions (tonal)">
          <div className="flex items-center gap-2">
            <Button size="icon" variant="tonal" aria-label="Favourite">
              <Heart />
            </Button>
            <Button size="icon" variant="tonal" aria-label="Share">
              <Share2 />
            </Button>
            <Button size="icon" variant="tonal" aria-label="Bookmark">
              <Bookmark />
            </Button>
          </div>
        </ComponentPreview>
      </Section>

      {/* ── Disabled state ── */}
      <Section
        title="Disabled State"
        description="Disabled icon buttons are rendered at 38% opacity and are non-interactive."
      >
        <ComponentPreview title="Disabled icon buttons">
          <Button size="icon" variant="filled" disabled aria-label="Favourite">
            <Heart />
          </Button>
          <Button size="icon" variant="outlined" disabled aria-label="Share">
            <Share2 />
          </Button>
          <Button size="icon" variant="text" disabled aria-label="Bookmark">
            <Bookmark />
          </Button>
          <Button size="icon" variant="elevated" disabled aria-label="More options">
            <MoreVertical />
          </Button>
          <Button size="icon" variant="tonal" disabled aria-label="Settings">
            <Settings />
          </Button>
        </ComponentPreview>
      </Section>

      {/* ── Usage ── */}
      <Section title="Usage">
        <CodeBlock code={usageCode} language="tsx" />
      </Section>

      {/* ── Props ── */}
      <Section title="Props">
        <PropsTable props={iconButtonProps} />
      </Section>

      {/* ── Accessibility ── */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'Icon buttons have no visible text, so an aria-label is required to describe the action for screen readers.',
            'Uses a native <button> element with full keyboard support (Enter and Space to activate).',
            'Focus ring is visible on keyboard navigation and uses the M3 primary outline colour.',
            'Disabled state is announced by assistive technologies via the native disabled attribute.',
            'When used in a toolbar group, consider wrapping with role="toolbar" and managing focus with arrow key navigation.',
          ]}
        />
      </Section>

      {/* ── Responsive behaviour ── */}
      <Section
        title="Responsive Behaviour"
        description="Icon buttons maintain a consistent 40x40 px touch target across all breakpoints."
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
                  The 40 px touch target meets the minimum 48 dp recommendation when
                  surrounding padding is included. Use generous gap spacing (
                  <code className="text-xs bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">
                    gap-2
                  </code>{' '}
                  or more) between adjacent icon buttons to avoid accidental taps.
                </td>
              </tr>
              <tr className="border-b border-m3-outline-variant">
                <td className="py-3 px-4 font-medium text-m3-on-surface">
                  Tablet (640px - 1024px)
                </td>
                <td className="py-3 px-4">
                  Icon buttons work well in app bars and card action rows. Consider
                  pairing with tooltips so the action is discoverable on hover.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-m3-on-surface">
                  Desktop (&gt; 1024px)
                </td>
                <td className="py-3 px-4">
                  Tooltips are strongly recommended for all icon buttons on desktop to
                  communicate meaning. Grouped icon buttons in toolbars should use the{' '}
                  <code className="text-xs bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">
                    text
                  </code>{' '}
                  variant for a lightweight appearance.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  )
}
