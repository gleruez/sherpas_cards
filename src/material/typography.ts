import { Theme } from '@material-ui/core'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { TypographyClassKey } from '@material-ui/core/Typography'
import { rem } from 'polished'

const AchemineBold = ['Achemine-Bold', 'Arial', 'Helvetica', 'sans-serif'].join(',')

const AvenirHeavy = ['Avenir-Heavy', 'Arial', 'Helvetica', 'sans-serif'].join(',')
const AvenirMedium = ['Avenir-Medium', 'Arial', 'Helvetica', 'sans-serif'].join(',')

export const globalTypography: TypographyOptions = {
  fontFamily: AvenirHeavy,
}

export const typographyOverrides = (theme: Theme): Partial<Record<TypographyClassKey, CSSProperties>> => ({
  h1: {
    fontFamily: AchemineBold,
    fontSize: rem(30),
    lineHeight: rem(38),
    fontWeight: 700,
    [theme.breakpoints.up('sm')]: {
      fontSize: rem(30),
      lineHeight: rem(38),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: rem(34),
      lineHeight: rem(44),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: rem(34),
      lineHeight: rem(44),
    },
  },
  h2: {
    fontFamily: AvenirHeavy,
    fontSize: rem(20),
    lineHeight: rem(26),
    fontWeight: 800,
    [theme.breakpoints.up('sm')]: {
      fontSize: rem(20),
      lineHeight: rem(26),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: rem(24),
      lineHeight: rem(30),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: rem(24),
      lineHeight: rem(30),
    },
  },
  h3: {
    fontFamily: AvenirHeavy,
    fontSize: rem(18),
    lineHeight: rem(24),
    fontWeight: 800,
    [theme.breakpoints.up('sm')]: {
      fontSize: rem(18),
      lineHeight: rem(24),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: rem(20),
      lineHeight: rem(26),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: rem(20),
      lineHeight: rem(26),
    },
  },
  body1: {
    fontFamily: AvenirHeavy,
    fontSize: rem(16),
    lineHeight: rem(22),
    fontWeight: 500,
    [theme.breakpoints.up('sm')]: {
      fontSize: rem(16),
      lineHeight: rem(22),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: rem(16),
      lineHeight: rem(22),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: rem(16),
      lineHeight: rem(22),
    },
  },
  body2: {
    fontFamily: AvenirMedium,
    fontSize: rem(16),
    lineHeight: rem(22),
    fontWeight: 500,
    [theme.breakpoints.up('sm')]: {
      fontSize: rem(16),
      lineHeight: rem(22),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: rem(16),
      lineHeight: rem(22),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: rem(16),
      lineHeight: rem(22),
    },
  },
  paragraph: {
    fontFamily: AvenirHeavy,
    fontSize: rem(16),
    lineHeight: rem(22),
    fontWeight: 500,
    [theme.breakpoints.up('sm')]: {
      fontSize: rem(16),
      lineHeight: rem(22),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: rem(16),
      lineHeight: rem(22),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: rem(16),
      lineHeight: rem(22),
    },
  },
  subtitle1: {
    fontFamily: AvenirMedium,
    fontSize: rem(13),
    lineHeight: rem(18),
    fontWeight: 500,
    [theme.breakpoints.up('sm')]: {
      fontSize: rem(13),
      lineHeight: rem(18),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: rem(13),
      lineHeight: rem(18),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: rem(13),
      lineHeight: rem(18),
    },
  },
  // subtitle2 = subtitle1 dans le design system Figma
  subtitle2: {
    fontFamily: AvenirMedium,
    fontSize: rem(13),
    lineHeight: rem(18),
    fontWeight: 500,
    [theme.breakpoints.up('sm')]: {
      fontSize: rem(13),
      lineHeight: rem(18),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: rem(13),
      lineHeight: rem(18),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: rem(13),
      lineHeight: rem(18),
    },
  },
  caption: {
    fontFamily: AvenirMedium,
    fontSize: rem(11),
    lineHeight: rem(14),
    fontWeight: 500,
    [theme.breakpoints.up('sm')]: {
      fontSize: rem(11),
      lineHeight: rem(14),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: rem(11),
      lineHeight: rem(14),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: rem(11),
      lineHeight: rem(14),
    },
  },
  button: {
    fontFamily: AvenirHeavy,
    fontSize: rem(16),
    lineHeight: rem(22),
    fontWeight: 500,
    [theme.breakpoints.up('sm')]: {
      fontSize: rem(16),
      lineHeight: rem(22),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: rem(16),
      lineHeight: rem(22),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: rem(16),
      lineHeight: rem(22),
    },
  },
})
