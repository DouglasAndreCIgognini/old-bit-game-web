export default function Loading() {
  return (
    <div className="mt-4 mb-6 flex flex-col items-center justify-center gap-6">
      <div className="bg-surface-hover h-39 w-full max-w-300 animate-pulse rounded-xl" />

      <div className="flex w-full max-w-300 flex-row justify-between gap-4">
        <div className="bg-surface-hover h-6 w-32 animate-pulse rounded" />
        <div className="bg-surface-hover h-6 w-44 animate-pulse rounded" />
      </div>

      <section className="w-full max-w-300">
        <div className="grid grid-cols-2 justify-items-center gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <article
              key={index}
              className="border-border bg-surface w-full max-w-45 overflow-hidden rounded-lg border"
            >
              <div className="bg-surface-hover relative aspect-3/4 w-full animate-pulse" />

              <div className="space-y-2 p-3">
                <div className="bg-surface-hover h-4 w-3/4 animate-pulse rounded" />
                <div className="bg-surface-hover h-3 w-1/2 animate-pulse rounded" />

                <div className="mt-2 flex flex-wrap gap-1">
                  <div className="bg-surface-hover h-6 w-14 animate-pulse rounded" />
                  <div className="bg-surface-hover h-6 w-16 animate-pulse rounded" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
