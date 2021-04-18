import React from 'react'
import { render, screen } from 'utils/test-utils'

import GameInfo from '.'

const props = {
    id: '1',
    title: 'My game title',
    description: 'My game description',
    price: 210
}

describe('<GameInfo />', () => {
    it('should render the game information', () => {
        const { container } = render(<GameInfo {...props} />)

        expect(
            screen.getByRole('heading', { name: /my game title/i })
        ).toBeInTheDocument()
        expect(screen.getByText(/my game description/i)).toBeInTheDocument()
        expect(screen.getByText(/\$210\.00/)).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render buttons', () => {
        render(<GameInfo {...props} />)

        expect(
            screen.getByRole('button', { name: /add to cart/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /wishlist/i })
        ).toBeInTheDocument()
    })

    it('should render word FREE in label when price is 0', () => {
        render(<GameInfo {...props} price={0} />)

        expect(screen.getByText('FREE')).toBeInTheDocument()
    })
})
