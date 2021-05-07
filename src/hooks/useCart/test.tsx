import { renderHook, act } from '@testing-library/react-hooks'
import { useCart, CartProvider, CartProviderProps } from '.'
import { setStorageItem } from 'utils/localStorage'
import { cartItems, gamesMock } from './mock'
import { MockedProvider } from '@apollo/client/testing'

describe('useCart', () => {
    beforeEach(() => {
        window.localStorage.clear()
    })

    it('should return items and its info if there are any in the cart', async () => {
        const wrapper = ({ children }: CartProviderProps) => (
            <MockedProvider mocks={[gamesMock]}>
                <CartProvider>{children}</CartProvider>
            </MockedProvider>
        )

        setStorageItem('cartItems', ['1', '2'])

        const { result, waitForNextUpdate } = renderHook(() => useCart(), {
            wrapper
        })

        expect(result.current.loading).toBeTruthy()

        await waitForNextUpdate()

        expect(result.current.loading).toBeFalsy()
        expect(result.current.items).toStrictEqual(cartItems)
        expect(result.current.quantity).toBe(2)
        expect(result.current.total).toBe('$21.00')
    })

    it('should return true/false if the item is already in the cart', () => {
        const wrapper = ({ children }: CartProviderProps) => (
            <MockedProvider mocks={[gamesMock]}>
                <CartProvider>{children}</CartProvider>
            </MockedProvider>
        )

        setStorageItem('cartItems', ['1'])

        const { result } = renderHook(() => useCart(), { wrapper })

        expect(result.current.isInCart('1')).toBeTruthy()
        expect(result.current.isInCart('2')).toBeFalsy()
    })

    it('should add item in the cart', () => {
        const wrapper = ({ children }: CartProviderProps) => (
            <MockedProvider mocks={[gamesMock]}>
                <CartProvider>{children}</CartProvider>
            </MockedProvider>
        )

        const { result } = renderHook(() => useCart(), { wrapper })

        act(() => {
            result.current.addToCart('1')
        })

        expect(result.current.quantity).toBe(1)
        expect(window.localStorage.getItem('WONGAMES_cartItems')).toStrictEqual(
            JSON.stringify(['1'])
        )
    })

    it('should remove item in the cart', () => {
        const wrapper = ({ children }: CartProviderProps) => (
            <MockedProvider mocks={[gamesMock]}>
                <CartProvider>{children}</CartProvider>
            </MockedProvider>
        )

        setStorageItem('cartItems', ['1'])

        const { result } = renderHook(() => useCart(), { wrapper })

        act(() => {
            result.current.removeFromCart('1')
        })

        expect(result.current.quantity).toBe(0)
        expect(window.localStorage.getItem('WONGAMES_cartItems')).toStrictEqual(
            JSON.stringify([])
        )
    })

    it('should clear the cart', () => {
        const wrapper = ({ children }: CartProviderProps) => (
            <MockedProvider mocks={[gamesMock]}>
                <CartProvider>{children}</CartProvider>
            </MockedProvider>
        )

        setStorageItem('cartItems', ['1'])

        const { result } = renderHook(() => useCart(), { wrapper })

        act(() => {
            result.current.clearCart()
        })

        expect(result.current.quantity).toBe(0)
        expect(window.localStorage.getItem('WONGAMES_cartItems')).toStrictEqual(
            JSON.stringify([])
        )
    })
})
