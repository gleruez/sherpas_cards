import { css } from '@emotion/react'
import { rem } from 'polished'

import { SPACING_0, SPACING_1, SPACING_3 } from '@Styles/constants/spacing'

export const bodyTitle = css({
  display: 'flex',
  margin: `${SPACING_0} 0 ${SPACING_1}`,
})

export const icon = css({
  marginRight: SPACING_3,
})

export const titleInfo = css({
  display: 'flex',
  flexDirection: 'column',
})

export const globalTitle = css({
  display: 'flex',
})

export const modeTitle = css({
  display: 'flex',
  justifyContent: 'end',
  width: rem(310),
})
