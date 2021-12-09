import { format, isValid, parseISO } from 'date-fns'

import Locale from '@Type/locale'
import { dateFnsLocale } from '@Utils/locale'

import { getLocale } from './i18n'

const formatDate = 'dd/MM/yyyy'
const formatHour = 'HH:MM'

const formatLongDate = 'eeee dd MMMM'

export const isoDateToFormat = (value: string): string => {
  const date = parseISO(value)

  if (isValid(date)) {
    return format(date, formatDate)
  }

  return value
}

export const isoHourToFormat = (value: string): string => {
  const date = parseISO(value)

  if (isValid(date)) {
    return format(date, formatHour)
  }

  return value
}

export const isoDateToLongDate = (value: string, locale: string): string => {
  const date = parseISO(value)
  const { lang } = getLocale(locale as Locale)

  if (isValid(date)) {
    return format(date, formatLongDate, { locale: dateFnsLocale[lang] })
  }

  return value
}
