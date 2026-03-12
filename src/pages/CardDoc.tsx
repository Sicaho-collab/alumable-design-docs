import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { PlatformUsage } from '@/components/docs/PlatformUsage'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'

const cardProps: PropDef[] = [
  {
    name: 'variant',
    type: "'elevated' | 'filled' | 'outlined'",
    default: "'elevated'",
    description: 'The visual style of the card. Elevated cards use shadow, filled cards use a tinted background, and outlined cards use a border.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes to apply to the card container.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    required: true,
    description: 'The content rendered inside the card. Typically composed of CardHeader, CardContent, and CardFooter sub-components.',
  },
]

const usageCode = `import {
  Card, CardHeader, CardTitle,
  CardDescription, CardContent, CardFooter
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function ProjectCard() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Project Aurora</CardTitle>
        <CardDescription>
          A next-generation design system built for scale.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-m3-on-surface-variant">
          Launched in Q1 with 12 core components and full
          accessibility support across all variants.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="filled" size="sm">View details</Button>
        <Button variant="text" size="sm">Dismiss</Button>
      </CardFooter>
    </Card>
  )
}`

function CardDoc() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Card"
        description="Cards are surfaces that display content and actions about a single topic. They should be easy to scan for relevant and actionable information. Material 3 defines three card variants: elevated, filled, and outlined."
        status="stable"
      />

      {/* --- Variants --- */}
      <Section
        title="Variants"
        description="Choose a card variant based on the level of visual emphasis needed within the layout."
      >
        <ComponentPreview title="Elevated Card">
          <Card variant="elevated" className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Elevated card</CardTitle>
              <CardDescription>Default shadow-based emphasis</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-m3-on-surface-variant">
                Elevated cards have a drop shadow that increases on hover, creating a sense
                of depth against the surface background.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="filled" size="sm">Action</Button>
              <Button variant="text" size="sm">Cancel</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>

        <ComponentPreview title="Filled Card">
          <Card variant="filled" className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Filled card</CardTitle>
              <CardDescription>High-contrast tinted surface</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-m3-on-surface-variant">
                Filled cards use a higher-emphasis container color, making them stand out
                when placed on primary surface backgrounds.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="filled" size="sm">Action</Button>
              <Button variant="text" size="sm">Cancel</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>

        <ComponentPreview title="Outlined Card">
          <Card variant="outlined" className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Outlined card</CardTitle>
              <CardDescription>Subtle border separation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-m3-on-surface-variant">
                Outlined cards use a border to define the container edge, offering the
                lowest visual emphasis among the three variants.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="filled" size="sm">Action</Button>
              <Button variant="text" size="sm">Cancel</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </Section>

      {/* --- Usage --- */}
      <PlatformUsage webCode={usageCode} />

      {/* --- Props --- */}
      <Section title="Props" description="Properties accepted by the Card root component.">
        <PropsTable props={cardProps} />
      </Section>

      {/* --- Accessibility --- */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'Cards are rendered as plain <div> elements by default. If the entire card is clickable, wrap it in an <a> or <button> and provide a descriptive aria-label.',
            'CardTitle renders as an <h3>. Ensure heading levels are sequential within the page hierarchy.',
            'When cards contain interactive elements in the footer, verify that each button or link is reachable via keyboard Tab navigation.',
            'Avoid nesting interactive elements inside a card that is itself a link to prevent ambiguous focus order.',
          ]}
        />
      </Section>

      {/* --- Responsive Behavior --- */}
      <Section
        title="Responsive behavior"
        description="Cards adapt to different viewport sizes using standard layout utilities."
      >
        <div className="rounded-m3-md border border-m3-outline-variant bg-m3-surface-container p-4 space-y-3">
          <div className="space-y-1.5">
            <h4 className="text-sm font-medium text-m3-on-surface">Mobile (below 640px)</h4>
            <p className="text-sm text-m3-on-surface-variant">
              Cards span the full container width. Use a single-column stack with consistent spacing.
              Avoid horizontal card grids on small screens.
            </p>
          </div>
          <div className="space-y-1.5">
            <h4 className="text-sm font-medium text-m3-on-surface">Tablet (640px - 1024px)</h4>
            <p className="text-sm text-m3-on-surface-variant">
              A two-column grid works well for card collections. Set a max-width on individual cards
              to prevent them from becoming too wide in landscape orientation.
            </p>
          </div>
          <div className="space-y-1.5">
            <h4 className="text-sm font-medium text-m3-on-surface">Desktop (above 1024px)</h4>
            <p className="text-sm text-m3-on-surface-variant">
              Use three or four column grids with <code className="text-xs bg-m3-surface-container-high px-1 py-0.5 rounded">max-w-sm</code> on
              each card. Elevated cards benefit from additional whitespace at larger breakpoints.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default CardDoc
