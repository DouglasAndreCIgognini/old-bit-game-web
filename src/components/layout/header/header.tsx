import Image from 'next/image'
import { ThemeToggle } from '../themeToggle'
import { Navigation } from './navigation'
import Link from 'next/link'
import routes from '@/src/i18n/routes.json'

const Header = () => {
  return (
    <div className="border-primary flex items-center justify-around border-b">
      <Link href={routes.HOME}>
        <Image
          src="/logo.png"
          alt="Old bit game logo"
          width={100}
          height={100}
        />
      </Link>
      <Navigation />
      <ThemeToggle />
    </div>
  )
}

export default Header
