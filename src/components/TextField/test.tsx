import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'
import { render, screen, waitFor } from 'utils/test-utils'

import TextField from '.'

describe('<TextField />', () => {
    it('should render with label', () => {
        render(<TextField label="TextField" name="LabelName" />)

        expect(screen.getByLabelText('TextField')).toBeInTheDocument()
    })

    it('should render without label', () => {
        render(<TextField />)

        expect(screen.queryByLabelText('TextField')).not.toBeInTheDocument()
    })

    it('should render with placeholder', () => {
        render(<TextField placeholder="hey you" />)

        expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
    })

    it('should changes its value when typing', async () => {
        const onInputChange = jest.fn()
        render(
            <TextField
                onInputChange={onInputChange}
                label="TextField"
                name="TextField"
            />
        )

        const input = screen.getByRole('textbox')
        const text = 'This is my text'
        userEvent.type(input, text)

        await waitFor(() => {
            expect(input).toHaveValue(text)
            expect(onInputChange).toHaveBeenCalledTimes(text.length)
        })

        expect(onInputChange).toHaveBeenCalledWith(text)
    })

    it('should be accessible by tab', () => {
        render(<TextField label="TextField" name="Textfield" />)

        const input = screen.getByLabelText('TextField')
        expect(document.body).toHaveFocus()

        userEvent.tab()
        expect(input).toHaveFocus()
    })

    it('should render with icon', () => {
        render(<TextField icon={<Email data-testid="icon" />} />)

        expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('should render with icon on the right side', () => {
        render(
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
        const onInputChange = jest.fn()
        render(<TextField label="TextField" name="TextField" disabled />)

        expect(screen.getByRole('textbox')).toBeDisabled()

        const input = screen.getByRole('textbox')
        const text = 'This is my text'
        userEvent.type(input, text)

        await waitFor(() => {
            expect(input).not.toHaveValue(text)
        })

        expect(onInputChange).not.toHaveBeenCalled()
    })

    it('should NOT accessible when input is disabled', async () => {
        render(<TextField label="TextField" name="TextField" disabled />)

        const input = screen.getByLabelText('TextField')
        expect(document.body).toHaveFocus()

        userEvent.tab()
        expect(input).not.toHaveFocus()
    })

    it('should render with error', () => {
        const { container } = render(
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
