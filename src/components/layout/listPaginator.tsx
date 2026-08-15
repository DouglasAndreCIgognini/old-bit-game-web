import { translate } from '@/src/i18n'
import Link from 'next/link'

interface ListPaginatorProps {
  currentPage: number
  totalPages: number
  currentRoute: string
  queryParams?: Record<string, string | number | undefined>
}

export function ListPaginator({
  currentPage,
  totalPages,
  currentRoute,
  queryParams = {},
}: ListPaginatorProps) {
  if (totalPages <= 1) {
    return null
  }

  const buildHref = (page: number) => {
    const params = new URLSearchParams()

    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params.set(key, String(value))
      }
    })

    params.set('page', String(page))

    return `${currentRoute}?${params.toString()}`
  }

  const pages: (number | 'ellipsis')[] = []

  if (totalPages <= 7) {
    for (let page = 1; page <= totalPages; page++) {
      pages.push(page)
    }
  } else {
    pages.push(1)

    if (currentPage > 4) {
      pages.push('ellipsis')
    }

    const startPage = Math.max(2, currentPage - 1)
    const endPage = Math.min(totalPages - 1, currentPage + 1)

    for (let page = startPage; page <= endPage; page++) {
      pages.push(page)
    }

    if (currentPage < totalPages - 3) {
      pages.push('ellipsis')
    }

    pages.push(totalPages)
  }

  return (
    <nav className="flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={buildHref(currentPage - 1)}
          className="border-border bg-surface text-text hover:bg-surface-hover rounded-md border px-3 py-2 text-sm transition-colors"
        >
          {translate('pagination.previous')}
        </Link>
      )}

      {pages.map((page, index) => {
        if (page === 'ellipsis') {
          return (
            <span key={`ellipsis-${index}`} className="text-text-muted px-2">
              ...
            </span>
          )
        }

        const isActive = page === currentPage

        return (
          <Link
            key={page}
            href={buildHref(page)}
            className={`rounded-md px-3 py-2 text-sm transition-colors ${
              isActive
                ? 'bg-primary text-background'
                : 'border-border bg-surface text-text hover:bg-surface-hover border'
            } `}
          >
            {page}
          </Link>
        )
      })}

      {currentPage < totalPages && (
        <Link
          href={buildHref(currentPage + 1)}
          className="border-border bg-surface text-text hover:bg-surface-hover rounded-md border px-3 py-2 text-sm transition-colors"
        >
          {translate('pagination.next')}
        </Link>
      )}
    </nav>
  )
}
