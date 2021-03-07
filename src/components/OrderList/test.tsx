import { render, screen } from 'utils/test-utils'

import OrderList from '.'
import itemsMock from './mock'

jest.mock('components/Empty', () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock Empty" />
    }
}))

jest.mock('components/GameItem', () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock GameItem">{children}</div>
    }
}))

describe('<OrderList />', () => {
    it('should render the game items', () => {
        render(<OrderList items={itemsMock} />)

        expect(
            screen.getByRole('heading', { name: /my orders/i })
        ).toBeInTheDocument()

        expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
        expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
    })

    it('should render the empty', () => {
        render(<OrderList />)

        expect(screen.queryAllByTestId('Mock GameItem')).toHaveLength(0)
        expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
    })
})
