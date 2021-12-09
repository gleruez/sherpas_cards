import Lang from '@Type/lang'
import Locale from '@Type/locale'

export const getLocale = (locale: Locale): { lang: Lang; country: string } => ({
  lang: locale.split('-')[0] as Lang,
  country: locale.split('-')[1],
})
