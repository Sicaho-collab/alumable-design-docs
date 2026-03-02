import React from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'tsx',
  className,
}) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn('relative group rounded-m3-md overflow-hidden', className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-m3-surface-container-highest border-b border-m3-outline-variant">
        <span className="text-xs font-medium text-m3-on-surface-variant uppercase tracking-wider">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-m3-on-surface-variant hover:text-m3-on-surface transition-colors"
          aria-label={copied ? 'Copied' : 'Copy code'}
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="!rounded-none !mt-0 border-0">
        <code className={`language-${language}`}>{code.trim()}</code>
      </pre>
    </div>
  )
}
