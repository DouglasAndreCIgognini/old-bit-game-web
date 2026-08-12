import { cookies } from 'next/headers'

import { ThemeToggleClient } from './themeToggleClient'

export async function ThemeToggle() {
  const cookieStore = await cookies()

  const theme = cookieStore.get('theme')?.value === 'dark' ? 'dark' : 'light'

  return <ThemeToggleClient theme={theme} />
}
