import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
    title: 'Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'won-dark'
        }
    },
    argTypes: {
        onCheck: { action: 'checked' }
    }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
    <>
        <Checkbox
            style={{ marginBottom: '1rem' }}
            name="category"
            label="Action"
            labelFor="action"
            isChecked
            {...args}
        />
        <Checkbox
            style={{ marginBottom: '1rem' }}
            name="category"
            label="Adventure"
            labelFor="adventure"
            {...args}
        />
        <Checkbox
            style={{ marginBottom: '1rem' }}
            name="category"
            label="Strategy"
            labelFor="strategy"
            {...args}
        />
    </>
)
