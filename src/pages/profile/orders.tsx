import { GetServerSidePropsContext } from 'next'
import OrderList, { OrderListProps } from 'components/OrderList'
import Profile from 'templates/Profile'
import mockOrders from 'components/OrderList/mock'
import protectedRoutes from 'utils/protected-routes'

export default function Orders({ items }: OrderListProps) {
    return (
        <Profile>
            <OrderList items={items} />
        </Profile>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await protectedRoutes(context)

    return {
        props: {
            session,
            items: mockOrders
        }
    }
}
