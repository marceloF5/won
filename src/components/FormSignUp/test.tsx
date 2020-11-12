import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
    it('should render the form', () => {
        const { container } = renderWithTheme(<FormSignUp />)

        expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
        expect(screen.getAllByPlaceholderText(/password/i)).toHaveLength(2)
        expect(
            screen.getByRole('button', { name: /sign up now/i })
        ).toBeInTheDocument()

        expect(container.parentElement).toMatchSnapshot()
    })

    it('should render text to sign in if already have an account', () => {
        renderWithTheme(<FormSignUp />)

        expect(
            screen.getByText(/already have an account\?/i)
        ).toBeInTheDocument()
        expect(
            screen.getByRole('link', { name: /sign in/i })
        ).toBeInTheDocument()
    })
})
