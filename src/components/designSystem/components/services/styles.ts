import { css } from '@emotion/react'
import { rem } from 'polished'
import { SPACING_0, SPACING_1 } from '@Styles/constants/spacing'

export const services = css({
  display: 'flex',
  flexDirection: 'column',
})

export const icons = css({
  marginRight: SPACING_1,
})

export const service = css({
  display: 'flex',
  marginBottom: SPACING_1,
})

export const link = css({
  color: '#70A5F9',
  marginLeft: SPACING_0,
})
