import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import GameCard from '.'

const props = {
    title: 'Population Zero',
    developer: 'Rockestar Games',
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    price: '€ 65.00'
}

describe('<GameCard />', () => {
    it('should render correctly', () => {
        renderWithTheme(<GameCard {...props} />)

        expect(
            screen.getByRole('heading', { name: props.title })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: props.developer })
        ).toBeInTheDocument()
        expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
            'src',
            props.img
        )

        expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
    })

    it('should render price in label', () => {
        renderWithTheme(<GameCard {...props} />)

        const price = screen.getByText('€ 65.00')

        expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
        expect(price).toHaveStyle({
            backgroundColor: '#3cd3c1'
        })
    })

    it('should render a line-through in price when promotional', () => {
        renderWithTheme(<GameCard {...props} promotionalPrice="€ 20.00" />)

        const promotionalPrice = screen.getByText('€ 65.00')
        const price = screen.getByText('€ 20.00')

        expect(promotionalPrice).toHaveStyle({ textDecoration: 'line-through' })
        expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    })

    it('should render a fulled Favorite icon when favorite is true', () => {
        renderWithTheme(<GameCard {...props} favorite />)

        expect(
            screen.getByLabelText(/remove from wishlist/i)
        ).toBeInTheDocument()
    })

    it('should call on onFav method favorite is clicked', () => {
        const onFav = jest.fn()

        renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

        const favButton = screen.getAllByRole('button')[0]

        fireEvent.click(favButton)
    })
})
