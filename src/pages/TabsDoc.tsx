import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { PlatformUsage } from '@/components/docs/PlatformUsage'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'
import { Home, Star, Settings } from 'lucide-react'

const tabsRootProps: PropDef[] = [
  {
    name: 'defaultValue',
    type: 'string',
    required: true,
    description: 'The value of the tab that is active by default (uncontrolled).',
  },
  {
    name: 'value',
    type: 'string',
    default: '—',
    description: 'The controlled active tab value. Use with onValueChange.',
  },
  {
    name: 'onValueChange',
    type: '(value: string) => void',
    default: '—',
    description: 'Callback fired when the active tab changes.',
  },
]

const tabsListProps: PropDef[] = [
  {
    name: 'className',
    type: 'string',
    default: '—',
    description: 'Additional CSS class names for the tab list container.',
  },
]

const tabsTriggerProps: PropDef[] = [
  {
    name: 'value',
    type: 'string',
    required: true,
    description: 'A unique value that associates the trigger with its corresponding TabsContent.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'When true the tab cannot be activated.',
  },
]

const tabsContentProps: PropDef[] = [
  {
    name: 'value',
    type: 'string',
    required: true,
    description: 'The value that associates this content panel with its trigger.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    required: true,
    description: 'The content displayed when this tab is active.',
  },
]

const usageCode = `import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs'
import { Home, Star, Settings } from 'lucide-react'

{/* Basic tabs */}
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Features</TabsTrigger>
    <TabsTrigger value="tab3">Pricing</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Overview content</TabsContent>
  <TabsContent value="tab2">Features content</TabsContent>
  <TabsContent value="tab3">Pricing content</TabsContent>
</Tabs>

{/* Tabs with icons */}
<Tabs defaultValue="home">
  <TabsList>
    <TabsTrigger value="home">
      <Home className="size-4" />
      Home
    </TabsTrigger>
    <TabsTrigger value="favorites">
      <Star className="size-4" />
      Favorites
    </TabsTrigger>
    <TabsTrigger value="settings">
      <Settings className="size-4" />
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="home">Home content</TabsContent>
  <TabsContent value="favorites">Favorites content</TabsContent>
  <TabsContent value="settings">Settings content</TabsContent>
</Tabs>`

export default function TabsDoc() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Tabs"
        description="Tabs organize content across different screens, data sets, and other interactions. They allow users to switch between groups of related content."
        status="stable"
      />

      {/* --- Basic tabs --- */}
      <Section
        title="Basic tabs"
        description="Text-only tabs for switching between content sections."
      >
        <ComponentPreview title="Text tabs" className="flex-col items-stretch">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="p-4 text-sm text-m3-on-surface-variant">
                The overview panel provides a high-level summary of the product, its purpose, and key benefits.
              </div>
            </TabsContent>
            <TabsContent value="features">
              <div className="p-4 text-sm text-m3-on-surface-variant">
                The features panel lists the core capabilities and technical specifications.
              </div>
            </TabsContent>
            <TabsContent value="pricing">
              <div className="p-4 text-sm text-m3-on-surface-variant">
                The pricing panel shows available plans and their associated costs.
              </div>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </Section>

      {/* --- Tabs with icons --- */}
      <Section
        title="Tabs with icons"
        description="Combine icons with labels for clearer navigation in primary tab bars."
      >
        <ComponentPreview title="Icon + label tabs" className="flex-col items-stretch">
          <Tabs defaultValue="home">
            <TabsList>
              <TabsTrigger value="home">
                <Home className="size-4" />
                Home
              </TabsTrigger>
              <TabsTrigger value="favorites">
                <Star className="size-4" />
                Favorites
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="size-4" />
                Settings
              </TabsTrigger>
            </TabsList>
            <TabsContent value="home">
              <div className="p-4 text-sm text-m3-on-surface-variant">
                Welcome to the home screen. Browse recent activity and recommendations.
              </div>
            </TabsContent>
            <TabsContent value="favorites">
              <div className="p-4 text-sm text-m3-on-surface-variant">
                Your saved items and bookmarked content appear here.
              </div>
            </TabsContent>
            <TabsContent value="settings">
              <div className="p-4 text-sm text-m3-on-surface-variant">
                Manage your preferences, notifications, and account details.
              </div>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </Section>

      {/* --- Usage --- */}
      <PlatformUsage webCode={usageCode} />

      {/* --- Props --- */}
      <Section title="API Reference">
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-medium text-m3-on-surface mb-3">
              <code className="text-sm bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">Tabs</code>
            </h3>
            <PropsTable props={tabsRootProps} />
          </div>

          <div>
            <h3 className="text-base font-medium text-m3-on-surface mb-3">
              <code className="text-sm bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">TabsList</code>
            </h3>
            <PropsTable props={tabsListProps} />
          </div>

          <div>
            <h3 className="text-base font-medium text-m3-on-surface mb-3">
              <code className="text-sm bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">TabsTrigger</code>
            </h3>
            <PropsTable props={tabsTriggerProps} />
          </div>

          <div>
            <h3 className="text-base font-medium text-m3-on-surface mb-3">
              <code className="text-sm bg-m3-surface-container-high px-1.5 py-0.5 rounded text-m3-primary">TabsContent</code>
            </h3>
            <PropsTable props={tabsContentProps} />
          </div>
        </div>
      </Section>

      {/* --- Accessibility --- */}
      <Section title="Accessibility">
        <AccessibilityNote
          items={[
            'The component implements the WAI-ARIA Tabs pattern with role="tablist", role="tab", and role="tabpanel" applied automatically by Radix UI.',
            'Arrow keys navigate between tabs. Home and End jump to the first and last tab respectively.',
            'The active tab panel is associated with its trigger via aria-controls and aria-labelledby.',
            'Disabled tabs remain in the tab sequence but cannot be activated, preserving keyboard navigation order.',
            'Focus is placed on the trigger element, not the content panel, when switching tabs to maintain a predictable focus flow.',
          ]}
        />
      </Section>

      {/* --- Responsive --- */}
      <Section
        title="Responsive behavior"
        description="How the tabs component adapts across screen sizes."
      >
        <div className="prose prose-sm max-w-none text-m3-on-surface-variant">
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li>
              On wide screens, tabs distribute evenly across the container or use intrinsic widths based on label length.
            </li>
            <li>
              On narrow screens, consider using scrollable tabs (with horizontal overflow and scroll snap) when there are more than three tabs.
            </li>
            <li>
              Icon-and-label tabs can switch to icon-only tabs on compact viewports to save horizontal space. Provide an aria-label on each trigger in this case.
            </li>
            <li>
              Tab content panels should have their own internal responsive layouts, as each panel represents a distinct content area.
            </li>
            <li>
              The active indicator (bottom border) scales with the trigger width and maintains a 3px height at all sizes for clear visual feedback.
            </li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
