import { Story, Meta } from '@storybook/react/types-6-0'
import CardList, { CartListProps } from '.'
import items from './mock'

export default {
    title: 'CardList',
    component: CardList,
    parameters: {
        backgrounds: {
            default: 'won-dark'
        }
    },
    argTypes: {
        cartContextValue: {
            type: ''
        },
        items: {
            type: ''
        }
    }
} as Meta

export const Default: Story = (args) => (
    <div style={{ maxWidth: 800 }}>
        <CardList {...args} />
    </div>
)

Default.args = {
    total: '€330.00',
    cartContextValue: { items }
}

export const WithButton: Story = (args) => (
    <div style={{ maxWidth: 800 }}>
        <CardList {...args} hasButton />
    </div>
)

WithButton.args = {
    total: '€330.00',
    cartContextValue: { items }
}

export const Empty: Story<CartListProps> = () => (
    <div style={{ maxWidth: 800 }}>
        <CardList />
    </div>
)
