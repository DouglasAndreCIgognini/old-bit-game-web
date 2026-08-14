import Image from 'next/image'

import { Game } from '../types/game'
import { translate } from '@/src/i18n'
import { Card } from '@/src/components/ui/card'
import Chip from '@/src/components/ui/chip'
import { ListPaginator } from '@/src/components/layout/listPaginator'
import routes from '@/src/i18n/routes.json'

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
          <Card key={game.id} className="max-w-45">
            <div className="relative aspect-3/4 w-full">
              <Image
                src={game.image_url ?? '/logo.png'}
                alt={game.title}
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>

            <div className="p-3">
              <h2 className="text-text font-semibold">{game.title}</h2>

              <p className="text-text-muted mt-1 text-sm">
                {translate(`platforms.${game.platform}`)}
              </p>

              {game.categories.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {game.categories.map(({ category }) => (
                    <Chip key={category.id}>{category.name}</Chip>
                  ))}
                </div>
              )}
            </div>
          </Card>
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
