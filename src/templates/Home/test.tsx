import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

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
        renderWithTheme(<Home {...props} />)

        expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
        expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
    })
})
