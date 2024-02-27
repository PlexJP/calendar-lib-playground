import '@fontsource/material-icons'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { load } from '@progress/kendo-react-intl'
import '@progress/kendo-theme-material/dist/all.css'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import currencyData from 'cldr-core/supplemental/currencyData.json'
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json'
import weekData from 'cldr-core/supplemental/weekData.json'
import jaCaGregorian from 'cldr-dates-full/main/ja/ca-gregorian.json'
import jaDateFields from 'cldr-dates-full/main/ja/dateFields.json'
import jaLocalCurrency from 'cldr-numbers-full/main/ja/currencies.json'
import jaNumbers from 'cldr-numbers-full/main/ja/numbers.json'
import { theme } from '../src/lib/mui'

load(
  weekData,
  currencyData,
  likelySubtags,
  jaCaGregorian,
  jaDateFields,
  jaLocalCurrency,
  jaNumbers,
)

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: theme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
]

const preview: Preview = {
  decorators,
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
