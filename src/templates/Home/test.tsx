import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
    banners: bannerMock,
    newGames: [gamesMock[0]],
    mostPopularHighlight: highlightMock,
    mostPopularGames: [gamesMock[0]],
    upcommingGames: [gamesMock[0]],
    upcommingHighlight: highlightMock,
    upcommingMoreGames: [gamesMock[0]],
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
        expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
    })
})
