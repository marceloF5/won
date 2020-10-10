import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

export const parameters = {
    backgrounds: {
        default: 'Won Games',
        values: [
            {
                name: 'won-light',
                value: theme.colors.white
            },
            {
                name: 'won-dark',
                value: theme.colors.mainbg
            },
          ],
    }
}

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <GlobalStyles removeBg />
            <Story />
        </ThemeProvider>
    )
]
