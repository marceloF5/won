import CartList, { CartListProps } from 'components/CartList'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Showcase from 'components/Showcase'
import React from 'react'
import Base from 'templates/Base'
import * as S from './styles'

export type CartProps = {
    recommendedGamesTitle: string
    recommendedGames: GameCardProps[]
    recommendedHighlight: HighlightProps
} & CartListProps &
    Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
    recommendedGamesTitle,
    recommendedGames,
    recommendedHighlight,
    items,
    total,
    cards
}: CartProps) => {
    const handlePayment = () => ({})

    return (
        <Base>
            <Container>
                <Heading lineLeft lineColor="secondary">
                    My Cart
                </Heading>
                {items?.length ? (
                    <S.Content>
                        <CartList items={items} total={total} />
                        <PaymentOptions
                            cards={cards}
                            handlePayment={handlePayment}
                        />
                    </S.Content>
                ) : (
                    <Empty
                        title="Your cart is empty"
                        description="Go back to the store and explore great games and offers"
                        hasLink
                    />
                )}
                <Divider />
            </Container>
            <Showcase
                title={recommendedGamesTitle}
                games={recommendedGames}
                highlight={recommendedHighlight}
            />
        </Base>
    )
}

export default Cart
