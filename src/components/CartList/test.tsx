import { render, screen } from 'utils/test-utils'
import CardList from '.'
import items from './mock'
import { CartContextDefaultValues } from 'hooks/useCart'

const cartProviderProps = {
    ...CartContextDefaultValues,
    items,
    total: '€330.00',
    loading: false
}
describe('<CardList />', () => {
    it('should render the card list', () => {
        const { container } = render(<CardList />, { cartProviderProps })
        expect(screen.getAllByRole('heading')).toHaveLength(2)
        expect(screen.getByText('€330.00')).toHaveStyle({ color: '#f231a5' })
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render the button', () => {
        render(<CardList hasButton />, { cartProviderProps })

        expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
    })

    it('should render loading', () => {
        render(<CardList hasButton />, {
            cartProviderProps: {
                ...CartContextDefaultValues,
                items,
                total: '€330.00',
                loading: true
            }
        })

        expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
    })

    it('should render empty if there are no games', () => {
        render(<CardList />)

        expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
        expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
    })
})
