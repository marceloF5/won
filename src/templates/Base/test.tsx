import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from '.'

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
        renderWithTheme(
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
