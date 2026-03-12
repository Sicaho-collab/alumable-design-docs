import React from 'react'
import { Slider } from '@/components/ui/slider'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { PlatformUsage } from '@/components/docs/PlatformUsage'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'

const sliderProps: PropDef[] = [
  {
    name: 'value',
    type: 'number[]',
    description: 'The controlled value of the slider. Pass a single-element array for a standard slider.',
  },
  {
    name: 'onValueChange',
    type: '(value: number[]) => void',
    description: 'Callback fired continuously as the slider value changes during interaction.',
  },
  {
    name: 'min',
    type: 'number',
    default: '0',
    description: 'The minimum allowed value of the slider.',
  },
  {
    name: 'max',
    type: 'number',
    default: '100',
    description: 'The maximum allowed value of the slider.',
  },
  {
    name: 'step',
    type: 'number',
    default: '1',
    description: 'The step increment between selectable values.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'When true, prevents the user from interacting with the slider.',
  },
  {
    name: 'name',
    type: 'string',
    description: 'The name of the slider used when submitting an HTML form.',
  },
]

const usageCode = `import { Slider } from '@/components/ui/slider'

function VolumeControl() {
  const [volume, setVolume] = React.useState([50])

  return (
    <div className="space-y-2 w-64">
      <div className="flex items-center justify-between">
        <label
          htmlFor="volume"
          className="text-sm text-m3-on-surface"
        >
          Volume
        </label>
        <span className="text-sm text-m3-on-surface-variant tabular-nums">
          {volume[0]}%
        </span>
      </div>
      <Slider
        id="volume"
        value={volume}
        onValueChange={setVolume}
        max={100}
        step={1}
      />
    </div>
  )
}`

export default function SliderDoc() {
  const [defaultValue, setDefaultValue] = React.useState([40])
  const [rangeValue, setRangeValue] = React.useState([25])
  const [steppedValue, setSteppedValue] = React.useState([50])

  return (
    <div className="space-y-10">
      <PageHeader
        title="Slider"
        description="Sliders allow users to select a value from a continuous or discrete range by moving a thumb along a track. They follow the Material 3 selection control pattern."
        status="stable"
      />

      {/* Default slider */}
      <Section title="Variants" description="Sliders in their default, custom range, and disabled states.">
        <ComponentPreview title="Default" className="flex-col !items-stretch">
          <div className="space-y-2 w-full max-w-xs">
            <div className="flex items-center justify-between">
              <span className="text-sm text-m3-on-surface">Default</span>
              <span className="text-sm text-m3-on-surface-variant tabular-nums">
                {defaultValue[0]}
              </span>
            </div>
            <Slider
              value={defaultValue}
              onValueChange={setDefaultValue}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview title="Custom range (0 - 1000, step 50)">
          <div className="space-y-2 w-full max-w-xs">
            <div className="flex items-center justify-between">
              <span className="text-sm text-m3-on-surface">Price</span>
              <span className="text-sm text-m3-on-surface-variant tabular-nums">
                ${rangeValue[0]}
              </span>
            </div>
            <Slider
              value={rangeValue}
              onValueChange={setRangeValue}
              min={0}
              max={1000}
              step={50}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview title="Disabled">
          <div className="space-y-2 w-full max-w-xs">
            <span className="text-sm text-m3-on-surface-variant opacity-38">Disabled</span>
            <Slider defaultValue={[60]} disabled />
          </div>
        </ComponentPreview>
      </Section>

      {/* With value label */}
      <Section title="With Value Label" description="Display the current value alongside the slider for clear feedback.">
        <ComponentPreview title="Brightness control" className="flex-col !items-stretch">
          <div className="space-y-2 w-full max-w-sm">
            <div className="flex items-center justify-between">
              <label htmlFor="brightness" className="text-sm text-m3-on-surface">
                Brightness
              </label>
              <span className="text-sm font-medium text-m3-primary tabular-nums min-w-[3ch] text-right">
                {steppedValue[0]}%
              </span>
            </div>
            <Slider
              id="brightness"
              value={steppedValue}
              onValueChange={setSteppedValue}
              max={100}
              step={5}
            />
            <div className="flex justify-between text-xs text-m3-on-surface-variant">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </ComponentPreview>
      </Section>

      {/* Usage */}
      <PlatformUsage webCode={usageCode} />

      {/* Props */}
      <Section title="API Reference">
        <PropsTable props={sliderProps} />
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'Built on Radix UI Slider, which applies role="slider" on the thumb element with aria-valuemin, aria-valuemax, and aria-valuenow attributes.',
            'Left/Down arrow keys decrease the value by one step. Right/Up arrow keys increase it by one step.',
            'Home sets the slider to its minimum value. End sets it to its maximum value.',
            'Page Up and Page Down adjust the value by a larger increment (typically 10% of the range).',
            'Associate a visible label with the slider using an id and a corresponding label element or aria-label for screen reader context.',
            'The disabled state is conveyed to screen readers automatically and prevents keyboard and pointer interaction.',
          ]}
        />
      </Section>

      {/* Responsive behavior */}
      <Section
        title="Responsive Behavior"
        description="Guidelines for slider layouts across screen sizes."
      >
        <div className="rounded-m3-md border border-m3-outline-variant p-4 space-y-3">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-m3-on-surface">Touch targets</h4>
            <p className="text-sm text-m3-on-surface-variant">
              The slider thumb is 20dp with a shadow to enhance visibility. On touch devices,
              the effective hit area extends beyond the visible thumb to meet the 48dp minimum
              touch target requirement.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-m3-on-surface">Track width</h4>
            <p className="text-sm text-m3-on-surface-variant">
              Sliders should span the full available width of their container using w-full.
              On narrow viewports, constrain the parent container with appropriate padding
              rather than applying a fixed width to the slider itself.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-m3-on-surface">Value label placement</h4>
            <p className="text-sm text-m3-on-surface-variant">
              Place the value label on the trailing side of the row above the track using
              justify-between. On compact viewports, use tabular-nums to prevent layout
              shift as the numeric value changes. Consider using a tooltip-style label
              above the thumb for sliders without dedicated label space.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
