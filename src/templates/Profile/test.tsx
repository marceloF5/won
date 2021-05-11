import { render, screen } from 'utils/test-utils'

import Profile from '.'

jest.mock('next/router', () => ({
    useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('templates/Base', () => {
    return {
        __esModule: true,
        default: function Mock({ children }: { children: React.ReactNode }) {
            return <div data-testid="Mock Base">⁄{children}</div>
        }
    }
})

jest.mock('components/Heading', () => {
    return {
        __esModule: true,
        default: function Mock({ children }: { children: React.ReactNode }) {
            return <div data-testid="Mock Heading">⁄{children}</div>
        }
    }
})

jest.mock('components/ProfileMenu', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock ProfileMenu" />
        }
    }
})

describe('<Profile />', () => {
    it('should render the sections', () => {
        render(<Profile>Lorem Ipsum</Profile>)

        expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
        expect(screen.getByText(/my profile/i)).toBeInTheDocument()
        expect(screen.getByTestId(/mock profilemenu/i)).toBeInTheDocument()
    })
})
