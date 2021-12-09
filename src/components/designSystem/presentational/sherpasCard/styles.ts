import { css } from '@emotion/react'
import { rem, size } from 'polished'

import { SPACING_2 } from '@Styles/constants/spacing'

export const buttonAccepted = css({
  ':hover': {
    backgroundColor: 'white',
    color: '#00B672',
  },
  backgroundColor: '#00B672',
  color: 'white',
  marginLeft: SPACING_2,
})

export const buttonUpdated = css({
  textTransform: 'none',
  ...size('100%'),
})

export const buttonDeleted = css({
  marginRight: SPACING_2,
})

export const buttons = css({
  borderTop: '1px',
  display: 'flex',
  height: rem(50),
  marginTop: SPACING_2,
})

export const card = css({
  height: '100%',
  width: rem(600),
})

export const cardContent = css({
  display: 'flex',
  flexDirection: 'column',
  minHeight: rem(160),
})
