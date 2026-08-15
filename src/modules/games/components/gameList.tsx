import { Game } from '../types/game'
import { ListPaginator } from '@/src/components/layout/listPaginator'
import GameCard from './gameCard'

export type GameListFilters = {
  limit: number
  orderBy: string
  order: 'asc' | 'desc'
  q: string
  platform: string
}

type GameListProps = {
  games: Game[]
  currentPage: number
  totalPages: number
  filters: GameListFilters
  currentRoute?: string
}

export function GameList({
  games,
  currentPage,
  totalPages,
  filters,
  currentRoute = '/',
}: GameListProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 justify-items-center gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <div className="mt-8">
        <ListPaginator
          currentPage={currentPage}
          totalPages={totalPages}
          currentRoute={currentRoute}
          queryParams={{
            limit: filters.limit,
            orderBy: filters.orderBy,
            order: filters.order,
            q: filters.q,
            platform: filters.platform,
          }}
        />
      </div>
    </div>
  )
}
