import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing'

import filterItemsMock from 'components/ExploreSidebar/mock'
import { fetchMoreMock, gamesMock, noGamesMock } from './mocks'
import { render, screen } from 'utils/test-utils'
import Games from '.'
import apolloCache from 'utils/apolloCache'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
    push,
    query: '',
    asPath: '',
    route: '/'
}))

jest.mock('next/link', () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <a>{children}</a>
    }
}))

jest.mock('templates/Base', () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock Base">{children}</div>
    }
}))

describe('<Games />', () => {
    it('should render empty when there is no game found', async () => {
        render(
            <MockedProvider mocks={[noGamesMock]} addTypename={false}>
                <Games filterItems={filterItemsMock} />
            </MockedProvider>
        )
        expect(
            await screen.findByText(/we did not any games with this filter/i)
        ).toBeInTheDocument()
    })

    it('should render sections', async () => {
        render(
            <MockedProvider mocks={[gamesMock]} addTypename={false}>
                <Games filterItems={filterItemsMock} />
            </MockedProvider>
        )

        expect(await screen.findByText(/price/i)).toBeInTheDocument()
        expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

        expect(
            await screen.findByRole('button', { name: /show more/i })
        ).toBeInTheDocument()
    })

    it('should render more games when show more is clicked', async () => {
        render(
            <MockedProvider
                mocks={[gamesMock, fetchMoreMock]}
                cache={apolloCache}
            >
                <Games filterItems={filterItemsMock} />
            </MockedProvider>
        )

        expect(await screen.findByText(/price/i)).toBeInTheDocument()

        userEvent.click(
            await screen.findByRole('button', { name: /show more/i })
        )

        expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()
    })

    it('should change push router with selecting a filter', async () => {
        render(
            <MockedProvider
                mocks={[gamesMock, fetchMoreMock]}
                cache={apolloCache}
            >
                <Games filterItems={filterItemsMock} />
            </MockedProvider>
        )

        userEvent.click(
            await screen.findByRole('checkbox', { name: /windows/i })
        )
        userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }))
        userEvent.click(await screen.findByLabelText(/low to high/i))

        expect(push).toHaveBeenCalledWith({
            pathname: '/games',
            query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
        })
    })
})
