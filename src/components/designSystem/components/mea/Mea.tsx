import { HTMLAttributes, VFC } from 'react'
import { Typography } from '@material-ui/core'

import { Mode } from '@Components/designSystem/components/bodyTitle/BodyTitle'
import * as styles from './styles'

export type MeaProps = HTMLAttributes<HTMLDivElement> & {
  mode: Mode
  title: string
}

const Mea: VFC<MeaProps> = ({ mode, title }) => (
  <div css={styles.mea(mode)}>
    <Typography css={styles.title}>{title}</Typography>
  </div>
)

export default Mea
