import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Card({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'border-border bg-surface w-full overflow-hidden rounded-lg border',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
