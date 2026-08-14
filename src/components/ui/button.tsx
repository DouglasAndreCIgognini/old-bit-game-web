import type { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className = '', ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'border-border bg-surface text-text hover:bg-surface-hover cursor-pointer rounded-lg border px-3 py-2 transition',
        className,
      )}
      {...props}
    />
  )
}
