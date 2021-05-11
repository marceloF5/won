import { render, screen } from 'utils/test-utils'
import cardMock from 'components/PaymentOptions/mock'
import gameMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import Cart from '.'

const props = {
    cards: cardMock,
    recommendedGamesTitle: 'You may like these games',
    recommendedGames: gameMock,
    recommendedHighlight: highlightMock
}

jest.mock('templates/Base', () => {
    return {
        __esModule: true,
        default: function Mock({ children }: { children: React.ReactNode }) {
            return <div data-testid="Mock Base">⁄{children}</div>
        }
    }
})

jest.mock('components/Showcase', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Showcase" />
        }
    }
})

jest.mock('components/Cartlist', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Cart" />
        }
    }
})

jest.mock('components/PaymentOptions', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock PaymentOptions" />
        }
    }
})

jest.mock('components/Empty', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Empty" />
        }
    }
})

describe('<Cart />', () => {
    it('should render sections', () => {
        render(<Cart {...props} />)

        expect(
            screen.getByRole('heading', { name: /my cart/i })
        ).toBeInTheDocument()
        expect(screen.getByTestId('Mock Cart')).toBeInTheDocument()
        expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
        expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
        expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
    })
})
