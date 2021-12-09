import { VFC } from 'react'

import { Typography } from '@material-ui/core'
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone'

import * as styles from './styles'
import Mea from '@Components/designSystem/components/mea/Mea'
import { useIntl } from 'react-intl'

export type Mode = 'ACCEPTED' | 'REFUSED' | 'IN_PROGRESS'

export type BodyTitleProps = {
  date: string
  modeTitle: string
  mode: Mode
  title: string
  time: string
}

const BodyTitle: VFC<BodyTitleProps> = ({ date, modeTitle, mode, time, title }) => {
  const { formatMessage } = useIntl()

  const getModeTitle = () => {
    switch (mode) {
      case 'ACCEPTED':
        return <Mea mode={mode} title={formatMessage({ id: 'accepted' })} />
      case 'REFUSED':
        return <Mea mode={mode} title={formatMessage({ id: 'refused' })} />
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
      <div>
        <Typography component="p" variant="body1" css={styles.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1">
          {formatMessage({ id: 'sendTitle' })} {date} {formatMessage({ id: 'to' })} {time}
        </Typography>
      </div>
      {getModeTitle()}
    </div>
  )
}

export default BodyTitle
