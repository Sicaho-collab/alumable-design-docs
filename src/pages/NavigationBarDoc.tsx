import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { PropsTable } from '@/components/docs/PropsTable'
import { NavigationBar } from '@/components/ui/navigation-bar'
import { Home, Search, Bookmark, User } from 'lucide-react'

const navItems = [
  { label: 'Home', icon: <Home className="size-6" /> },
  { label: 'Search', icon: <Search className="size-6" />, badge: 3 },
  { label: 'Saved', icon: <Bookmark className="size-6" /> },
  { label: 'Profile', icon: <User className="size-6" /> },
]

export default function NavigationBarDoc() {
  const [active, setActive] = useState(0)
  return (
    <div className="space-y-12">
      <PageHeader title="Navigation Bar" description="Navigation bars let users switch between top-level destinations in an app. They appear at the bottom of the screen on mobile." />
      <Section title="Navigation Bar">
        <ComponentPreview className="p-0 overflow-hidden rounded-m3-md">
          <NavigationBar items={navItems} activeIndex={active} onSelect={setActive} />
        </ComponentPreview>
        <CodeBlock code={`<NavigationBar items={items} activeIndex={0} onSelect={setActive} />`} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: 'items', type: 'NavBarItem[]', required: true, description: 'Array of navigation items with label, icon, and optional badge' },
          { name: 'activeIndex', type: 'number', required: true, description: 'Index of the active item' },
          { name: 'onSelect', type: '(index: number) => void', required: true, description: 'Callback when an item is selected' },
          { name: 'className', type: 'string', description: 'Additional CSS class name (web only)' },
          { name: 'style', type: 'ViewStyle', description: 'Additional style object (mobile only)' },
        ]} />
      </Section>

      <Section title="Platform Availability">
        <div className="grid grid-cols-2 gap-4 max-w-md">
          <div className="flex items-center gap-2 rounded-m3-sm bg-m3-surface-container-low px-4 py-3">
            <span className="text-sm font-medium text-m3-on-surface">Web</span>
            <span className="ml-auto text-xs font-medium text-m3-primary bg-m3-primary-container px-2 py-0.5 rounded-m3-full">Available</span>
          </div>
          <div className="flex items-center gap-2 rounded-m3-sm bg-m3-surface-container-low px-4 py-3">
            <span className="text-sm font-medium text-m3-on-surface">Mobile</span>
            <span className="ml-auto text-xs font-medium text-m3-primary bg-m3-primary-container px-2 py-0.5 rounded-m3-full">Available</span>
          </div>
        </div>
      </Section>

      <Section
        title="Mobile Usage"
        description="The mobile NavigationBar uses React Native primitives and StyleSheet. Import from @alumable/ui-mobile."
      >
        <CodeBlock code={`import { NavigationBar } from '@alumable/ui-mobile'
import { Ionicons } from '@expo/vector-icons'

const items = [
  { label: 'Home', icon: <Ionicons name="home-outline" size={24} /> },
  { label: 'Search', icon: <Ionicons name="search-outline" size={24} />, badge: 3 },
  { label: 'Saved', icon: <Ionicons name="bookmark-outline" size={24} /> },
  { label: 'Profile', icon: <Ionicons name="person-outline" size={24} /> },
]

<NavigationBar
  items={items}
  activeIndex={active}
  onSelect={setActive}
/>`} />
        <div className="mt-4 rounded-m3-sm bg-m3-surface-container-lowest border border-m3-outline-variant p-4 text-sm text-m3-on-surface-variant space-y-2">
          <p><strong>Mobile implementation notes:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Uses <code>StyleSheet.create()</code> only — no Tailwind</li>
            <li>Imports tokens directly from <code>@alumable/design-tokens</code></li>
            <li>Minimum 44pt touch targets on all items</li>
            <li>Same props API as web (<code>items</code>, <code>activeIndex</code>, <code>onSelect</code>)</li>
            <li>Uses <code>accessibilityRole="tab"</code> and <code>accessibilityState</code> for screen readers</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
