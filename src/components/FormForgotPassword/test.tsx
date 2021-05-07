import 'server.mock'
import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'
import FormForgotPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
    query
}))

describe('<FormForgotPassword />', () => {
    it('should render the form', () => {
        render(<FormForgotPassword />)

        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /send email/i })
        ).toBeInTheDocument()
    })

    it('should validate the email', async () => {
        render(<FormForgotPassword />)

        await userEvent.type(
            screen.getByPlaceholderText(/email/i),
            'valid@email.com'
        )

        userEvent.click(screen.getByRole('button', { name: /send email/i }))

        expect(
            await screen.findByText(/you just received an email/i)
        ).toBeInTheDocument()
    })

    it('should show an invalid email', async () => {
        render(<FormForgotPassword />)

        await userEvent.type(screen.getByPlaceholderText(/email/i), 'invalid')

        userEvent.click(screen.getByRole('button', { name: /send email/i }))

        expect(
            await screen.findByText(/must be a valid email/i)
        ).toBeInTheDocument()
    })

    it('should show an inexistent email error', async () => {
        render(<FormForgotPassword />)

        await userEvent.type(
            screen.getByPlaceholderText(/email/i),
            'false@email.com'
        )

        userEvent.click(screen.getByRole('button', { name: /send email/i }))

        expect(
            await screen.findByText(/this email does not exist/i)
        ).toBeInTheDocument()
    })

    it('should autofill if comes via logged user', async () => {
        query = { email: 'query@email' }
        render(<FormForgotPassword />)

        expect(screen.getByPlaceholderText(/email/i)).toHaveValue('query@email')
    })
})
