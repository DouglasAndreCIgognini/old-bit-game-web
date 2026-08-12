import Link from 'next/link'
import type { ReactNode } from 'react'

type TabsProps = {
  children: ReactNode
}

type TabProps = {
  href: string
  children: ReactNode
  active?: boolean
}

export function Tabs({ children }: TabsProps) {
  return <nav className="flex items-center gap-1">{children}</nav>
}

export function Tab({ href, children, active = false }: TabProps) {
  return (
    <Link
      href={href}
      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? 'bg-primary text-background'
          : 'text-text-muted hover:bg-surface-hover hover:text-text'
      } `}
    >
      {children}
    </Link>
  )
}
