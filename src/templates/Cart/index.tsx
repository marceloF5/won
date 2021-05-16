import CartList, { CartListProps } from 'components/CartList'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Heading from 'components/Heading'
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
    cards
}: CartProps) => {
    const handlePayment = () => ({})

    return (
        <Base>
            <Container>
                <Heading lineLeft lineColor="secondary">
                    My Cart
                </Heading>
                <S.Content>
                    <CartList />
                    <PaymentOptions
                        cards={cards}
                        handlePayment={handlePayment}
                    />
                </S.Content>
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
