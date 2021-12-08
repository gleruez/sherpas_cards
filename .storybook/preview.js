import { useMemo } from 'react'
import { CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core'
import { StylesProvider } from '@material-ui/styles'
import { Parameters } from '@storybook/react'

import { createTheme } from '@Material/material'
import { Decorator } from '@Type/storybook'

import './font.css'

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  storySort: {
    order: ['Design System', 'Common', 'Presentational', 'Container', 'Routes', 'Pages'],
    method: 'alphabetical',
  },
}

const withMaterialTheme: Decorator = (StoryFn) => {
  const theme = useMemo(() => responsiveFontSizes(createTheme()), [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StylesProvider injectFirst>
        <StoryFn />
      </StylesProvider>
    </ThemeProvider>
  )
}

// Global decorators, for all stories & component tests
export const decorators = [withMaterialTheme]
