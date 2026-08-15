import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Input({ className, ...props }: ComponentProps<'input'>) {
  return (
    <input
      className={twMerge(
        'border-border bg-background text-text placeholder:text-text-muted focus:border-primary w-full rounded-md border px-3 py-2 text-sm transition outline-none',
        className,
      )}
      {...props}
    />
  )
}
