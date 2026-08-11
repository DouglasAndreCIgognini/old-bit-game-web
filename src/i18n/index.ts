import translations from '@/src/i18n/pt-BR.json'

export function translate(key: string): string {
  const value = key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part]
    }

    return undefined
  }, translations)

  return typeof value === 'string' ? value : key
}
