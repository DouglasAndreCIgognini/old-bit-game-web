import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`border-border bg-surface text-text hover:bg-surface-hover rounded-lg border px-3 py-2 transition ${className} `}
      {...props}
    />
  )
}
