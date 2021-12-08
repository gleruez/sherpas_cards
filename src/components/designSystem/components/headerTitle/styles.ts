import { css } from '@emotion/react'
import { rem } from 'polished'

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
  marginRight: rem(20),
  marginLeft: rem(10),
})
