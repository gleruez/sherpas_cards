import { VFC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import {
  AccountBalance as AccountBalanceIcon,
  CalendarTodayTwoTone as CalendarTodayTwoToneIcon,
  Computer as ComputerIcon,
  WatchLater as WatchLaterIcon,
} from '@mui/icons-material'

import { isoDateToLongDate } from '@Utils/date'

import * as styles from './styles'

export type ServicesProps = {
  date: string
  degree: string
  startHour: string
  endHour: string
  url: string
}

const Services: VFC<ServicesProps> = ({ date, degree, startHour, endHour, url }) => {
  const { formatMessage, locale } = useIntl()

  const numberOfHours = Number(endHour.substring(0, 2)) - Number(startHour.substring(0, 2))

  return (
    <div css={styles.services}>
      <div css={styles.service}>
        <CalendarTodayTwoToneIcon css={styles.icons} />
        <Typography>
          {isoDateToLongDate(date, locale)} {formatMessage({ id: 'from' })} {startHour} {formatMessage({ id: 'to' })}{' '}
          {endHour}
        </Typography>
      </div>
      <div css={styles.service}>
        <WatchLaterIcon css={styles.icons} />
        <Typography>{formatMessage({ id: 'hours' }, { hour: numberOfHours })}</Typography>
      </div>
      <div css={styles.service}>
        <AccountBalanceIcon css={styles.icons} />
        <Typography>{formatMessage({ id: 'level' }, { degree: degree })}</Typography>
      </div>
      <div css={styles.service}>
        <ComputerIcon css={styles.icons} />
        <Typography>
          <FormattedMessage
            id="connexion"
            values={{
              url: (
                <a href={url} css={styles.link}>
                  {url}
                </a>
              ),
            }}
          />
        </Typography>
      </div>
    </div>
  )
}

export default Services
