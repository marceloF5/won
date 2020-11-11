import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
    it('should render the form', () => {
        const { container } = renderWithTheme(<FormSignIn />)

        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /sign in now/i })
        ).toBeInTheDocument()

        expect(container.parentElement).toMatchSnapshot()
    })

    it('should render the forgot password link', () => {
        renderWithTheme(<FormSignIn />)

        expect(
            screen.getByRole('link', { name: /forgot your password\?/i })
        ).toBeInTheDocument()
    })
    it('should render text to sign up if already have no an account', () => {
        renderWithTheme(<FormSignIn />)

        expect(
            screen.getByText(/do not have an account\?/i)
        ).toBeInTheDocument()
        expect(
            screen.getByRole('link', { name: /sign up/i })
        ).toBeInTheDocument()
    })
})
