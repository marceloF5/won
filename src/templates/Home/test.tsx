import 'match-media-mock'

import { render, screen } from 'utils/test-utils'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
    banners: bannerMock,
    newGamesTitle: 'News',
    newGames: [gamesMock[0]],
    mostPopularGamesTitle: 'Most Popular Games',
    mostPopularGames: [gamesMock[0]],
    mostPopularHighlight: highlightMock,
    upcomingGamesTitle: 'Upcomming Games',
    upcomingGames: [gamesMock[0]],
    upcomingHighlight: highlightMock,
    freeGamesTitle: 'Free Games',
    freeGames: [gamesMock[0]],
    freeHighlight: highlightMock
}

jest.mock('templates/Base', () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock Base">{children}</div>
    }
}))

jest.mock('components/Showcase', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Showcase">Open Showcase</div>
        }
    }
})

jest.mock('components/BannerSlider', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock BannerSlider">Open BannerSlider</div>
        }
    }
})

describe('<Home />', () => {
    it('should render footer and menu', () => {
        render(<Home {...props} />)

        expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
        expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
    })
})
