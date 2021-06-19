import { createContext, useContext } from 'react'
import { GameCardProps } from 'components/GameCard'

export type WishlistContextData = {
    items: GameCardProps[]
    loading: boolean
    isInWishlist: (id: string) => boolean
    addToWishlist: (id: string) => void
    removeFromWishlist: (id: string) => void
}

export const WishlistContextDefaultValues = {
    items: [],
    loading: false,
    isInWishlist: () => false,
    addToWishlist: () => null,
    removeFromWishlist: () => null
}

export const WishlistContext = createContext<WishlistContextData>(
    WishlistContextDefaultValues
)

export type WishlistProvidersProps = {
    children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProvidersProps) => {
    const isInWishlist = (id: string) => false
    const addToWishlist = (id: string) => {}
    const removeFromWishlist = (id: string) => {}

    return (
        <WishlistContext.Provider
            value={{ isInWishlist, addToWishlist, removeFromWishlist }}
        >
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
