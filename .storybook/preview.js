import { ThemeProvider } from 'styled-components'
import { CartContext, CartContextDefaultValues } from '../src/hooks/useCart'
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
    (Story, context) => (
        <ThemeProvider theme={theme}>
            <CartContext.Provider
                value={{
                    ...CartContextDefaultValues,
                    ...(context?.args?.cartContextValue || {}),
                    ...context.args
                }}
            >
                <GlobalStyles removeBg />
                <Story />
            </CartContext.Provider>
        </ThemeProvider>
    )
]
