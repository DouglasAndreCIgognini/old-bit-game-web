import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Old bit game',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
