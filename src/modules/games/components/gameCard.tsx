import Image from 'next/image'
import { Game } from '../types/game'
import { Card } from '@/src/components/ui/card'
import Chip from '@/src/components/ui/chip'
import Link from 'next/link'
import { Button } from '@/src/components/ui/button'
import { translate } from '@/src/i18n'
import routes from '@/src/i18n/routes.json'

interface GameCardProps {
  game: Game
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="flex h-full max-w-45 flex-col">
      <div className="relative aspect-3/4 w-full">
        <Image
          src={game.image_url ?? '/logo.png'}
          alt={game.title}
          fill
          sizes="180px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-3">
        <h2 className="text-text font-semibold">{game.title}</h2>

        <p className="text-text-muted mt-1 text-sm">{game.platform}</p>

        {game.categories.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {game.categories.map(({ category }) => (
              <Chip key={category.id}>{category.name}</Chip>
            ))}
          </div>
        )}

        <p className="text-text my-2 text-sm">
          {game.played_count} {translate('games.playedCount')}
        </p>

        <Link href={`${routes.GAME}/${game.id}`} className="mt-auto block pt-3">
          <Button className="bg-primary text-background hover:bg-primary-hover w-full">
            <p>{translate('games.play')}</p>
          </Button>
        </Link>
      </div>
    </Card>
  )
}

export default GameCard
