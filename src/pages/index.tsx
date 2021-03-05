import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannerMapper, gamesMapper, highLightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
    return <Home {...props} />
}

// getStaticProps => it's works only to static data in build time
// getServerSideProps => it's works each request request (SSR) (it's never goes to the bundle)
// getInitialProps => it's works each request request (SSR) (it's goes to the bundle and does hydrate in CSR after first request)

export async function getStaticProps() {
    const apolloClient = initializeApollo()
    const TODAY = new Date().toISOString().slice(0, 10) // yyyy-MM-dd
    const {
        data: { banners, newGames, upcomingGames, freeGames, sections }
    } = await apolloClient.query<QueryHome, QueryHomeVariables>({
        query: QUERY_HOME,
        variables: { date: TODAY },
        fetchPolicy: 'no-cache'
    })

    return {
        revalidate: 10,
        props: {
            banners: bannerMapper(banners),
            newGamesTitle: sections!.newGames!.title,
            newGames: gamesMapper(newGames),
            mostPopularGamesTitle: sections!.popularGames!.title,
            mostPopularGames: gamesMapper(sections!.popularGames!.games),
            mostPopularHighlight: highLightMapper(
                sections?.popularGames?.highlight
            ),
            upcomingGamesTitle: sections!.upcomingGames!.title,
            upcomingGames: gamesMapper(upcomingGames),
            upcomingHighlight: highLightMapper(
                sections?.upcomingGames?.highlight
            ),
            freeGamesTitle: sections!.freeGames!.title,
            freeGames: gamesMapper(freeGames),
            freeHighlight: highLightMapper(sections?.freeGames?.highlight)
        }
    }
}
