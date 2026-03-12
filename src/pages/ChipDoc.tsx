import { useState } from 'react'
import { Chip } from '@/components/ui/chip'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { PlatformUsage } from '@/components/docs/PlatformUsage'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'
import { Calendar, Check, MapPin, Star } from 'lucide-react'

const chipProps: PropDef[] = [
  {
    name: 'variant',
    type: "'assist' | 'filter' | 'input' | 'suggestion'",
    default: "'assist'",
    description: 'The functional style of the chip. Each variant conveys a different interaction pattern.',
  },
  {
    name: 'selected',
    type: 'boolean',
    default: 'false',
    description: 'Whether the chip is in a selected state. Primarily used with the filter variant to toggle active filters.',
  },
  {
    name: 'onRemove',
    type: '() => void',
    description: 'Callback fired when the remove button is clicked. Automatically shown for input chips and any chip with this handler.',
  },
  {
    name: 'icon',
    type: 'ReactNode',
    description: 'An optional leading icon rendered before the chip label.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    required: true,
    description: 'The text label displayed inside the chip.',
  },
]

const usageCode = `import { Chip } from '@/components/ui/chip'
import { Calendar, Check, MapPin } from 'lucide-react'
import { useState } from 'react'

function ChipExamples() {
  const [isVegetarian, setIsVegetarian] = useState(false)
  const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind'])

  return (
    <div className="flex flex-wrap gap-2">
      {/* Assist chip with icon */}
      <Chip variant="assist" icon={<Calendar />}>
        Add to calendar
      </Chip>

      {/* Toggle-able filter chip */}
      <Chip
        variant="filter"
        selected={isVegetarian}
        icon={isVegetarian ? <Check /> : undefined}
        onClick={() => setIsVegetarian(!isVegetarian)}
      >
        Vegetarian
      </Chip>

      {/* Removable input chips */}
      {tags.map((tag) => (
        <Chip
          key={tag}
          variant="input"
          onRemove={() => setTags((t) => t.filter((v) => v !== tag))}
        >
          {tag}
        </Chip>
      ))}

      {/* Suggestion chip */}
      <Chip variant="suggestion" icon={<MapPin />}>
        Nearby restaurants
      </Chip>
    </div>
  )
}`

