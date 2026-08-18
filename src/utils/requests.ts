export type QueryParams = {
  page?: number
  limit?: number
  orderBy?: string
  order?: 'asc' | 'desc'
  q?: string
  platform?: string
}

export const buildQueryString = (queryParams: QueryParams) => {
  const params = new URLSearchParams()

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, String(value))
    }
  })

  const queryString = params.toString()

  return queryString ? `?${queryString}` : ''
}

export const request = async (path: string, options?: RequestInit) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`,
    options,
  )
  return response.json()
}
