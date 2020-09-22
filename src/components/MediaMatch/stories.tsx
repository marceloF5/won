import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch from '.'

export default {
    title: 'MediaMatch',
    component: MediaMatch,
    argsProps: {}
} as Meta

export const Desktop: Story = () => (
    <MediaMatch greaterThan="medium">Only Desktop</MediaMatch>
)
export const Mobile: Story = () => (
    <MediaMatch lessThan="medium">Only Mobile</MediaMatch>
)

Mobile.parameters = {
    viewport: {
        defaultViewport: 'mobile1'
    }
}
