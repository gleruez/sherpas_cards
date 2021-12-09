import { css, SerializedStyles } from '@emotion/react'
import { rem } from 'polished'

import { Mode } from '@Components/designSystem/components/mea/Mea.types'

export const title = (mode: Mode): SerializedStyles =>
  css({
    alignItems: 'center',
    backgroundColor: mode === 'ACCEPTED' ? '#00B672' : '#F00011',
    borderRadius: rem(10),
    color: 'white',
    display: 'flex',
    height: rem(25),
    justifyContent: 'center',
    margin: rem(5),
    padding: rem(5),
    width: rem(120),
  })
