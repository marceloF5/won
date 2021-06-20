import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button'
import Spinner from 'components/Spinner'
import { useWishlist } from 'hooks/useWishlist'
import { useSession } from 'next-auth/client'
import { useState } from 'react'

type WishlistButtonProps = {
    id: string
    hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
    id,
    hasText,
    size = 'small'
}: WishlistButtonProps) => {
    const [loading, setLoading] = useState(false)
    const [session] = useSession()
    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

    const buttonText = isInWishlist(id)
        ? 'Remove from wishList'
        : 'Add to Wishlist'

    const handleClick = async () => {
        setLoading(true)
        isInWishlist(id)
            ? await removeFromWishlist(id)
            : await addToWishlist(id)
        setLoading(false)
    }

    if (!session) return null

    return (
        <Button
            icon={
                loading ? (
                    <Spinner />
                ) : isInWishlist(id) ? (
                    <Favorite aria-label={buttonText} />
                ) : (
                    <FavoriteBorder aria-label={buttonText} />
                )
            }
            onClick={handleClick}
            minimal
            size={size}
        >
            {hasText && buttonText}
        </Button>
    )
}

export default WishlistButton
