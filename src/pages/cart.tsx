import Cart, { CartProps } from 'templates/Cart'

import cardMock from 'components/PaymentOptions/mock'
import gameMock from 'components/GameCardSlider/mock'
import itemsMock from 'components/CartList/mock'
import highlightMock from 'components/Highlight/mock'

export default function CartPage(props: CartProps) {
    return <Cart {...props} />
}

export async function getServerSideProps() {
    return {
        props: {
            items: itemsMock,
            total: '€480.00',
            cards: cardMock,
            recommendedGames: gameMock,
            recommendedHighlight: highlightMock
        }
    }
}
