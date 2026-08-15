export type QueryParams = {
  page?: number
  limit?: number
  orderBy?: string
  order?: 'asc' | 'desc'
  q?: string
  platform?: string
}

export const buildGameQueryString = ({
  page = 1,
  limit = 20,
  orderBy = 'title',
  order = 'asc',
  q = '',
  platform = '',
}: QueryParams) => {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    orderBy,
    order,
    ...(q && { q }),
    ...(platform && { platform }),
  })

  return `?${params.toString()}`
}

export const request = async (path: string, options?: RequestInit) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`,
    options,
  )
  return response.json()
}