function ChipDoc() {
  const [filterStates, setFilterStates] = useState({
    vegetarian: false,
    glutenFree: true,
    dairyFree: false,
  })

  const [inputTags, setInputTags] = useState(['React', 'TypeScript', 'Tailwind CSS'])

  const toggleFilter = (key: keyof typeof filterStates) => {
    setFilterStates((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const removeTag = (tag: string) => {
    setInputTags((prev) => prev.filter((t) => t !== tag))
  }

  return (
    <div className="space-y-12">
      <PageHeader
        title="Chip"
        description="Chips help people enter information, make selections, filter content, or trigger actions. Material 3 defines four chip types, each serving a distinct purpose in the UI."
        status="stable"
      />

      {/* --- Assist Chips --- */}
      <Section
        title="Assist chips"
        description="Assist chips represent smart or automated actions that can appear dynamically in context."
      >
        <ComponentPreview title="Assist Variants">
          <Chip variant="assist" icon={<Calendar />}>
            Add to calendar
          </Chip>
          <Chip variant="assist" icon={<MapPin />}>
            Get directions
          </Chip>
          <Chip variant="assist" icon={<Star />}>
            Save to favorites
          </Chip>
        </ComponentPreview>
      </Section>

      {/* --- Filter Chips --- */}
      <Section
        title="Filter chips"
        description="Filter chips use tags or descriptive words to narrow content. They can be toggled between selected and unselected states."
      >
        <ComponentPreview title="Filter (selected & unselected)">
          <Chip
            variant="filter"
            selected={filterStates.vegetarian}
            icon={filterStates.vegetarian ? <Check /> : undefined}
            onClick={() => toggleFilter('vegetarian')}
          >
            Vegetarian
          </Chip>
          <Chip
            variant="filter"
            selected={filterStates.glutenFree}
            icon={filterStates.glutenFree ? <Check /> : undefined}
            onClick={() => toggleFilter('glutenFree')}
          >
            Gluten-free
          </Chip>
          <Chip
            variant="filter"
            selected={filterStates.dairyFree}
            icon={filterStates.dairyFree ? <Check /> : undefined}
            onClick={() => toggleFilter('dairyFree')}
          >
            Dairy-free
          </Chip>
        </ComponentPreview>
      </Section>

      {/* --- Input Chips --- */}
      <Section
        title="Input chips"
        description="Input chips represent discrete pieces of information entered by the user, such as tags in a form field. They include a remove button for deletion."
      >
        <ComponentPreview title="Input with Remove">
          {inputTags.map((tag) => (
            <Chip
              key={tag}
              variant="input"
              onRemove={() => removeTag(tag)}
            >
              {tag}
            </Chip>
          ))}
          {inputTags.length === 0 && (
            <p className="text-sm text-m3-on-surface-variant italic">
              All tags removed.{' '}
              <button
                className="text-m3-primary underline"
                onClick={() => setInputTags(['React', 'TypeScript', 'Tailwind CSS'])}
              >
                Reset
              </button>
            </p>
          )}
        </ComponentPreview>
      </Section>

      {/* --- Suggestion Chips --- */}
      <Section
        title="Suggestion chips"
        description="Suggestion chips help narrow a query by presenting dynamically generated recommendations."
      >
        <ComponentPreview title="Suggestions">
          <Chip variant="suggestion">Breakfast</Chip>
          <Chip variant="suggestion">Lunch</Chip>
          <Chip variant="suggestion" icon={<MapPin />}>Nearby restaurants</Chip>
          <Chip variant="suggestion" icon={<Star />}>Top rated</Chip>
        </ComponentPreview>
      </Section>

      {/* --- Usage --- */}
      <PlatformUsage webCode={usageCode} />

      {/* --- Props --- */}
      <Section title="Props" description="Properties accepted by the Chip component.">
        <PropsTable props={chipProps} />
      </Section>

      {/* --- Accessibility --- */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'Filter chips use role="option" and aria-selected to communicate toggle state to assistive technologies.',
            'Input chips include a remove button with aria-label="Remove" so screen readers announce the delete action.',
            'When chips are used as a set, wrap them in a container with role="listbox" (filter) or role="list" (input) for proper group semantics.',
            'Ensure all chip interactions are reachable via keyboard. The remove button inside input chips is focusable independently from the chip itself.',
            'Provide visible focus indicators on chips. The default implementation inherits the M3 focus ring styles.',
          ]}
        />
      </Section>

      {/* --- Responsive Behavior --- */}
      <Section
        title="Responsive behavior"
        description="Chips reflow naturally using flex-wrap, but layout considerations differ across breakpoints."
      >
        <div className="rounded-m3-md border border-m3-outline-variant bg-m3-surface-container p-4 space-y-3">
          <div className="space-y-1.5">
            <h4 className="text-sm font-medium text-m3-on-surface">Mobile (below 640px)</h4>
            <p className="text-sm text-m3-on-surface-variant">
              Chips wrap across multiple lines. For horizontal scrolling chip sets (e.g., filter bars),
              use <code className="text-xs bg-m3-surface-container-high px-1 py-0.5 rounded">overflow-x-auto flex-nowrap</code> with
              horizontal padding for edge affordance.
            </p>
          </div>
          <div className="space-y-1.5">
            <h4 className="text-sm font-medium text-m3-on-surface">Tablet (640px - 1024px)</h4>
            <p className="text-sm text-m3-on-surface-variant">
              Chips can be displayed inline with other form controls. Filter chip groups work well
              alongside search fields in toolbar layouts.
            </p>
          </div>
          <div className="space-y-1.5">
            <h4 className="text-sm font-medium text-m3-on-surface">Desktop (above 1024px)</h4>
            <p className="text-sm text-m3-on-surface-variant">
              Chip groups have room to spread horizontally. Consider grouping related filter chips
              into labeled sections when the number of options exceeds eight.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default ChipDoc
