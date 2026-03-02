import type React from 'react'
import { ShieldCheck } from 'lucide-react'

interface AccessibilityNoteProps {
  items: string[]
}

export const AccessibilityNote: React.FC<AccessibilityNoteProps> = ({ items }) => (
  <div className="rounded-m3-md bg-m3-primary-container/30 border border-m3-primary/20 p-4">
    <div className="flex items-center gap-2 mb-3">
      <ShieldCheck className="size-5 text-m3-primary" />
      <h4 className="font-medium text-m3-on-surface text-sm">Accessibility</h4>
    </div>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-m3-on-surface-variant">
          <span className="text-m3-primary mt-1 text-xs">●</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
)
