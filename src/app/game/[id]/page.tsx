import { Card } from '@/src/components/ui/card'
import { translate } from '@/src/i18n'
import GameRunner from '@/src/modules/games/components/gameRunner'
import { getGameById } from '@/src/modules/games/services/getGameById'

type GamePageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function GamePage({ params }: GamePageProps) {
  const { id } = await params
  const game = await getGameById(id)
  return (
    <div className="m-8 flex h-full flex-col items-center">
      <div className="flex max-h-2/4 w-full max-w-2/4 flex-col items-center gap-8">
        <Card className="p-3 text-center">
          <h3 className="text-primary text-4xl">{game.title}</h3>
        </Card>
        <Card>
          <GameRunner game={game} />
        </Card>
        <Card className="p-3 text-center">
          <h4 className="text-primary text-2xl">
            {translate('games.description')}
          </h4>
          <p className="text-text">{game.description}</p>
        </Card>
      </div>
    </div>
  )
}
