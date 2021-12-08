import { VFC } from 'react'

import { Typography } from '@material-ui/core'
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone'

import * as styles from './styles'
import Mea from '@Components/designSystem/components/mea/Mea'

export type Mode = 'ACCEPTED' | 'REFUSED' | 'IN_PROGRESS'

export type BodyTitleProps = {
  modeTitle: string
  mode: Mode
  title: string
  subtitle: string
}

const getModeTitle = (mode: string, modeTitle: string) => {
  switch (mode) {
    case 'ACCEPTED':
    case 'REFUSED':
      return <Mea mode={mode} title={modeTitle} />
    case 'IN_PROGRESS':
    default:
      return (
        <div css={styles.modeTitle}>
          <Typography>{modeTitle}</Typography>
        </div>
      )
  }
}

const BodyTitle: VFC<BodyTitleProps> = ({ modeTitle, mode, title, subtitle }) => (
  <div css={styles.bodyTitle}>
    <MenuBookTwoToneIcon css={styles.icon} />
    <div>
      <Typography variant="h6" css={styles.title}>
        {title}
      </Typography>
      <Typography>{subtitle}</Typography>
    </div>
    {getModeTitle(mode, modeTitle)}
  </div>
)

export default BodyTitle
