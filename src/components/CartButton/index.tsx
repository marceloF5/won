import {
    AddShoppingCart,
    RemoveShoppingCart
} from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button'
import { useCart } from 'hooks/useCart'

type CartButtonProps = {
    id: string
    hasText?: boolean
} & Pick<ButtonProps, 'size'>

const CartButton = ({
    id,
    hasText = false,
    size = 'small'
}: CartButtonProps) => {
    const { isInCart, addToCart, removeFromCart } = useCart()
    const ButtonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'

    return (
        <Button
            icon={
                isInCart(id) ? (
                    <RemoveShoppingCart aria-label="Remove from cart" />
                ) : (
                    <AddShoppingCart aria-label="Add to cart" />
                )
            }
            size={size}
            onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
        >
            {hasText && ButtonText}
        </Button>
    )
}

export default CartButton
