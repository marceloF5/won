import Cart, { CartProps } from 'templates/Cart'

import cardMock from 'components/PaymentOptions/mock'
import itemsMock from 'components/CartList/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highLightMapper } from 'utils/mappers'

export default function CartPage(props: CartProps) {
    return <Cart {...props} />
}

export async function getServerSideProps() {
    const apolloClient = initializeApollo()

    const {
        data: { recommended }
    } = await apolloClient.query<QueryRecommended>({
        query: QUERY_RECOMMENDED
    })

    return {
        props: {
            items: itemsMock,
            total: '€480.00',
            cards: cardMock,
            recommendedGamesTitle: recommended?.section!.title,
            recommendedGames: gamesMapper(recommended?.section?.games),
            recommendedHighlight: highLightMapper(
                recommended?.section?.highlight
            )
        }
    }
}
