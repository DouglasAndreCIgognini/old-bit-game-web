import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type SelectOption = {
  value: string
  label: string
}

type SelectProps = ComponentProps<'select'> & {
  options: SelectOption[]
}

export function Select({ options, className, ...props }: SelectProps) {
  return (
    <select
      className={twMerge(
        'border-border bg-background text-text focus:border-primary rounded-md border px-3 py-2 transition outline-none',
        className,
      )}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value || 'empty'} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
