import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'

import Checkbox from '.'

describe('<Checkbox />', () => {
    it('should render with label', () => {
        render(<Checkbox label="checkbox label" labelFor="check" />)

        expect(screen.getByRole('checkbox')).toBeInTheDocument()
        expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
        expect(screen.getByText(/checkbox label/i)).toHaveAttribute(
            'for',
            'check'
        )
    })

    it('should render without label', () => {
        render(<Checkbox />)

        expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
    })

    it('should render with black label', () => {
        render(
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
        render(<Checkbox label="Checkbox" onCheck={onCheck} />)

        expect(onCheck).not.toHaveBeenCalled()

        userEvent.click(screen.getByRole('checkbox'))
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1)
        })

        expect(onCheck).toHaveBeenCalledWith(true)
    })

    it('should dispath onCheck when status changes and isChecked is true', async () => {
        const onCheck = jest.fn()
        render(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />)

        userEvent.click(screen.getByRole('checkbox'))
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1)
        })

        expect(onCheck).toHaveBeenCalledWith(false)
    })

    it('should be accessible with tab', async () => {
        render(<Checkbox label="Checkbox" labelFor="checkbox" />)

        expect(document.body).toHaveFocus()

        userEvent.tab()

        expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
    })
})
