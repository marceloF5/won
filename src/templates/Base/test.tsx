import { render, screen } from 'utils/test-utils'
import Base from '.'

jest.mock('next-auth/client', () => ({
    useSession: jest.fn(() => {
        return [{ session: null }]
    })
}))

jest.mock('components/Menu', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Menu">Open Menu</div>
        }
    }
})

jest.mock('components/Footer', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Footer">Open Footer</div>
        }
    }
})

jest.mock('next/link', () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div>{children}</div>
    }
}))

describe('<Base />', () => {
    it('should render menu, footer and children', () => {
        render(
            <Base>
                <h1>Heading</h1>
            </Base>
        )

        expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
        expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /heading/i })
        ).toBeInTheDocument()
    })
})
