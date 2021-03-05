import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { initializeApollo } from 'utils/apollo'
import Game, { GameTemplateProps } from 'templates/Game'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import {
    QueryGameBySlug,
    QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highLightMapper } from 'utils/mappers'
import {
    QueryUpcoming,
    QueryUpcomingVariables
} from 'graphql/generated/QueryUpcoming'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
    const router = useRouter()

    // if the page is not loaded the fallback is true and you could return some skeleton here
    if (router.isFallback) return null

    return <Game {...props} />
}

export async function getStaticPaths() {
    const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
        query: QUERY_GAMES,
        variables: { limit: 9 }
    })

    const paths = data.games.map(({ slug }) => ({ params: { slug } }))

    return { paths, fallback: true }
}

// Generate this page in build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const {
        data: { games }
    } = await apolloClient.query<QueryGameBySlug, QueryGameBySlugVariables>({
        query: QUERY_GAME_BY_SLUG,
        variables: { slug: `${params?.slug}` },
        fetchPolicy: 'no-cache'
    })

    if (!games.length) {
        return { notFound: true }
    }

    const game = games[0]

    const TODAY = new Date().toISOString().slice(0, 10) // yyyy-MM-dd
    const {
        data: { upcomingGames, sections }
    } = await apolloClient.query<QueryUpcoming, QueryUpcomingVariables>({
        query: QUERY_UPCOMING,
        variables: { date: TODAY },
        fetchPolicy: 'no-cache'
    })

    const {
        data: { recommended }
    } = await apolloClient.query<QueryRecommended>({
        query: QUERY_RECOMMENDED
    })

    return {
        revalidate: 60,
        props: {
            cover: `http://localhost:1337${game.cover?.src}`,
            gameInfo: {
                title: game.name,
                price: game.price,
                description: game.short_description
            },
            gallery: game.gallery.map((image) => ({
                src: `http://localhost:1337${image.src}`,
                label: image.label
            })),
            description: game.description,
            details: {
                developers: game.developers[0].name,
                releaseDate: game.release_date,
                platforms: game.platforms.map((platform) => platform.name),
                publicher: game.publisher?.name,
                rating: game.rating,
                genres: game.categories.map((category) => category.name)
            },
            upcomingTitle: sections?.upcomingGames?.title,
            upcomingHighlight: highLightMapper(
                sections?.upcomingGames?.highlight
            ),
            upcomingGames: gamesMapper(upcomingGames),
            recommendedGamesTitle: recommended?.section!.title,
            recommendedGames: gamesMapper(recommended?.section?.games)
        }
    }
}
