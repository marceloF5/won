import { useEffect, useState, useContext, createContext, useMemo } from 'react'
import { useSession } from 'next-auth/client'
import { GameCardProps } from 'components/GameCard'
import { useQueryWishlist } from 'graphql/queries/wishlist'
import { gamesMapper } from 'utils/mappers'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
import { useMutation } from '@apollo/client'
import {
    MUTATION_CREATE_WISHLIST,
    MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'

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
    const [wishlistId, setWishlistId] = useState<string | null>()
    const [wishlistItems, setWishlistItems] = useState<
        QueryWishlist_wishlists_games[]
    >([])
    const [session] = useSession()

    const { data, loading: loadingQuery } = useQueryWishlist({
        skip: !session?.user?.email,
        context: { session },
        variables: {
            identifier: session?.user?.email as string
        }
    })

    const [createList, { loading: loadingCreate }] = useMutation(
        MUTATION_CREATE_WISHLIST,
        {
            context: { session },
            onCompleted: (data) => {
                setWishlistItems(data?.createWishlist?.wishlist?.games || [])
                setWishlistId(data?.createWishlist?.wishlist?.id)
            }
        }
    )

    const [updateList, { loading: loadingUpdate }] = useMutation(
        MUTATION_UPDATE_WISHLIST,
        {
            context: { session },
            onCompleted: (data) => {
                setWishlistItems(data?.updateWishlist?.wishlist?.games || [])
            }
        }
    )

    useEffect(() => {
        setWishlistItems(data?.wishlists[0]?.games || [])
        setWishlistId(data?.wishlists[0]?.id)
    }, [data])

    const wishlistIds = useMemo(() => wishlistItems.map((game) => game.id), [
        wishlistItems
    ])

    const isInWishlist = (id: string) =>
        !!wishlistItems.find((game) => game.id === id)

    const addToWishlist = (id: string) => {
        if (!wishlistId) {
            return createList({
                variables: {
                    input: {
                        data: {
                            games: [...wishlistIds, id]
                        }
                    }
                }
            })
        }

        return updateList({
            variables: {
                input: {
                    where: { id: wishlistId },
                    data: { games: [...wishlistIds, id] }
                }
            }
        })
    }

    const removeFromWishlist = (id: string) => {
        return updateList({
            variables: {
                input: {
                    where: { id: wishlistId },
                    data: {
                        games: wishlistIds.filter(
                            (gameId: string) => gameId !== id
                        )
                    }
                }
            }
        })
    }

    return (
        <WishlistContext.Provider
            value={{
                items: gamesMapper(wishlistItems),
                loading: loadingQuery || loadingCreate || loadingUpdate,
                isInWishlist,
                addToWishlist,
                removeFromWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
