import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Wishlist from '.'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
    recommendedGames: gamesMock,
    recommendedHighlight: highlightMock
}

jest.mock('components/Showcase', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Showcase" />
        }
    }
})

describe('<Wishlist />', () => {
    it('should render wishlist correctly', () => {
        renderWithTheme(<Wishlist {...props} games={gamesMock} />)

        expect(
            screen.getByRole('heading', { name: /wishlist/i })
        ).toBeInTheDocument()

        expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
        expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    })

    it('should render empty when there are no games ', () => {
        renderWithTheme(<Wishlist {...props} />)

        expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

        expect(
            screen.getByRole('heading', { name: /your wishlist is empty/i })
        ).toBeInTheDocument()
    })
})
