import { getAllGames } from '../modules/games/services/getAllgames'
import GamePage from '../modules/games/components/gamePage'
import { getRoute } from '../i18n'

type GamesPageProps = {
  searchParams: Promise<{
    page?: string
    limit?: string
    orderBy?: string
    order?: string
    q?: string
    platform?: string
  }>
}

export default async function Home({ searchParams }: GamesPageProps) {
  const params = await searchParams

  const page = Number(params.page) || 1
  const limit = Number(params.limit) || 20
  const orderBy = params.orderBy || 'title'
  const order = params.order === 'desc' ? 'desc' : 'asc'
  const platform = params.platform || ''

  const games = await getAllGames({
    page,
    limit,
    orderBy,
    order,
    q: '',
    platform,
  })

  return (
    <GamePage
      games={games}
      filters={{ page, limit, orderBy, order, q: '', platform }}
      baseUrl={getRoute('HOME')}
    />
  )
}
