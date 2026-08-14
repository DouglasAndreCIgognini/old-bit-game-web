import { request } from '@/src/utils/requests'
import { Game } from '../types/game'

export const getGameById = async (id: string) => {
  const response = await request(`/game/${id}`)
  return response as Game
}
