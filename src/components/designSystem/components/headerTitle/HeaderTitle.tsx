import { VFC } from 'react'

import { Typography } from '@material-ui/core'
import StarRateIcon from '@mui/icons-material/StarRate'

import * as styles from './styles'

export type HeaderTitleProps = {
  title: string
}

const HeaderTitle: VFC<HeaderTitleProps> = ({ title }) => (
  <div css={styles.header}>
    <div css={styles.icon}>
      <StarRateIcon />
    </div>
    <Typography css={styles.title}>{title}</Typography>
  </div>
)

export default HeaderTitle
