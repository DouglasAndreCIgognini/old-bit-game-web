import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Chip({
  children,
  className,
  ...props
}: ComponentProps<'span'>) {
  return (
    <span
      className={twMerge(
        'bg-surface-hover text-text-muted rounded px-2 py-1 text-xs',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
