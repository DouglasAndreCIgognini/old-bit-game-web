import { Game } from '../types/game'
import { ListPaginator } from '@/src/components/layout/listPaginator'
import routes from '@/src/i18n/routes.json'

import GameCard from './gameCard'

type GameListProps = {
  games: Game[]
  currentPage: number
  totalPages: number
}

export function GameList({ games, currentPage, totalPages }: GameListProps) {
  return (
    <div>
      <div className="grid grid-cols-2 justify-items-center gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <div className="mt-8">
        <ListPaginator
          currentPage={currentPage}
          totalPages={totalPages}
          currentRoute={routes.HOME}
        />
      </div>
    </div>
  )
}
