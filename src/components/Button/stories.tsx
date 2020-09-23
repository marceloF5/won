import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import React from 'react'

import Button from '.'

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            type: 'string'
        },
        icon: {
            type: ''
        }
    }
} as Meta

export const Default: Story = (args) => <Button {...args} />
export const withIcon: Story = (args) => <Button {...args} />

Default.args = {
    children: 'Buy now'
}

withIcon.args = {
    size: 'small',
    children: 'Buy now',
    icon: <AddShoppingCart />
}
