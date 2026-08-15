export interface Game {
  id: number
  title: string
  link: string
  platform: string
  core: string
  played_count: string
  description: string | null
  image_url: string | null
  categories: [
    {
      category: {
        id: number
        name: string
      }
    },
  ]
  created_at: Date
  updated_at: Date
}

export const orderOptions = [
  { value: 'title', label: 'Título' },
  { value: 'platform', label: 'Plataforma' },
  { value: 'played_count', label: 'Mais jogados' },
  { value: 'created_at', label: 'Recentes' },
]

export const platformOptions = [
  { value: '', label: 'Todas' },
  { value: 'atari 2600', label: 'Atari 2600' },
  { value: 'atari 5200', label: 'Atari 5200' },
  { value: 'atari 7800', label: 'Atari 7800' },
  { value: 'atari jaguar', label: 'Atari Jaguar' },
  { value: 'atari lynx', label: 'Atari Lynx' },
  { value: 'bandai wonderswan', label: 'Bandai Wonderswan' },
  { value: 'colecovision', label: 'Colecovision' },
  { value: 'commodore 64', label: 'Commodore 64' },
  { value: 'commodore amiga', label: 'Commodore Amiga' },
  { value: 'microsoft msx', label: 'Microsoft MSX' },
  {
    value: 'nec pc engine cd turbografx cd',
    label: 'PC Engine',
  },
  { value: 'nec pc engine supergrafx', label: 'PC Engine Supergrafx' },
  {
    value: 'nec pc engine turbografx 16',
    label: 'Turbografx 16',
  },
  { value: 'nintendo 64', label: 'Nintendo 64' },
  { value: 'nintendo ds', label: 'Nintendo ds' },
  { value: 'nintendo fds', label: 'Nintendo Family Computer Disk System' },
  { value: 'nintendo gameboy', label: 'Gameboy' },
  { value: 'nintendo gameboy advance', label: 'Gameboy Advance' },
  { value: 'nintendo gameboy color', label: 'Gameboy Color' },
  { value: 'nintendo nes', label: 'NES' },
  { value: 'nintendo snes', label: 'Super Nintendo' },
  { value: 'nintendo virtualboy', label: 'Virtualboy' },
  { value: 'panasonic 3do', label: 'Panasonic 3DO' },
  { value: 'ps1', label: 'Playstation' },
  { value: 'sega 32x', label: 'Sega 32x' },
  { value: 'sega cd', label: 'Sega CD' },
  { value: 'sega gamegear', label: 'Gamegear' },
  { value: 'sega genesis', label: 'Sega Genesis' },
  { value: 'sega saturn', label: 'Sega Saturn' },
  { value: 'sega sg1000', label: 'Sega sg1000' },
  { value: 'sega sms', label: 'Master System' },
  { value: 'snk ngpc', label: 'NeoGeo Pocket Color' },
]
