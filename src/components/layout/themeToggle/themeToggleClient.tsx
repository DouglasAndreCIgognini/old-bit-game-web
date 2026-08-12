'use client'

import { Button } from '@/src/components/ui/button'

type ThemeToggleClientProps = {
  theme: 'light' | 'dark'
}

export function ThemeToggleClient({ theme }: ThemeToggleClientProps) {
  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`

    document.documentElement.classList.toggle('dark', newTheme === 'dark')

    window.location.reload()
  }

  return (
    <Button type="button" onClick={toggleTheme}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </Button>
  )
}
