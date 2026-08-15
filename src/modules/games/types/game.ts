export interface Game {
  id: number
  title: string
  link: string
  platform: string
  core: string
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
