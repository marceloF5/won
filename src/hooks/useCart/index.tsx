import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback
} from 'react'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { useQueryGames } from 'graphql/queries/games'
import { cartMapper } from 'utils/mappers'
import formatPrice from 'utils/format-price'

const CART_KEY = 'cartItems'

export type CartItem = {
    id: string
    img: string
    title: string
    price: string
}

export type CartContextData = {
    items: CartItem[]
    quantity: number
    total: string
    loading: boolean
    isInCart: (id: string) => boolean
    addToCart: (id: string) => void
    removeFromCart: (id: string) => void
    clearCart: () => void
}
export const CartContextDefaultValues = {
    items: [],
    quantity: 0,
    total: '$0.00',
    loading: false,
    isInCart: () => false,
    addToCart: () => null,
    removeFromCart: () => null,
    clearCart: () => null
}

export const CartContext = createContext<CartContextData>(
    CartContextDefaultValues
)

export type CartProviderProps = {
    children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<string[]>([])

    useEffect(() => {
        const data = getStorageItem(CART_KEY)

        if (data) {
            setCartItems(data)
        }
    }, [])

    const { data, loading } = useQueryGames({
        skip: !cartItems?.length,
        variables: {
            where: {
                id: cartItems
            }
        }
    })

    const total = data?.games.reduce((acc, game) => {
        return acc + game.price
    }, 0)

    const isInCart = (id: string) => (id ? cartItems.includes(id) : false)

    const saveCart = (cartItems: string[]) => {
        setCartItems(cartItems)
        setStorageItem('cartItems', cartItems)
    }

    const addToCart = (id: string) => saveCart([...cartItems, id])

    const removeFromCart = (id: string) => {
        const newCartItems = cartItems.filter(
            (itemId) => itemId !== id && itemId
        )

        saveCart(newCartItems)
    }

    const clearCart = useCallback(() => {
        saveCart([])
    }, [])

    return (
        <CartContext.Provider
            value={{
                items: cartMapper(data?.games),
                quantity: cartItems.length,
                total: formatPrice(total || 0),
                loading,
                isInCart,
                addToCart,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
