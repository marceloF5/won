import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
    it('should render with label', () => {
        renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

        expect(screen.getByRole('checkbox')).toBeInTheDocument()
        expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
        expect(screen.getByText(/checkbox label/i)).toHaveAttribute(
            'for',
            'check'
        )
    })

    it('should render without label', () => {
        renderWithTheme(<Checkbox />)

        expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
    })

    it('should render with black label', () => {
        renderWithTheme(
            <Checkbox
                label="checkbox label"
                labelFor="check"
                labelColor="black"
            />
        )

        expect(screen.queryByText(/checkbox label/i)).toHaveStyle({
            color: '#030517'
        })
    })

    it('should dispath onCheck when status changes', async () => {
        const onCheck = jest.fn()
        renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />)

        expect(onCheck).not.toHaveBeenCalled()

        userEvent.click(screen.getByRole('checkbox'))
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1)
        })
    })
})
