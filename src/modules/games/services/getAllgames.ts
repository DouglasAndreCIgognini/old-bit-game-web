import { request } from '@/src/utils/requests'
import { Game } from '../types/game'

interface GetAllGamesResponse {
  data: Game[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export const getAllGames = async ({
  page = 1,
  limit = 20,
}: {
  page: number
  limit: number
}) => {
  const response = await request(`/game?page=${page}&limit=${limit}`)

  return response as GetAllGamesResponse
}
