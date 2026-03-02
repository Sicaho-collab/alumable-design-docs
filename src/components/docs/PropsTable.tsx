import type React from 'react'

export interface PropDef {
  name: string
  type: string
  default?: string
  required?: boolean
  description: string
}

interface PropsTableProps {
  props: PropDef[]
}

export const PropsTable: React.FC<PropsTableProps> = ({ props: propDefs }) => (
  <div className="overflow-x-auto rounded-m3-md border border-m3-outline-variant">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-m3-surface-container border-b border-m3-outline-variant">
          <th className="text-left py-3 px-4 font-medium text-m3-on-surface">Prop</th>
          <th className="text-left py-3 px-4 font-medium text-m3-on-surface">Type</th>
          <th className="text-left py-3 px-4 font-medium text-m3-on-surface">Default</th>
          <th className="text-left py-3 px-4 font-medium text-m3-on-surface">Description</th>
        </tr>
      </thead>
      <tbody>
        {propDefs.map((prop) => (
          <tr key={prop.name} className="border-b border-m3-outline-variant last:border-0">
            <td className="py-3 px-4">
              <code className="text-m3-primary text-xs font-medium bg-m3-surface-container-high px-1.5 py-0.5 rounded">
                {prop.name}
                {prop.required && <span className="text-m3-error ml-0.5">*</span>}
              </code>
            </td>
            <td className="py-3 px-4">
              <code className="text-xs text-m3-on-surface-variant">{prop.type}</code>
            </td>
            <td className="py-3 px-4">
              <code className="text-xs text-m3-on-surface-variant">
                {prop.default ?? '—'}
              </code>
            </td>
            <td className="py-3 px-4 text-m3-on-surface-variant">{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
