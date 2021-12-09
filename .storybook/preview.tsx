import { useMemo } from 'react'
import { CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core'
import { StylesProvider } from '@material-ui/styles'
import { Parameters, StoryContext } from '@storybook/react'

import { createTheme } from '@Material/material'
import { Decorator } from '@Type/storybook'
import Lang from '@Type/lang'

import './font.css'

import commonFrMsg from '../src/i18n/fr.json'
import { IntlProvider } from 'react-intl'

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  storySort: {
    order: ['Design System', 'Common', 'Presentational', 'Container', 'Routes', 'Pages'],
    method: 'alphabetical',
  },
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'fr',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'fr', right: 'FR', title: 'Français' },
        { value: 'de', right: 'DE', title: 'Allemand' },
        { value: 'it', right: 'IT', title: 'Italien' },
        { value: 'en', right: 'EN', title: 'Anglais' },
        { value: 'nl', right: 'NL', title: 'Néerlandais' },
      ],
    },
  },
}

const getLocale = (context: StoryContext): Lang => context.globals.locale
type AllMessages = Record<Lang, Record<string, string>>

const withI18nProvider: Decorator = (StoryFn, context) => {
  const locale = getLocale(context)
  const allMessages: AllMessages = {
    fr: { ...commonFrMsg },
    de: {},
    it: {},
    en: {},
    nl: {},
  }

  return (
    <IntlProvider defaultLocale="fr" locale={locale} messages={allMessages[locale]}>
      <StoryFn />
    </IntlProvider>
  )
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
export const decorators = [withI18nProvider, withMaterialTheme]
