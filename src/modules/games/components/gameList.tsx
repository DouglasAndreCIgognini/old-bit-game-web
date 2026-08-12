import Image from 'next/image'

import { GamePagination } from './gamePagination'
import { Game } from '../types/game'
import { translate } from '@/src/i18n'

type GameListProps = {
  games: Game[]
  currentPage: number
  totalPages: number
}

export function GameList({ games, currentPage, totalPages }: GameListProps) {
  return (
    <section>
      <div className="grid grid-cols-2 justify-items-center gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {games.map((game) => (
          <article
            key={game.id}
            className="border-border bg-surface w-full max-w-45 overflow-hidden rounded-lg border"
          >
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
                    <span
                      key={category.id}
                      className="bg-surface-hover text-text-muted rounded px-2 py-1 text-xs"
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <GamePagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </section>
  )
}
