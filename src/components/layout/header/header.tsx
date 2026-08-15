import Image from 'next/image'
import { ThemeToggle } from '../themeToggle'
import Link from 'next/link'
import routes from '@/src/i18n/routes.json'
import { SearchBar } from './searchBar'

const Header = () => {
  return (
    <header className="border-primary bg-background/95 sticky top-0 z-20 border-b backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href={routes.HOME} className="shrink-0">
          <Image
            src="/logo.png"
            alt="Old bit game logo"
            width={100}
            height={100}
          />
        </Link>

        <div className="flex flex-1 justify-center px-2">
          <SearchBar className="w-full max-w-xl" />
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
