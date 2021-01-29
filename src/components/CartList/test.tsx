import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardList from '.'
import mockItems from './mock'

const props = {
    items: mockItems,
    total: '€330.00'
}

describe('<CardList />', () => {
    it('should render the card list', () => {
        const { container } = renderWithTheme(<CardList {...props} />)

        expect(screen.getAllByRole('heading')).toHaveLength(2)
        expect(screen.getByText('€330.00')).toHaveStyle({ color: '#f231a5' })
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render the button', () => {
        renderWithTheme(<CardList {...props} hasButton />)

        expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
    })
})
