import { Story, Meta } from '@storybook/react/types-6-0'
import FormSignUp from '.'

export default {
    title: 'Module/FormSignUp',
    component: FormSignUp
} as Meta

export const Default: Story = () => (
    <div style={{ width: 300, margin: 'auto' }}>
        <FormSignUp />
    </div>
)
