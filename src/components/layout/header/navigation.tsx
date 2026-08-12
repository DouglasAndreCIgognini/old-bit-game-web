import { Tab, Tabs } from '@/src/components/ui/tabs'
import { translate } from '@/src/i18n'
import routes from '@/src/i18n/routes.json'

export function Navigation() {
  return (
    <Tabs>
      <Tab href={routes.HOME}>{translate('general.home')}</Tab>

      <Tab href={routes.PLATFORMS}>{translate('general.platforms')}</Tab>

      <Tab href={routes.CATEGORIES}>{translate('general.categories')}</Tab>
    </Tabs>
  )
}
