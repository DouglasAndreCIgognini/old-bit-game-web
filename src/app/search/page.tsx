import { getAllGames } from '@/src/modules/games/services/getAllgames'
import GamePage from '@/src/modules/games/components/gamePage'
import routes from '@/src/i18n/routes.json'

type SearchPageProps = {
  searchParams: Promise<{
    page?: string
    limit?: string
    orderBy?: string
    order?: string
    q?: string
    platform?: string
  }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams

  const page = Number(params.page) || 1
  const limit = Number(params.limit) || 20
  const orderBy = params.orderBy || 'title'
  const order = params.order === 'desc' ? 'desc' : 'asc'
  const q = params.q || ''
  const platform = params.platform || ''

  const games = await getAllGames({
    page,
    limit,
    orderBy,
    order,
    q,
    platform,
  })

  return (
    <GamePage
      games={games}
      filters={{ page, limit, orderBy, order, q, platform }}
      baseUrl={routes.SEARCH}
    />
  )
}
