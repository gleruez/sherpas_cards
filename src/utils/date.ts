import { format, isValid, parseISO } from 'date-fns'

const formatDate = 'dd/MM/yyyy'
const formatHour = 'HH:MM'

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
