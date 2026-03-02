import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  SquareMousePointer,
  Bell,
  RectangleHorizontal,
  LayoutList,
  ToggleRight,
  TextCursorInput,
  ArrowRight,
  Sparkles,
  Eye,
  Palette,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const componentCategories = [
  {
    title: 'Actions',
    description: 'Buttons, FABs, and icon buttons for user interactions',
    icon: <SquareMousePointer className="size-5" />,
    path: '/components/button',
    color: 'bg-m3-primary',
    onColor: 'text-m3-on-primary',
  },
  {
    title: 'Communication',
    description: 'Badges, progress indicators, snackbars, and tooltips',
    icon: <Bell className="size-5" />,
    path: '/components/badge',
    color: 'bg-m3-secondary',
    onColor: 'text-m3-on-secondary',
  },
  {
    title: 'Containment',
    description: 'Cards and dialogs for grouping related content',
    icon: <RectangleHorizontal className="size-5" />,
    path: '/components/card',
    color: 'bg-m3-tertiary',
    onColor: 'text-m3-on-tertiary',
  },
  {
    title: 'Navigation',
    description: 'Tabs and chips for navigating between views',
    icon: <LayoutList className="size-5" />,
    path: '/components/tabs',
    color: 'bg-m3-primary',
    onColor: 'text-m3-on-primary',
  },
  {
    title: 'Selection',
    description: 'Checkboxes, radios, switches, and sliders',
    icon: <ToggleRight className="size-5" />,
    path: '/components/checkbox',
    color: 'bg-m3-secondary',
    onColor: 'text-m3-on-secondary',
  },
  {
    title: 'Text Input',
    description: 'Text fields for capturing user input',
    icon: <TextCursorInput className="size-5" />,
    path: '/components/text-field',
    color: 'bg-m3-tertiary',
    onColor: 'text-m3-on-tertiary',
  },
]

const designPrinciples = [
  {
    icon: <Sparkles className="size-6" />,
    title: 'Adaptive',
    description:
      'Components adapt seamlessly across screen sizes and devices, providing a consistent experience from mobile to desktop.',
  },
  {
    icon: <Eye className="size-6" />,
    title: 'Accessible',
    description:
      'Built with accessibility as a first-class concern. Proper ARIA attributes, keyboard navigation, and contrast ratios are baked in.',
  },
  {
    icon: <Palette className="size-6" />,
    title: 'Expressive',
    description:
      'The M3 color system and dynamic theming let you express your brand while maintaining visual harmony and readability.',
  },
]

export default function GettingStarted() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-m3-xl bg-m3-primary-container px-8 py-16 text-center">
        <div className="relative z-10">
          <p className="text-sm font-medium uppercase tracking-widest text-m3-on-primary-container/70 mb-3">
            React + Tailwind v4
          </p>
          <h1 className="text-5xl font-normal text-m3-on-primary-container mb-4 tracking-tight">
            M3 Design System
          </h1>
          <p className="text-lg text-m3-on-primary-container/80 max-w-xl mx-auto mb-8">
            A comprehensive component library built on Material Design 3 principles, powered by
            shadcn/ui architecture and Tailwind CSS v4 design tokens.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button asChild>
              <Link to="/components/button">
                Explore Components
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outlined" asChild>
              <Link to="/tokens">View Design Tokens</Link>
            </Button>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 size-64 rounded-full bg-m3-primary/10" />
        <div className="absolute -bottom-16 -left-16 size-48 rounded-full bg-m3-tertiary/10" />
      </section>

      {/* Component Categories */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-normal text-m3-on-surface mb-1">Component Categories</h2>
          <p className="text-sm text-m3-on-surface-variant">
            Browse components organized by their role in the interface.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {componentCategories.map((category) => (
            <Link key={category.title} to={category.path} className="group">
              <Card
                variant="outlined"
                className="h-full transition-all duration-200 group-hover:border-m3-primary group-hover:shadow-m3-1"
              >
                <CardHeader>
                  <div
                    className={`inline-flex items-center justify-center size-10 rounded-m3-md ${category.color} ${category.onColor} mb-2`}
                  >
                    {category.icon}
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-m3-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Browse
                    <ArrowRight className="size-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Installation */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-normal text-m3-on-surface mb-1">Installation</h2>
          <p className="text-sm text-m3-on-surface-variant">
            Get started by installing the required dependencies.
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-m3-md overflow-hidden">
            <div className="flex items-center px-4 py-2 bg-m3-surface-container-highest border-b border-m3-outline-variant">
              <span className="text-xs font-medium text-m3-on-surface-variant uppercase tracking-wider">
                bash
              </span>
            </div>
            <pre className="!rounded-none !mt-0 border-0">
              <code className="language-bash">
                {`# Install core dependencies
npm install react react-dom react-router-dom

# Install UI primitives
npm install @radix-ui/react-slot class-variance-authority
npm install tailwind-merge clsx

# Install icon library
npm install lucide-react`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-normal text-m3-on-surface mb-1">Quick Usage</h2>
          <p className="text-sm text-m3-on-surface-variant">
            Import and use components directly in your React application.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-m3-md overflow-hidden">
            <div className="flex items-center px-4 py-2 bg-m3-surface-container-highest border-b border-m3-outline-variant">
              <span className="text-xs font-medium text-m3-on-surface-variant uppercase tracking-wider">
                tsx
              </span>
            </div>
            <pre className="!rounded-none !mt-0 border-0 text-sm">
              <code className="language-tsx">
                {`import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function MyComponent() {
  return (
    <Card variant="elevated">
      <CardContent>
        <h2>Welcome</h2>
        <p>Get started with M3 components.</p>
        <Button variant="filled">
          Get Started
        </Button>
      </CardContent>
    </Card>
  )
}`}
              </code>
            </pre>
          </div>
          <Card variant="filled" className="flex items-center justify-center p-8">
            <div className="text-center space-y-3">
              <h3 className="text-lg font-medium text-m3-on-surface">Welcome</h3>
              <p className="text-sm text-m3-on-surface-variant">
                Get started with M3 components.
              </p>
              <Button variant="filled">Get Started</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Design Principles */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-normal text-m3-on-surface mb-1">Design Principles</h2>
          <p className="text-sm text-m3-on-surface-variant">
            Core principles that guide every component in this system.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {designPrinciples.map((principle) => (
            <Card key={principle.title} variant="outlined" className="h-full">
              <CardContent className="pt-6">
                <div className="text-m3-primary mb-4">{principle.icon}</div>
                <h3 className="text-lg font-medium text-m3-on-surface mb-2">{principle.title}</h3>
                <p className="text-sm text-m3-on-surface-variant leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
