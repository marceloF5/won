import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
    title: 'atoms/Form/Radio',
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'won-dark'
        }
    },
    argsTypes: {
        onCheck: { action: 'checked' }
    },
    component: Radio
} as Meta

export const Default: Story<RadioProps> = (args) => (
    <>
        <Radio
            style={{ marginTop: '1rem' }}
            label="first"
            labelFor="first"
            id="first"
            name="Name"
            value="First"
            defaultChecked
            {...args}
        />
        <Radio
            style={{ marginTop: '1rem' }}
            label="second"
            labelFor="second"
            id="second"
            name="Name"
            value="Second"
            {...args}
        />
        <Radio
            style={{ marginTop: '1rem' }}
            label="third"
            labelFor="third"
            id="third"
            name="Name"
            value="Third"
            {...args}
        />
    </>
)
