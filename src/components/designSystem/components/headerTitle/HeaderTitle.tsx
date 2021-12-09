import { VFC } from 'react'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import StarRateIcon from '@mui/icons-material/StarRate'

import * as styles from './styles'

const HeaderTitle: VFC = () => {
  const { formatMessage } = useIntl()

  return (
    <div css={styles.header}>
      <div css={styles.icon}>
        <StarRateIcon />
      </div>
      <Typography css={styles.title}>{formatMessage({ id: 'headerTitle' })}</Typography>
    </div>
  )
}

export default HeaderTitle
