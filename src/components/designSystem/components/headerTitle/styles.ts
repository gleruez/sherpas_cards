import { css } from '@emotion/react'
import { rem } from 'polished'

import { SPACING_1, SPACING_3 } from '@Styles/constants/spacing'

export const header = css({
  background: `linear-gradient(0.25turn,#006BF5, #00C987, #5D72EC)`,
  display: 'flex',
  height: rem(44),
})

export const title = css({
  alignItems: 'center',
  color: 'white',
  display: 'flex',
})

export const icon = css({
  alignItems: 'center',
  color: 'white',
  display: 'flex',
  marginLeft: SPACING_1,
  marginRight: SPACING_3,
})
