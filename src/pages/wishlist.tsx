import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highLightMapper } from 'utils/mappers'

import gamesMock from 'components/GameCardSlider/mock'

export default function WishlistPage(props: WishlistTemplateProps) {
    return <Wishlist {...props} />
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
            games: gamesMock,
            recommendedGamesTitle: recommended?.section!.title,
            recommendedGames: gamesMapper(recommended?.section?.games),
            recommendedHighlight: highLightMapper(
                recommended?.section?.highlight
            )
        }
    }
}
