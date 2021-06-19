import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import {
    CartContext,
    CartContextData,
    CartContextDefaultValues
} from 'hooks/useCart'
import {
    WishlistContext,
    WishlistContextData,
    WishlistContextDefaultValues
} from 'hooks/useWishlist'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

type CustomRenderProps = {
    cartProviderProps?: CartContextData
    wishListProviderProps?: WishlistContextData
} & Omit<RenderOptions, 'queries'>

const customRender = (
    ui: ReactElement,
    {
        cartProviderProps = CartContextDefaultValues,
        wishListProviderProps = WishlistContextDefaultValues,
        ...renderOptions
    }: CustomRenderProps = {}
) =>
    render(
        <ThemeProvider theme={theme}>
            <CartContext.Provider value={cartProviderProps}>
                <WishlistContext.Provider value={wishListProviderProps}>
                    {ui}
                </WishlistContext.Provider>
            </CartContext.Provider>
        </ThemeProvider>,
        renderOptions
    )

export * from '@testing-library/react'
export { customRender as render }
