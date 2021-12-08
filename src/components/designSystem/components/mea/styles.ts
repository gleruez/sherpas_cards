import { css, SerializedStyles } from '@emotion/react'
import { Mode } from '@Components/designSystem/components/bodyTitle/BodyTitle'
import { rem } from 'polished'

export const mea = (mode: Mode): SerializedStyles =>
  css({
    alignItems: 'center',
    backgroundColor: mode === 'ACCEPTED' ? 'red' : 'green',
    borderRadius: rem(10),
    display: 'flex',
    justifyContent: 'center',
    height: rem(20),
    marginRight: rem(60),
    padding: rem(5),
    position: 'absolute',
    right: 0,
    width: rem(150),
  })

export const title = css({
  color: 'white',
  margin: rem(5),
})
