import { translate } from '@/src/i18n'
import { Select } from '@/src/components/ui/select'
import { Button } from '@/src/components/ui/button'
import { orderOptions, platformOptions } from '../types/game'

type GameFiltersProps = {
  limit: number
  orderBy: string
  order: 'asc' | 'desc'
  q: string
  platform: string
  action?: string
}

export function GameFilters({
  limit,
  orderBy,
  order,
  q,
  platform,
  action = '/',
}: GameFiltersProps) {
  return (
    <form
      method="get"
      action={action}
      className="border-border bg-surface mb-6 rounded-xl border p-4 shadow-sm"
    >
      <input type="hidden" name="page" value="1" />
      {q && <input type="hidden" name="q" value={q} />}

      <div className="grid gap-4 md:grid-cols-4">
        <label className="text-text flex flex-col gap-2 text-sm">
          <span>{translate('general.quantity')}</span>
          <Select
            name="limit"
            defaultValue={String(limit)}
            options={[
              { value: '10', label: '10' },
              { value: '20', label: '20' },
              { value: '30', label: '30' },
              { value: '50', label: '50' },
            ]}
          />
        </label>

        <label className="text-text flex flex-col gap-2 text-sm">
          <span>{translate('general.orderBy')}</span>
          <Select
            name="orderBy"
            defaultValue={orderBy}
            options={orderOptions}
          />
        </label>

        <label className="text-text flex flex-col gap-2 text-sm">
          <span>{translate('general.order')}</span>
          <Select
            name="order"
            defaultValue={order}
            options={[
              { value: 'asc', label: translate('general.asc') },
              { value: 'desc', label: translate('general.desc') },
            ]}
          />
        </label>

        <label className="text-text flex flex-col gap-2 text-sm">
          <span>{translate('general.platform')}</span>
          <Select
            name="platform"
            defaultValue={platform}
            options={platformOptions}
          />
        </label>
      </div>

      <div className="mt-4 flex justify-end">
        <Button
          type="submit"
          className="bg-primary text-background hover:bg-primary-hover"
        >
          {translate('general.filter')}
        </Button>
      </div>
    </form>
  )
}
