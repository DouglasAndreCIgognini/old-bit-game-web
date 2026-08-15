import { Input } from '@/src/components/ui/input'
import { translate } from '@/src/i18n'
import { Button } from '../../ui/button'

type SearchBarProps = {
  defaultValue?: string
  action?: string
  className?: string
}

const DEFAULT_SEARCH_ROUTE = '/search'

export function SearchBar({
  defaultValue = '',
  action = DEFAULT_SEARCH_ROUTE,
  className = '',
}: SearchBarProps) {
  return (
    <form
      method="get"
      action={action}
      className={`flex w-full max-w-xl items-center gap-2 ${className}`}
    >
      <label className="relative block w-full">
        <span className="sr-only">{translate('general.search')}</span>
        <Input
          type="search"
          name="q"
          defaultValue={defaultValue}
          aria-label={translate('general.search')}
          placeholder={translate('general.search')}
        />
      </label>
      <Button
        type="submit"
        className="bg-primary text-background hover:bg-primary-hover text-sm font-bold"
      >
        {translate('general.search')}
      </Button>
    </form>
  )
}
