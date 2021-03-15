import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highLightMapper } from 'utils/mappers'
import { GetServerSidePropsContext } from 'next'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import gamesMock from 'components/GameCardSlider/mock'
import protectedRoutes from 'utils/protected-routes'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

export default function WishlistPage(props: WishlistTemplateProps) {
    return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await protectedRoutes(context)
    const apolloClient = initializeApollo()

    const {
        data: { recommended }
    } = await apolloClient.query<QueryRecommended>({
        query: QUERY_RECOMMENDED
    })

    return {
        props: {
            session,
            games: gamesMock,
            recommendedGamesTitle: recommended?.section!.title,
            recommendedGames: gamesMapper(recommended?.section?.games),
            recommendedHighlight: highLightMapper(
                recommended?.section?.highlight
            )
        }
    }
}
