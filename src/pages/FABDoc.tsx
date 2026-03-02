import { FAB } from '@/components/ui/fab'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'
import { Plus, Edit, Navigation } from 'lucide-react'

const fabProps: PropDef[] = [
  {
    name: 'variant',
    type: "'surface' | 'primary' | 'secondary' | 'tertiary'",
    default: "'primary'",
    description:
      'The colour scheme of the FAB, mapped to M3 container and on-container token pairs.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'extended'",
    default: "'md'",
    description:
      'Controls the dimensions. "extended" allows a text label alongside the icon.',
  },
  {
    name: 'icon',
    type: 'React.ReactNode',
    description:
      'The icon element rendered inside the FAB. Required for non-extended sizes.',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    description:
      'Text label rendered next to the icon. Only visible when size is "extended".',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the FAB and prevents interaction.',
  },
]

const usageCode = `import { FAB } from '@/components/ui/fab'
import { Plus, Edit } from 'lucide-react'

export function Example() {
  return (
    <>
      {/* Standard FAB */}
      <FAB icon={<Plus />} aria-label="Create" />

      {/* Extended FAB with label */}
      <FAB size="extended" icon={<Edit />}>
        Compose
      </FAB>

      {/* Secondary variant, large */}
      <FAB variant="secondary" size="lg" icon={<Plus />} aria-label="Add item" />
    </>
  )
}`

export default function FABDoc() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="FAB"
        description="The Floating Action Button (FAB) represents the most important action on a screen. It appears in front of all other content and is recognisable by its large icon and optional label."
        status="stable"
      />

      {/* ── Variants ── */}
      <Section
        title="Variants"
        description="Four colour variants map directly to M3 container token pairs."
      >
        <ComponentPreview title="Surface / Primary / Secondary / Tertiary">
          <FAB variant="surface" icon={<Plus />} aria-label="Add (surface)" />
          <FAB variant="primary" icon={<Plus />} aria-label="Add (primary)" />
          <FAB variant="secondary" icon={<Plus />} aria-label="Add (secondary)" />
          <FAB variant="tertiary" icon={<Plus />} aria-label="Add (tertiary)" />
        </ComponentPreview>
      </Section>

      {/* ── Sizes ── */}
      <Section
        title="Sizes"
        description="Small, medium, and large icon-only sizes plus an extended variant that includes a text label."
      >
        <ComponentPreview title="Small / Medium / Large">
          <FAB size="sm" icon={<Plus />} aria-label="Add (small)" />
          <FAB size="md" icon={<Plus />} aria-label="Add (medium)" />
          <FAB size="lg" icon={<Plus />} aria-label="Add (large)" />
        </ComponentPreview>

        <ComponentPreview title="Extended">
          <FAB size="extended" icon={<Edit />}>
            Compose
          </FAB>
          <FAB size="extended" variant="secondary" icon={<Navigation />}>
            Navigate
          </FAB>
          <FAB size="extended" variant="tertiary" icon={<Plus />}>
            New item
          </FAB>
        </ComponentPreview>
      </Section>

      {/* ── All variant + size combinations ── */}
      <Section
        title="Variant Matrix"
        description="Every colour variant at each size for visual comparison."
      >
        <ComponentPreview title="Primary sizes" className="gap-6">
          <FAB variant="primary" size="sm" icon={<Plus />} aria-label="Primary small" />
          <FAB variant="primary" size="md" icon={<Plus />} aria-label="Primary medium" />
          <FAB variant="primary" size="lg" icon={<Plus />} aria-label="Primary large" />
          <FAB variant="primary" size="extended" icon={<Edit />}>
            Compose
          </FAB>
        </ComponentPreview>

        <ComponentPreview title="Surface sizes" className="gap-6">
          <FAB variant="surface" size="sm" icon={<Edit />} aria-label="Surface small" />
          <FAB variant="surface" size="md" icon={<Edit />} aria-label="Surface medium" />
          <FAB variant="surface" size="lg" icon={<Edit />} aria-label="Surface large" />
          <FAB variant="surface" size="extended" icon={<Edit />}>
            Edit
          </FAB>
        </ComponentPreview>
      </Section>

      {/* ── Usage ── */}
      <Section title="Usage">
        <CodeBlock code={usageCode} language="tsx" />
      </Section>

      {/* ── Props ── */}
      <Section title="Props">
        <PropsTable props={fabProps} />
      </Section>

      {/* ── Accessibility ── */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'Uses a native <button> element so it is focusable and activatable via keyboard by default.',
            'For icon-only FABs (sm, md, lg), always provide an aria-label describing the action.',
            'The extended variant includes a visible text label, so aria-label is optional but can still be used for additional context.',
            'Focus ring follows the M3 primary colour outline and is visible on keyboard navigation.',
            'The FAB shadow hierarchy (elevation 3 at rest, 4 on hover) provides visual affordance but does not affect accessibility tree ordering.',
          ]}
        />
      </Section>

      {/* ── Responsive behaviour ── */}
      <Section
        title="Responsive Behaviour"
        description="Placement and sizing guidance across screen sizes."
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
                  Position the FAB at the bottom-right corner using{' '}
                  <code className="text-xs bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">
                    fixed bottom-4 right-4
                  </code>
                  . Use the default <code className="text-xs bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">md</code> size. On scroll, consider collapsing an extended FAB to icon-only to save space.
                </td>
              </tr>
              <tr className="border-b border-m3-outline-variant">
                <td className="py-3 px-4 font-medium text-m3-on-surface">
                  Tablet (640px - 1024px)
                </td>
                <td className="py-3 px-4">
                  An extended FAB works well in the bottom-right corner. Ensure the FAB does not overlap navigation rails or bottom app bars. The{' '}
                  <code className="text-xs bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">lg</code> size is appropriate for prominent primary actions.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-m3-on-surface">
                  Desktop (&gt; 1024px)
                </td>
                <td className="py-3 px-4">
                  Place the FAB contextually near the content it relates to rather than in a fixed corner position. The extended variant provides the most clarity on larger screens. The{' '}
                  <code className="text-xs bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">sm</code> size can be used in dense dashboard layouts.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  )
}
