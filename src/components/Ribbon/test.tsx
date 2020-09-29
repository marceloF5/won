import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
    it('should render the text correctly', () => {
        const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>)

        expect(screen.getByText(/best seller/i)).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render with the primary color', () => {
        renderWithTheme(<Ribbon>Best Seller</Ribbon>)

        expect(screen.getByText(/best seller/i)).toHaveStyle({
            backgroundColor: '#f231a5'
        })
    })

    it('should render with the secodary color', () => {
        renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

        expect(screen.getByText(/best seller/i)).toHaveStyle({
            backgroundColor: '#3cd3c1'
        })
    })

    it('should render with the normal size as default', () => {
        renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)

        expect(screen.getByText(/best seller/i)).toHaveStyle({
            fontSize: '1.2rem',
            height: '2.6rem'
        })
    })
})
