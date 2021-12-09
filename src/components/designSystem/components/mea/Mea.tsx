import { Fragment, HTMLAttributes, VFC } from 'react'
import { Typography } from '@material-ui/core'

import { Mode } from '@Components/designSystem/components/mea/Mea.types'

import * as styles from './styles'

export type MeaProps = HTMLAttributes<HTMLDivElement> & {
  mode: Mode
  title: string
}

const Mea: VFC<MeaProps> = ({ mode, title }) => (
  <Fragment>
    <Typography variant="caption" css={styles.title(mode)}>
      {title}
    </Typography>
  </Fragment>
)

export default Mea
