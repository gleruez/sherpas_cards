import { CSSProperties, FC } from 'react'
import { Card as MaterialCard, CardProps } from '@material-ui/core'

import * as styles from './styles'

export interface BasicCardProps extends CardProps {
  borderColor?: CSSProperties['color']
}

const BasicCard: FC<BasicCardProps> = ({ children, borderColor, ...rest }) => (
  <MaterialCard {...rest} css={styles.borderColor(borderColor)}>
    {children}
  </MaterialCard>
)

export default BasicCard
