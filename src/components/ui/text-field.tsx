import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const textFieldVariants = cva(
  'relative w-full',
  {
    variants: {
      variant: {
        filled: '',
        outlined: '',
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  }
)

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof textFieldVariants> {
  label?: string
  supportingText?: string
  error?: boolean
  errorText?: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  multiline?: boolean
  rows?: number
}

const TextField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>(
  (
    {
      className,
      variant,
      label,
      supportingText,
      error,
      errorText,
      leadingIcon,
      trailingIcon,
      multiline = false,
      rows = 4,
      placeholder,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId()
    const supportId = React.useId()

    // Multiline always uses filled style
    const effectiveVariant = multiline ? 'filled' : variant

    // When a real placeholder is provided alongside a label, the label should
    // already be in its shrunk/top position so the placeholder is visible.
    const hasExplicitPlaceholder = !!placeholder

    return (
      <div className={cn(textFieldVariants({ variant: effectiveVariant }), className)}>
        <div
          className={cn(
            'relative flex',
            multiline ? 'items-start' : 'items-center',
            effectiveVariant === 'filled' &&
              'bg-m3-surface-container-highest rounded-t-m3-xs border-b-2 border-m3-on-surface-variant focus-within:border-m3-primary',
            effectiveVariant === 'outlined' &&
              'border border-m3-outline rounded-m3-xs focus-within:border-2 focus-within:border-m3-primary',
            error && 'border-m3-error focus-within:border-m3-error'
          )}
        >
          {leadingIcon && (
            <span className="pl-3 text-m3-on-surface-variant [&_svg]:size-5">
              {leadingIcon}
            </span>
          )}
          <div className="relative flex-1 min-w-0">
            {multiline ? (
              <textarea
                ref={ref as React.Ref<HTMLTextAreaElement>}
                id={inputId}
                rows={rows}
                aria-describedby={supportingText || errorText ? supportId : undefined}
                aria-invalid={error}
                placeholder={hasExplicitPlaceholder ? placeholder : label}
                className={cn(
                  'peer w-full bg-transparent outline-none text-m3-on-surface text-base resize-vertical px-4 pb-2 leading-relaxed',
                  // When label is present and at top, need top padding for the label
                  // When no label, less top padding needed
                  label ? 'pt-6' : 'pt-3',
                  // Only hide placeholder when we're using it as a label trigger (no explicit placeholder)
                  !hasExplicitPlaceholder && 'placeholder-transparent',
                  // Show real placeholder in muted color
                  hasExplicitPlaceholder && 'placeholder-m3-on-surface-variant/60',
                  leadingIcon && 'pl-2'
                )}
                {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
              />
            ) : (
              <input
                ref={ref as React.Ref<HTMLInputElement>}
                id={inputId}
                aria-describedby={supportingText || errorText ? supportId : undefined}
                aria-invalid={error}
                placeholder={hasExplicitPlaceholder ? placeholder : label}
                className={cn(
                  'peer w-full bg-transparent outline-none text-m3-on-surface text-base h-14 px-4 pt-5 pb-1',
                  !hasExplicitPlaceholder && 'placeholder-transparent',
                  hasExplicitPlaceholder && 'placeholder-m3-on-surface-variant/60',
                  leadingIcon && 'pl-2',
                  trailingIcon && 'pr-2'
                )}
                {...props}
              />
            )}
            {label && (
              <label
                htmlFor={inputId}
                className={cn(
                  'absolute pointer-events-none transition-all duration-200 origin-top-left',
                  multiline
                    ? cn(
                        // Multiline filled label
                        hasExplicitPlaceholder
                          // With explicit placeholder: label is ALWAYS shrunk at top
                          ? 'left-4 right-4 top-0 pt-1 pb-0.5 z-[1] bg-m3-surface-container-highest text-xs text-m3-on-surface-variant'
                          // Without explicit placeholder: label starts inside, moves to top on focus/has-value
                          : cn(
                              'left-4 right-4 text-m3-on-surface-variant text-base',
                              // Default: inside the field at first-line position
                              'top-4',
                              // Focused: shrink and move to top with opaque bg
                              'peer-focus:top-0 peer-focus:pt-1 peer-focus:pb-0.5 peer-focus:text-xs peer-focus:z-[1] peer-focus:bg-m3-surface-container-highest',
                              // Has value: same as focused position
                              'peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:pt-1 peer-[:not(:placeholder-shown)]:pb-0.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:z-[1] peer-[:not(:placeholder-shown)]:bg-m3-surface-container-highest'
                            )
                      )
                    : cn(
                        // Single-line label
                        'text-m3-on-surface-variant text-base',
                        hasExplicitPlaceholder
                          // With explicit placeholder: always shrunk at top
                          ? effectiveVariant === 'outlined'
                            ? 'left-4 -top-0 -translate-y-1/2 text-xs bg-white px-1'
                            : 'left-4 top-1 translate-y-0 text-xs'
                          // Without explicit placeholder: animate on focus/has-value
                          : cn(
                              'left-4 top-1/2 -translate-y-1/2',
                              effectiveVariant === 'outlined'
                                ? 'peer-focus:-top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1'
                                : 'peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs'
                            ),
                        leadingIcon && 'left-2'
                      ),
                  // Color states
                  error
                    ? 'text-m3-error peer-focus:text-m3-error'
                    : 'peer-focus:text-m3-primary'
                )}
              >
                {label}
              </label>
            )}
          </div>
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

export { TextField, textFieldVariants }
