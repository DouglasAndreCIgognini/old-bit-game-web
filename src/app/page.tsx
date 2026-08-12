import Image from 'next/image'
import { getAllGames } from '../modules/games/services/getAllgames'
import { GameList } from '../modules/games/components/gameList'
import { translate } from '../i18n'

type GamesPageProps = {
  searchParams: Promise<{
    page?: string
  }>
}

export default async function Home({ searchParams }: GamesPageProps) {
  const params = await searchParams

  const page = Number(params.page) || 1
  const games = await getAllGames({ page, limit: 20 })

  return (
    <div className="mt-4 mb-6 flex flex-col items-center justify-center gap-6">
      <Image
        src="/banner-home.jpg"
        alt="Home banner"
        width={1200}
        height={400}
      />
      <div className="flex w-full flex-row justify-around">
        <p className="text-primary font-bold">{translate('games.allGames')}</p>
        <p className="text-primary font-extrabold">
          {translate('general.total')} {games.meta.total}{' '}
          {translate('general.games')}
        </p>
      </div>
      <GameList
        games={games.data}
        currentPage={page}
        totalPages={games.meta.totalPages}
      />
    </div>
  )
}
