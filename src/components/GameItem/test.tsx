import { render, screen } from 'utils/test-utils'

import GameItem from '.'
import { CartContextDefaultValues } from 'hooks/useCart'
import userEvent from '@testing-library/user-event'

const props = {
    id: '1',
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: '€215.00'
}

describe('<GameItem />', () => {
    it('should render the item', () => {
        render(<GameItem {...props} />)

        expect(
            screen.getByRole('img', { name: /red dead redemption 2/i })
        ).toHaveAttribute(
            'src',
            'https://source.unsplash.com/user/willianjusten/151x70'
        )
        expect(
            screen.getByRole('img', { name: /red dead redemption 2/i })
        ).toHaveAttribute('alt', 'Red Dead Redemption 2')
        expect(
            screen.getByRole('heading', { name: /red dead redemption 2/i })
        ).toBeInTheDocument()
        expect(screen.getByText(/€215.00/i)).toBeInTheDocument()
    })

    it('should render the item with download link', () => {
        const downloadLink = 'http://link'

        render(<GameItem {...props} downloadLink={downloadLink} />)

        expect(
            screen.getByRole('link', { name: `Get ${props.title} here` })
        ).toHaveAttribute('href', downloadLink)
    })

    it('should render the payment info', () => {
        const paymentInfo = {
            flag: 'mastercard',
            img: '/img/master-card.img',
            number: '**** **** **** 1234',
            purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
        }

        render(<GameItem {...props} paymentInfo={paymentInfo} />)

        expect(
            screen.getByRole('img', { name: /mastercard/i })
        ).toHaveAttribute('src', '/img/master-card.img')
        expect(screen.getByText('**** **** **** 1234')).toBeInTheDocument()
        expect(
            screen.getByText('Purchase made on 07/20/2020 at 20:32')
        ).toBeInTheDocument()
    })

    it('should render remove if the item is inside of the cart user should be able to remove game from cart', () => {
        const cartProviderProps = {
            ...CartContextDefaultValues,
            isInCart: () => true,
            removeFromCart: jest.fn()
        }

        render(<GameItem {...props} />, { cartProviderProps })
        const removeLink = screen.getByText(/remove/i)

        expect(removeLink).toBeInTheDocument()

        userEvent.click(removeLink)

        expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
    })
})
