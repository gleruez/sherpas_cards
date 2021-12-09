import { ElementType, ForwardedRef, forwardRef, Fragment } from 'react'
import { Button as MaterialButton, ButtonProps as MaterialButtonProps } from '@material-ui/core'

import * as styles from './styles'

export type ButtonProps<C extends ElementType = 'button'> = MaterialButtonProps<C, { component?: C }>

const Button = forwardRef(
  ({ children, className, ...rest }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>): JSX.Element => (
    <Fragment>
      <MaterialButton ref={ref} {...rest} className={className} css={[styles.button]} variant="outlined">
        {children}
      </MaterialButton>
    </Fragment>
  )
)

export default Button
