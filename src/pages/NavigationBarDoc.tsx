import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { PropsTable } from '@/components/docs/PropsTable'
import { NavigationBar } from '@/components/ui/navigation-bar'
import { Home, Search, Bookmark, Person } from 'lucide-react'

const navItems = [
  { label: 'Home', icon: <Home className="size-6" /> },
  { label: 'Search', icon: <Search className="size-6" />, badge: 3 },
  { label: 'Saved', icon: <Bookmark className="size-6" /> },
  { label: 'Profile', icon: <Person className="size-6" /> },
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
        <CodeBlock>{`<NavigationBar items={items} activeIndex={0} onSelect={setActive} />`}</CodeBlock>
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: 'items', type: 'NavBarItem[]', required: true, description: 'Array of navigation items with label, icon, and optional badge' },
          { name: 'activeIndex', type: 'number', required: true, description: 'Index of the active item' },
          { name: 'onSelect', type: '(index: number) => void', required: true, description: 'Callback when an item is selected' },
        ]} />
      </Section>
    </div>
  )
}
