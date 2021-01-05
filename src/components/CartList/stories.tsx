import { Story, Meta } from '@storybook/react/types-6-0'
import CardList, { CartListProps } from '.'

import mockItems from './mock'

export default {
    title: 'CardList',
    component: CardList,
    args: {
        items: mockItems,
        total: '€ 300.00'
    },
    parameters: {
        backgrounds: {
            default: 'won-dark'
        }
    },
    argTypes: {
        items: {
            type: ''
        }
    }
} as Meta

export const Default: Story<CartListProps> = (args) => (
    <div style={{ maxWidth: 800 }}>
        <CardList {...args} />
    </div>
)
