import OrderList, { OrderListProps } from 'components/OrderList'
import Profile from 'templates/Profile'

import mockOrders from 'components/OrderList/mock'

export default function Orders({ items }: OrderListProps) {
    return (
        <Profile>
            <OrderList items={items} />
        </Profile>
    )
}

export function getServerSideProps() {
    return {
        props: {
            items: mockOrders
        }
    }
}
