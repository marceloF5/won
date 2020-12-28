import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
    it('should render with label', () => {
        renderWithTheme(<TextField label="TextField" name="LabelName" />)

        expect(screen.getByLabelText('TextField')).toBeInTheDocument()
    })

    it('should render without label', () => {
        renderWithTheme(<TextField />)

        expect(screen.queryByLabelText('TextField')).not.toBeInTheDocument()
    })

    it('should render with placeholder', () => {
        renderWithTheme(<TextField placeholder="hey you" />)

        expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
    })

    it('should changes its value when typing', async () => {
        const onInput = jest.fn()
        renderWithTheme(
            <TextField onInput={onInput} label="TextField" name="TextField" />
        )

        const input = screen.getByRole('textbox')
        const text = 'This is my text'
        userEvent.type(input, text)

        await waitFor(() => {
            expect(input).toHaveValue(text)
            expect(onInput).toHaveBeenCalledTimes(text.length)
        })

        expect(onInput).toHaveBeenCalledWith(text)
    })

    it('should be accessible by tab', () => {
        renderWithTheme(<TextField label="TextField" name="Textfield" />)

        const input = screen.getByLabelText('TextField')
        expect(document.body).toHaveFocus()

        userEvent.tab()
        expect(input).toHaveFocus()
    })

    it('should render with icon', () => {
        renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

        expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('should render with icon on the right side', () => {
        renderWithTheme(
            <TextField
                icon={<Email data-testid="icon" />}
                iconPosition="right"
            />
        )

        expect(screen.getByTestId('icon').parentElement).toHaveStyle({
            order: 1
        })
    })

    it('should NOT change value when input is disabled', async () => {
        const onInput = jest.fn()
        renderWithTheme(
            <TextField label="TextField" name="TextField" disabled />
        )

        expect(screen.getByRole('textbox')).toBeDisabled()

        const input = screen.getByRole('textbox')
        const text = 'This is my text'
        userEvent.type(input, text)

        await waitFor(() => {
            expect(input).not.toHaveValue(text)
        })

        expect(onInput).not.toHaveBeenCalled()
    })

    it('should NOT accessible when input is disabled', async () => {
        renderWithTheme(
            <TextField label="TextField" name="TextField" disabled />
        )

        const input = screen.getByLabelText('TextField')
        expect(document.body).toHaveFocus()

        userEvent.tab()
        expect(input).not.toHaveFocus()
    })

    it('should render with error', () => {
        const { container } = renderWithTheme(
            <TextField
                label="TextField"
                name="TextField"
                disabled
                error="Opps... invalid field"
            />
        )

        expect(screen.getByText('Opps... invalid field')).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })
})
