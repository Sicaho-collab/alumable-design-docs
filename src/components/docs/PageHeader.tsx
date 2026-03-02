import type React from 'react'

interface PageHeaderProps {
  title: string
  description: string
  status?: 'stable' | 'beta' | 'experimental'
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  status = 'stable',
}) => {
  const statusColors = {
    stable: 'bg-green-100 text-green-800',
    beta: 'bg-amber-100 text-amber-800',
    experimental: 'bg-red-100 text-red-800',
  }

  return (
    <div className="border-b border-m3-outline-variant pb-6 mb-8">
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-3xl font-normal text-m3-on-surface">{title}</h1>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>
      <p className="text-base text-m3-on-surface-variant max-w-2xl">{description}</p>
    </div>
  )
}
