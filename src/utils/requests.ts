export const request = async (path: string, options?: RequestInit) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`,
    options,
  )
  return response.json()
}
