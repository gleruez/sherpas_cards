import { CSSProperties } from 'react'
import { css, SerializedStyles } from '@emotion/react'
import { rem } from 'polished'

export const borderColor = (color: CSSProperties['color']): SerializedStyles =>
  css({
    '.MuiCardContent-root': {
      padding: rem(6),
    },
    background: !color
      ? 'linear-gradient(white,white) padding-box, linear-gradient(to right, #006BF5, #00C987, #5D72EC) border-box'
      : undefined,
    border: color ? `2px solid ${color}` : `2px solid transparent`,
    margin: `-${rem(2)}`,
  })
