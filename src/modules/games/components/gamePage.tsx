import { translate } from '@/src/i18n'
import { GetAllGamesResponse } from '../services/getAllgames'
import { GameFilters } from './gameFilters'
import { GameList } from './gameList'

interface GamePageParams {
  filters: {
    page: number
    limit: number
    orderBy: string
    order: 'asc' | 'desc'
    q: string
    platform: string
  }
  games: GetAllGamesResponse
  baseUrl: string
}

const GamePage = ({ games, filters, baseUrl }: GamePageParams) => {
  return (
    <>
      <div className="mx-auto mt-4 mb-6 flex w-full max-w-7xl flex-col gap-6 px-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-primary text-xl font-bold">
              {translate('games.allGames')}
            </p>
            <p className="text-text-muted text-sm">
              {filters.q
                ? `${translate('filters.resultsTo')} “${filters.q}”`
                : translate('filters.generalSearch')}
            </p>
          </div>
          {games.data && (
            <p className="text-primary font-extrabold">
              {translate('general.total')} {games.meta.total}{' '}
              {translate('general.games')}
            </p>
          )}
        </div>

        <GameFilters
          limit={filters.limit}
          orderBy={filters.orderBy}
          order={filters.order}
          q={filters.q}
          platform={filters.platform}
          action={baseUrl}
        />

        {games.data ? (
          <GameList
            games={games.data}
            currentPage={filters.page}
            totalPages={games.meta.totalPages}
            filters={{
              limit: filters.limit,
              orderBy: filters.orderBy,
              order: filters.order,
              q: filters.q,
              platform: filters.platform,
            }}
            currentRoute={baseUrl}
          />
        ) : (
          <h2 className="text-text text-center text-4xl">
            {translate('games.notFound')}
          </h2>
        )}
      </div>
    </>
  )
}

export default GamePage
