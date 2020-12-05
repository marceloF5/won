import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

addDecorator(withNextRouter())

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
