import { HTMLAttributes, VFC } from 'react'
import { Divider as MaterialDivider } from '@material-ui/core'

import * as styles from './styles'

const Separator: VFC<HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <MaterialDivider aria-hidden className={className} css={styles.separator} />
)

export default Separator
