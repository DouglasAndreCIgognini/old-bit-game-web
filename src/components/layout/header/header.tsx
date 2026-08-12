import Image from 'next/image'
import { ThemeToggle } from '../themeToggle'
import { Navigation } from './navigation'

const Header = () => {
  return (
    <div className="border-primary flex items-center justify-around border-b">
      <Image src="/logo.png" alt="Old bit game logo" width={100} height={100} />
      <Navigation />
      <ThemeToggle />
    </div>
  )
}

export default Header
