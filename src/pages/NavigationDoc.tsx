import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { PropsTable, type PropDef } from '@/components/docs/PropsTable'
import { AccessibilityNote } from '@/components/docs/AccessibilityNote'
import { NavigationRail } from '@/components/ui/navigation-rail'
import { NavigationBar } from '@/components/ui/navigation-bar'
import { Home, Search, Bookmark, Settings, Plus, Bell, User, Mail, Monitor, Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'

// ── Shared nav items ──
const railItems = [
  { label: 'Home', icon: <Home className="size-6" /> },
  { label: 'Search', icon: <Search className="size-6" />, badge: true },
  { label: 'Saved', icon: <Bookmark className="size-6" />, badge: 3 },
  { label: 'Settings', icon: <Settings className="size-6" /> },
]

const barItems = [
  { label: 'Home', icon: <Home className="size-6" /> },
  { label: 'Search', icon: <Search className="size-6" />, badge: 3 },
  { label: 'Saved', icon: <Bookmark className="size-6" /> },
  { label: 'Profile', icon: <User className="size-6" /> },
]

const railItemsAlt = [
  { label: 'Home', icon: <Home className="size-6" /> },
  { label: 'Notifications', icon: <Bell className="size-6" />, badge: 12 },
  { label: 'Messages', icon: <Mail className="size-6" /> },
  { label: 'Profile', icon: <User className="size-6" /> },
]

// ── Props definitions ──
const navRailProps: PropDef[] = [
  { name: 'items', type: 'NavRailItem[]', required: true, description: 'Array of navigation items to display' },
  { name: 'activeIndex', type: 'number', required: true, description: 'Index of the currently active item' },
  { name: 'onSelect', type: '(index: number) => void', required: true, description: 'Called when an item is selected' },
  { name: 'fab', type: 'ReactNode', description: 'Optional FAB element rendered below the menu button' },
  { name: 'expanded', type: 'boolean', description: 'Controlled expanded state — shows labels beside icons when true' },
  { name: 'onExpandedChange', type: '(expanded: boolean) => void', description: 'Called when the collapse/expand toggle is clicked' },
  { name: 'defaultExpanded', type: 'boolean', default: 'false', description: 'Default expanded state for uncontrolled mode' },
  { name: 'alignment', type: "'top' | 'center' | 'bottom'", default: "'top'", description: 'Vertical alignment of navigation items' },
  { name: 'hideMenuButton', type: 'boolean', default: 'false', description: 'Hide the collapse/expand toggle button' },
  { name: 'className', type: 'string', description: 'Additional CSS class name' },
]

const navBarProps: PropDef[] = [
  { name: 'items', type: 'NavBarItem[]', required: true, description: 'Array of navigation items with label, icon, and optional badge' },
  { name: 'activeIndex', type: 'number', required: true, description: 'Index of the active item' },
  { name: 'onSelect', type: '(index: number) => void', required: true, description: 'Callback when an item is selected' },
  { name: 'className', type: 'string', description: 'Additional CSS class name (web)' },
  { name: 'style', type: 'ViewStyle', description: 'Additional style object (mobile)' },
]

const navItemProps: PropDef[] = [
  { name: 'label', type: 'string', required: true, description: 'Text label for the navigation item' },
  { name: 'icon', type: 'ReactNode', required: true, description: 'Icon element (default state)' },
  { name: 'activeIcon', type: 'ReactNode', description: 'Icon element when item is active (e.g. filled variant)' },
  { name: 'badge', type: 'number | boolean', description: 'Badge indicator — boolean for dot, number for count' },
]

// ── Code examples ──
const webBasicCode = `import { NavigationRail } from '@alumable/ui-web'
import { Home, Search, Bookmark, Settings } from 'lucide-react'

const items = [
  { label: 'Home', icon: <Home /> },
  { label: 'Search', icon: <Search />, badge: true },
  { label: 'Saved', icon: <Bookmark />, badge: 3 },
  { label: 'Settings', icon: <Settings /> },
]

<NavigationRail
  items={items}
  activeIndex={active}
  onSelect={setActive}
/>`

const webExpandedCode = `// Controlled expand/collapse
const [expanded, setExpanded] = useState(false)

<NavigationRail
  items={items}
  activeIndex={active}
  onSelect={setActive}
  expanded={expanded}
  onExpandedChange={setExpanded}
/>`

const webFabCode = `<NavigationRail
  items={items}
  activeIndex={active}
  onSelect={setActive}
  fab={
    <button className="flex items-center justify-center size-14 rounded-m3-lg bg-m3-primary-container text-m3-on-primary-container shadow-m3-1">
      <Plus className="size-6" />
    </button>
  }
/>`

const appWebCode = `import { NavigationBar } from '@alumable/ui-web'
import { Home, Search, Bookmark, User } from 'lucide-react'

const items = [
  { label: 'Home', icon: <Home /> },
  { label: 'Search', icon: <Search />, badge: 3 },
  { label: 'Saved', icon: <Bookmark /> },
  { label: 'Profile', icon: <User /> },
]

<NavigationBar
  items={items}
  activeIndex={active}
  onSelect={setActive}
/>`

const appMobileCode = `import { NavigationBar } from '@alumable/ui-mobile'
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
/>`

export default function NavigationDoc() {
  const [tab, setTab] = useState<'web' | 'app'>('web')

  // Web states
  const [railActive1, setRailActive1] = useState(0)
  const [railActive2, setRailActive2] = useState(0)
  const [expanded2, setExpanded2] = useState(false)
  const [railActive3, setRailActive3] = useState(0)
  const [railActive4, setRailActive4] = useState(0)

  // App states
  const [barActive, setBarActive] = useState(0)

  return (
    <div className="space-y-12">
      <PageHeader
        title="Navigation"
        description="Navigation components for switching between top-level destinations. Web uses a side rail, mobile uses a bottom bar."
        status="stable"
      />

      {/* ── Platform Tabs ── */}
      <div className="flex gap-2 border-b border-m3-outline-variant pb-0">
        <button
          onClick={() => setTab('web')}
          className={cn(
            'flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px',
            tab === 'web'
              ? 'border-m3-primary text-m3-primary'
              : 'border-transparent text-m3-on-surface-variant hover:text-m3-on-surface hover:border-m3-outline-variant'
          )}
        >
          <Monitor className="size-4" />
          Web
        </button>
        <button
          onClick={() => setTab('app')}
          className={cn(
            'flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px',
            tab === 'app'
              ? 'border-m3-primary text-m3-primary'
              : 'border-transparent text-m3-on-surface-variant hover:text-m3-on-surface hover:border-m3-outline-variant'
          )}
        >
          <Smartphone className="size-4" />
          App
        </button>
      </div>

      {/* ══════════════════════════════════════════════
          WEB TAB — Navigation Rail
          ══════════════════════════════════════════════ */}
      {tab === 'web' && (
        <>
          <Section
            title="Navigation Rail"
            description="Vertical side navigation for tablet and desktop layouts. Includes a collapse/expand toggle, optional FAB, and M3 interaction states."
          >
            <ComponentPreview className="p-0 overflow-hidden rounded-m3-md min-h-[360px] flex justify-start items-stretch">
              <NavigationRail items={railItems} activeIndex={railActive1} onSelect={setRailActive1} />
              <div className="flex-1 flex items-center justify-center text-m3-on-surface-variant text-sm">
                Content area
              </div>
            </ComponentPreview>
            <CodeBlock code={webBasicCode} language="tsx" />
          </Section>

          <Section
            title="Controlled Expand / Collapse"
            description="Use the expanded and onExpandedChange props for controlled state. In expanded mode, labels appear beside icons."
          >
            <ComponentPreview className="p-0 overflow-hidden rounded-m3-md min-h-[360px] flex justify-start items-stretch">
              <NavigationRail
                items={railItemsAlt}
                activeIndex={railActive2}
                onSelect={setRailActive2}
                expanded={expanded2}
                onExpandedChange={setExpanded2}
              />
              <div className="flex-1 flex flex-col items-center justify-center gap-2 text-sm">
                <span className="text-m3-on-surface-variant">
                  Rail is {expanded2 ? 'expanded' : 'collapsed'}
                </span>
                <button
                  onClick={() => setExpanded2(!expanded2)}
                  className="px-4 py-2 rounded-m3-full bg-m3-primary text-m3-on-primary text-sm font-medium"
                >
                  Toggle from outside
                </button>
              </div>
            </ComponentPreview>
            <CodeBlock code={webExpandedCode} language="tsx" />
          </Section>

          <Section
            title="With FAB"
            description="Place a Floating Action Button below the menu toggle using the fab prop."
          >
            <ComponentPreview className="p-0 overflow-hidden rounded-m3-md min-h-[360px] flex justify-start items-stretch">
              <NavigationRail
                items={railItems}
                activeIndex={railActive3}
                onSelect={setRailActive3}
                fab={
                  <button className="flex items-center justify-center size-14 rounded-m3-lg bg-m3-primary-container text-m3-on-primary-container shadow-m3-1 hover:shadow-m3-2 active:shadow-m3-1 transition-shadow">
                    <Plus className="size-6" />
                  </button>
                }
              />
              <div className="flex-1 flex items-center justify-center text-m3-on-surface-variant text-sm">
                Content area
              </div>
            </ComponentPreview>
            <CodeBlock code={webFabCode} language="tsx" />
          </Section>

          <Section
            title="Alignment"
            description="Destinations can be aligned to the top (default), center, or bottom of the rail."
          >
            <ComponentPreview className="p-0 overflow-hidden rounded-m3-md min-h-[360px] flex justify-start items-stretch">
              <NavigationRail
                items={railItems.slice(0, 3)}
                activeIndex={railActive4}
                onSelect={setRailActive4}
                alignment="center"
                hideMenuButton
              />
              <div className="flex-1 flex items-center justify-center text-m3-on-surface-variant text-sm">
                Center-aligned (no menu button)
              </div>
            </ComponentPreview>
          </Section>

          <Section title="API Reference — NavigationRail">
            <PropsTable props={navRailProps} />
          </Section>

          <Section title="API Reference — NavRailItem">
            <PropsTable props={navItemProps} />
          </Section>

          <Section title="Accessibility">
            <AccessibilityNote
              items={[
                'Uses <nav> landmark with aria-label for screen readers',
                'Active item is marked with aria-current="page"',
                'Menu toggle has aria-expanded and descriptive aria-label',
                'All items are keyboard focusable with visible focus-visible ring',
                'Hover, pressed, and focus states follow M3 state layer guidelines',
                'Badge counts are conveyed to assistive technology',
              ]}
            />
          </Section>
        </>
      )}

      {/* ══════════════════════════════════════════════
          APP TAB — Navigation Bar
          ══════════════════════════════════════════════ */}
      {tab === 'app' && (
        <>
          <Section
            title="Navigation Bar"
            description="Bottom tab bar for mobile apps. Available on both web and React Native with the same props API."
          >
            <ComponentPreview className="p-0 overflow-hidden rounded-m3-md">
              <NavigationBar items={barItems} activeIndex={barActive} onSelect={setBarActive} />
            </ComponentPreview>
          </Section>

          <Section title="Web Usage" description="Import from @alumable/ui-web for web applications.">
            <CodeBlock code={appWebCode} language="tsx" />
          </Section>

          <Section title="Mobile Usage" description="Import from @alumable/ui-mobile for React Native apps.">
            <CodeBlock code={appMobileCode} language="tsx" />
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

          <Section title="API Reference — NavigationBar">
            <PropsTable props={navBarProps} />
          </Section>

          <Section title="API Reference — NavBarItem">
            <PropsTable props={navItemProps} />
          </Section>

          <Section title="Accessibility">
            <AccessibilityNote
              items={[
                'Each item has accessibilityRole="tab" (mobile) or role within nav (web)',
                'Active state conveyed via aria-current or accessibilityState',
                'Badge counts announced to screen readers',
                'Minimum 44pt touch targets on mobile',
                'Keyboard navigable on web',
              ]}
            />
          </Section>
        </>
      )}
    </div>
  )
}
