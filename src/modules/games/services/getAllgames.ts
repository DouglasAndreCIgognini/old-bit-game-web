import {
  buildGameQueryString,
  QueryParams,
  request,
} from '@/src/utils/requests'
import { Game } from '../types/game'

export interface GetAllGamesResponse {
  data?: Game[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export const getAllGames = async (params: QueryParams = {}) => {
  const response = await request(`/game${buildGameQueryString(params)}`)

  return response as GetAllGamesResponse
}
