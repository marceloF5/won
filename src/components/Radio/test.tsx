import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'

import Radio from '.'

describe('<Radio />', () => {
    it('should render without label', () => {
        renderWithTheme(<Radio />)

        expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
    })

    it('should render with white label', () => {
        renderWithTheme(
            <Radio label="radio label" labelFor="check" value="any value" />
        )

        expect(screen.getByRole('radio')).toBeInTheDocument()
        expect(screen.getByLabelText(/radio label/i)).toBeInTheDocument()
        expect(screen.getByText(/radio label/i)).toHaveStyle({
            color: '#fafafa'
        })
    })

    it('should render with black label', () => {
        renderWithTheme(
            <Radio label="radio label" labelFor="check" labelColor="black" />
        )

        expect(screen.queryByText(/radio label/i)).toHaveStyle({
            color: '#030517'
        })
    })

    it('should dispath onCheck when status changes', async () => {
        const onCheck = jest.fn()
        renderWithTheme(
            <Radio label="Radio" onCheck={onCheck} value="any value" />
        )

        expect(onCheck).not.toHaveBeenCalled()

        userEvent.click(screen.getByRole('radio'))
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1)
        })

        expect(onCheck).toHaveBeenCalledWith('any value')
    })

    it('should be accessible with tab', async () => {
        renderWithTheme(<Radio label="Radio" labelFor="radio" />)

        expect(document.body).toHaveFocus()

        userEvent.tab()

        expect(screen.getByLabelText(/radio/i)).toHaveFocus()
    })
})
