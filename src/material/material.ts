import { createTheme as createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core'
import { globalTypography, typographyOverrides as overridesTypography } from './typography'

export const createTheme = (): Theme => {
  const theme = createMuiTheme({
    typography: globalTypography,
    shadows: [
      'none',
      'elevation1',
      'elevation2',
      'elevation3',
      'elevation4',
      'elevation5',
      'elevation6',
      'elevation7',
      'elevation8',
      'elevation9',
      'elevation10',
      'elevation11',
      'elevation12',
      'elevation13',
      'elevation14',
      'elevation15',
      'elevation16',
      'elevation17',
      'elevation18',
      'elevation19',
      'elevation20',
      'elevation21',
      'elevation22',
      'elevation23',
      'elevation24',
    ],
    shape: {
      borderRadius: 14,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 1024,
        xl: 1440,
      },
    },
  })

  theme.overrides = {
    MuiTypography: overridesTypography(theme),
  }

  theme.props = {
    MuiTypography: {
      variant: 'body2',
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'p',
        subtitle2: 'p',
        body1: 'p',
        body2: 'p',
      },
    },
  }

  return responsiveFontSizes(theme)
}
