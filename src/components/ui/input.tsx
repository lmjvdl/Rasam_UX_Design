import * as React from 'react'
import { cn } from '@/utils/ui/globals'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, inputIcon = null, ...props }, ref) => {
    return (
      <div className='relative'>
        <div className='absolute left-0.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center overflow-hidden px-1.5 text-muted-foreground'>
          {inputIcon}
        </div>
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-lg border border-input bg-white px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground hover:border-gray-300 focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
