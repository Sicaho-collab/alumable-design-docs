import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  supportingText?: string
  error?: boolean
  errorText?: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  multiline?: boolean
  rows?: number
  variant?: 'filled' | 'outlined'
}

const TextField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>(
  (
    {
      className,
      label,
      supportingText,
      error,
      errorText,
      leadingIcon,
      trailingIcon,
      multiline = false,
      rows = 4,
      variant = 'filled',
      disabled,
      placeholder,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId()
    const supportId = React.useId()

    return (
      <div className={cn('relative w-full', className)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block mb-1.5 text-sm text-m3-on-surface-variant',
              error && 'text-m3-error'
            )}
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            'relative flex',
            multiline ? 'items-start' : 'items-center',
            variant === 'filled' &&
              'bg-white rounded-t-m3-xs border-b-2 border-m3-on-surface-variant focus-within:border-m3-primary',
            variant === 'outlined' &&
              'border border-m3-outline rounded-m3-xs focus-within:border-2 focus-within:border-m3-primary',
            error && 'border-m3-error focus-within:border-m3-error',
            disabled && 'opacity-38 pointer-events-none border-m3-on-surface/12'
          )}
        >
          {leadingIcon && (
            <span className={cn(
              'pl-3 text-m3-on-surface-variant [&_svg]:size-5',
              multiline && 'pt-3'
            )}>
              {leadingIcon}
            </span>
          )}
          {multiline ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              id={inputId}
              rows={rows}
              disabled={disabled}
              aria-describedby={supportingText || errorText ? supportId : undefined}
              aria-invalid={error}
              placeholder={placeholder}
              className={cn(
                'w-full bg-transparent outline-none text-m3-on-surface text-base resize-vertical leading-relaxed px-4 py-3 placeholder-m3-on-surface-variant/60',
                leadingIcon && 'pl-2',
                disabled && 'text-m3-on-surface/38 cursor-not-allowed'
              )}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              id={inputId}
              disabled={disabled}
              aria-describedby={supportingText || errorText ? supportId : undefined}
              aria-invalid={error}
              placeholder={placeholder}
              className={cn(
                'w-full bg-transparent outline-none text-m3-on-surface text-base h-14 px-4 placeholder-m3-on-surface-variant/60',
                leadingIcon && 'pl-2',
                trailingIcon && 'pr-2',
                disabled && 'text-m3-on-surface/38 cursor-not-allowed'
              )}
              {...props}
            />
          )}
          {!multiline && trailingIcon && (
            <span className="pr-3 text-m3-on-surface-variant [&_svg]:size-5">
              {trailingIcon}
            </span>
          )}
        </div>
        {(supportingText || errorText) && (
          <p
            id={supportId}
            className={cn(
              'text-xs mt-1 px-4',
              error ? 'text-m3-error' : 'text-m3-on-surface-variant'
            )}
          >
            {error ? errorText : supportingText}
          </p>
        )}
      </div>
    )
  }
)
TextField.displayName = 'TextField'

export { TextField }
