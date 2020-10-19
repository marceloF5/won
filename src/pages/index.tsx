import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gameCardMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
    return <Home {...props} />
}

export function getServerSideProps() {
    return {
        props: {
            banners: bannersMock,
            newGames: gameCardMock,
            mostPopularHighlight: highlightMock,
            mostPopularGames: gameCardMock,
            upcommingGames: gameCardMock,
            upcommingHighlight: highlightMock,
            upcommingMoreGames: gameCardMock,
            freeHighlight: highlightMock,
            freeGames: gameCardMock
        }
    }
}
