import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { PlatformUsage } from '@/components/docs/PlatformUsage'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'
import { Heart, Info } from 'lucide-react'

const tooltipProps: PropDef[] = [
  {
    name: 'children',
    type: 'ReactNode',
    required: true,
    description: 'The content rendered inside the tooltip popup (TooltipContent).',
  },
  {
    name: 'side',
    type: "'top' | 'right' | 'bottom' | 'left'",
    default: "'top'",
    description: 'The preferred side of the trigger element where the tooltip should appear.',
  },
  {
    name: 'sideOffset',
    type: 'number',
    default: '4',
    description: 'Distance in pixels between the trigger element and the tooltip.',
  },
]

const usageCode = `import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

<Tooltip>
  <TooltipTrigger asChild>
    <Button>Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    Helpful information
  </TooltipContent>
</Tooltip>

{/* With side and offset */}
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outlined">Right tooltip</Button>
  </TooltipTrigger>
  <TooltipContent side="right" sideOffset={8}>
    Appears to the right
  </TooltipContent>
</Tooltip>`

export default function TooltipDoc() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Tooltip"
        description="Tooltips display informative text when users hover over, focus on, or tap an element. They are used to describe icon buttons or provide additional context."
        status="stable"
      />

      {/* --- Plain tooltip on button --- */}
      <Section
        title="Plain tooltip"
        description="A basic tooltip wrapping a text button and an icon button."
      >
        <ComponentPreview title="On a text button">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>Save to collection</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outlined">Another button</Button>
            </TooltipTrigger>
            <TooltipContent>View details</TooltipContent>
          </Tooltip>
        </ComponentPreview>

        <ComponentPreview title="On an icon button">
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="inline-flex items-center justify-center size-10 rounded-full text-m3-on-surface-variant hover:bg-m3-on-surface/8 transition-colors">
                <Heart className="size-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>Add to favorites</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="inline-flex items-center justify-center size-10 rounded-full text-m3-on-surface-variant hover:bg-m3-on-surface/8 transition-colors">
                <Info className="size-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>More information</TooltipContent>
          </Tooltip>
        </ComponentPreview>
      </Section>

      {/* --- Placement --- */}
      <Section
        title="Placement"
        description="Tooltips can be positioned on any side of the trigger element."
      >
        <ComponentPreview title="Side variations" className="gap-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="tonal">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top">Top tooltip</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="tonal">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">Right tooltip</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="tonal">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="tonal">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">Left tooltip</TooltipContent>
          </Tooltip>
        </ComponentPreview>
      </Section>

      {/* --- Usage --- */}
      <PlatformUsage webCode={usageCode} />

      {/* --- Props --- */}
      <Section title="API Reference">
        <p className="text-sm text-m3-on-surface-variant mb-4">
          Props listed below apply to <code className="text-xs bg-m3-surface-container-high px-1 py-0.5 rounded text-m3-primary">TooltipContent</code>. The <code className="text-xs bg-m3-surface-container-high px-1 py-0.5 rounded text-m3-primary">Tooltip</code> and <code className="text-xs bg-m3-surface-container-high px-1 py-0.5 rounded text-m3-primary">TooltipTrigger</code> components accept all Radix UI Tooltip props.
        </p>
        <PropsTable props={tooltipProps} />
      </Section>

      {/* --- Accessibility --- */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'Tooltips appear on focus as well as hover, ensuring keyboard users can access the content.',
            'The tooltip content is associated with the trigger via aria-describedby automatically by Radix UI.',
            'Tooltips are dismissed when the user presses the Escape key.',
            'Keep tooltip text short and informational. Do not place interactive content (links, buttons) inside tooltips.',
            'For icon-only buttons, the tooltip acts as the accessible label; ensure the trigger also has an aria-label as a fallback.',
          ]}
        />
      </Section>

      {/* --- Responsive --- */}
      <Section
        title="Responsive behavior"
        description="How tooltips adapt across devices and viewport sizes."
      >
        <div className="prose prose-sm max-w-none text-m3-on-surface-variant">
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li>
              On touch devices, tooltips appear on long-press and dismiss on tap elsewhere. Hover-based tooltips are not available on touch screens.
            </li>
            <li>
              The tooltip repositions automatically when it would overflow the viewport boundary, flipping to the opposite side.
            </li>
            <li>
              Keep tooltip text concise (one to two short sentences) so it remains fully visible even on narrow viewports.
            </li>
            <li>
              On compact layouts, consider replacing tooltips with inline helper text or labels that are always visible.
            </li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
