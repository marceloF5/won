import { render, screen } from 'utils/test-utils'

import Wishlist from '.'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
    recommendedGamesTitle: 'You may like these games',
    recommendedGames: gamesMock,
    recommendedHighlight: highlightMock
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
            return <div data-testid="Mock Showcase" />
        }
    }
})

describe('<Wishlist />', () => {
    it('should render wishlist correctly', () => {
        render(<Wishlist {...props} games={gamesMock} />)

        expect(
            screen.getByRole('heading', { name: /wishlist/i })
        ).toBeInTheDocument()

        expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
        expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    })

    it('should render empty when there are no games ', () => {
        render(<Wishlist {...props} />)

        expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

        expect(
            screen.getByRole('heading', { name: /your wishlist is empty/i })
        ).toBeInTheDocument()
    })
})
