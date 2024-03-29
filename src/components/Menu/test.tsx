import { render, screen, fireEvent } from 'utils/test-utils'
import Menu from '.'

describe('<Menu />', () => {
    it('should render the menu', () => {
        render(<Menu />)

        expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
        expect(
            screen.getByRole('img', { name: /won games/i })
        ).toBeInTheDocument()
    })

    it('should handle the open/close mobile menu', () => {
        render(<Menu />)

        const fullMenuElement = screen.getByRole('navigation', { hidden: true })

        expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
        expect(fullMenuElement).toHaveStyle({ opacity: 0 })

        fireEvent.click(screen.getByLabelText(/open menu/i))

        expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
        expect(fullMenuElement).toHaveStyle({ opacity: 1 })

        fireEvent.click(screen.getByLabelText(/close menu/i))

        expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
        expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    })

    it('should show register box when logged out', () => {
        render(<Menu />)

        expect(screen.getByText(/sign in now/i)).toBeInTheDocument()
        expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    })

    it('should not show sign up when logged in', () => {
        render(<Menu username="marcelo" />)

        expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    })

    it('should not show sign in or dropdownUser if loading is true', () => {
        render(<Menu username="marcelo" loading />)

        expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
    })
})
