import { render, screen } from 'utils/test-utils'

import FormSignUp from '.'
import { MockedProvider } from '@apollo/client/testing'

describe('<FormSignUp />', () => {
    it('should render the form', () => {
        const { container } = render(
            <MockedProvider>
                <FormSignUp />
            </MockedProvider>
        )

        expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
        expect(screen.getAllByPlaceholderText(/password/i)).toHaveLength(2)
        expect(
            screen.getByRole('button', { name: /sign up now/i })
        ).toBeInTheDocument()

        expect(container.parentElement).toMatchSnapshot()
    })

    it('should render text to sign in if already have an account', () => {
        render(
            <MockedProvider>
                <FormSignUp />
            </MockedProvider>
        )

        expect(
            screen.getByText(/already have an account\?/i)
        ).toBeInTheDocument()
        expect(
            screen.getByRole('link', { name: /sign in/i })
        ).toBeInTheDocument()
    })
})
