import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'
import cards from './mock'

describe('<PaymentOptions />', () => {
    it('should render the saved card options and the add new card button', () => {
        renderWithTheme(
            <PaymentOptions cards={cards} handlePayment={jest.fn} />
        )

        expect(screen.getByLabelText(/1234/)).toBeInTheDocument()
        expect(screen.getByLabelText(/4321/)).toBeInTheDocument()
        expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
    })

    it('should handle select card when clicking on the label', async () => {
        renderWithTheme(
            <PaymentOptions cards={cards} handlePayment={jest.fn} />
        )

        userEvent.click(screen.getByLabelText(/1234/))

        await waitFor(() => {
            expect(screen.getByRole('radio', { name: /1234/ })).toBeChecked()
        })
    })

    it('should not call handlePayment when button is disabled', () => {
        const handlePayment = jest.fn()
        renderWithTheme(
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
        )

        userEvent.click(screen.getByRole('button', { name: /buy now/i }))

        expect(handlePayment).not.toHaveBeenCalled()
    })

    it('should not call handlePayment when credit card is selected', async () => {
        const handlePayment = jest.fn()
        renderWithTheme(
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
        )
        userEvent.click(screen.getByLabelText(/1234/))
        userEvent.click(screen.getByRole('button', { name: /buy now/i }))

        await waitFor(() => {
            expect(handlePayment).toHaveBeenCalled()
        })
    })
})
