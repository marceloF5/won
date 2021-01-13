import { Story, Meta } from '@storybook/react/types-6-0'
import OrderList, { OrderListProps } from '.'

import itemsMock from './mock'

export default {
    title: 'Module/OrderList',
    component: OrderList,
    args: {
        items: itemsMock
    }
} as Meta

export const Default: Story<OrderListProps> = (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
        <OrderList {...args} />
    </div>
)
