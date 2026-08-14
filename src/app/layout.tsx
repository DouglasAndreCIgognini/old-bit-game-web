import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/layout/header/header'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'Old bit game',
}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const cookieStore = await cookies()

  const theme = cookieStore.get('theme')?.value
  return (
    <html lang="pt-BR" className={theme}>
      <body className="bg-background flex min-h-full flex-col">
        <Header />
        {children}
      </body>
    </html>
  )
}
