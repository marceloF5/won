import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
    it('should render the username', () => {
        render(<UserDropdown username="Marcelo" />)

        expect(screen.getByText(/marcelo/i)).toBeInTheDocument()
    })

    it('should render the menu', () => {
        render(<UserDropdown username="Marcelo" />)

        userEvent.click(screen.getByText(/marcelo/i))

        expect(
            screen.getByRole('link', { name: /my profile/i })
        ).toBeInTheDocument()

        expect(
            screen.getByRole('link', { name: /wishlist/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /sign out/i })
        ).toBeInTheDocument()
    })
})
