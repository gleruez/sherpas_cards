import { VFC } from 'react'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone'

import Mea from '@Components/designSystem/components/mea/Mea'
import { Mode } from '@Components/designSystem/components/mea/Mea.types'
import { isoDateToFormat, isoHourToFormat } from '@Utils/date'

import * as styles from './styles'

export type BodyTitleProps = {
  date: string
  mode: Mode
  title: string
}

const BodyTitle: VFC<BodyTitleProps> = ({ date, mode, title }) => {
  const { formatMessage } = useIntl()

  const getModeTitle = () => {
    switch (mode) {
      case 'ACCEPTED':
        return (
          <div css={styles.modeTitle}>
            <Mea mode={mode} title={formatMessage({ id: 'accepted' })} />
          </div>
        )
      case 'REFUSED':
        return (
          <div css={styles.modeTitle}>
            <Mea mode={mode} title={formatMessage({ id: 'refused' })} />
          </div>
        )
      case 'IN_PROGRESS':
      default:
        return (
          <div css={styles.modeTitle}>
            <Typography component="p" variant="body1">
              {formatMessage({ id: 'freeGift' })}
            </Typography>
          </div>
        )
    }
  }

  return (
    <div css={styles.bodyTitle}>
      <MenuBookTwoToneIcon css={styles.icon} />
      <div css={styles.globalTitle}>
        <div css={styles.titleInfo}>
          <Typography component="p" variant="body1">
            {title}
          </Typography>
          <Typography variant="subtitle1">
            {formatMessage({ id: 'sendTitle' })} {isoDateToFormat(date)} {formatMessage({ id: 'to' })}{' '}
            {isoHourToFormat(date)}
          </Typography>
        </div>
        {getModeTitle()}
      </div>
    </div>
  )
}

export default BodyTitle
