import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { GetServerSidePropsContext } from 'next'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import gamesMock from 'components/GameCardSlider/mock'
import protectedRoutes from 'utils/protected-routes'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'
import {
    QueryWishlist,
    QueryWishlistVariables
} from 'graphql/generated/QueryWishlist'

export default function WishlistPage(props: WishlistTemplateProps) {
    return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await protectedRoutes(context)
    const apolloClient = initializeApollo(null, session)

    if (!session) return {}

    await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
        query: QUERY_WISHLIST,
        variables: {
            identifier: session.user.email as string
        }
    })

    const {
        data: { recommended }
    } = await apolloClient.query<QueryRecommended>({
        query: QUERY_RECOMMENDED
    })

    return {
        props: {
            session,
            initialApolloState: apolloClient.cache.extract(),
            games: gamesMock,
            recommendedGamesTitle: recommended?.section!.title,
            recommendedGames: gamesMapper(recommended?.section?.games),
            recommendedHighlight: highlightMapper(
                recommended?.section?.highlight
            )
        }
    }
}
