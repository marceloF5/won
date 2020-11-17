import { Story, Meta } from '@storybook/react/types-6-0'
import Auth, { AuthProps } from '.'

export default {
    title: 'Templates/Auth',
    component: Auth,
    args: {
        title: 'Auth'
    }
} as Meta

export const Default: Story<AuthProps> = (args) => (
    <Auth {...args}>
        <h1>Auth</h1>
    </Auth>
)
