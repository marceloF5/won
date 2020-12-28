import { Story, Meta } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined'
import TextField, { TextFieldProps } from '.'

export default {
    title: 'atoms/Form/TextField',
    component: TextField,
    args: {
        disabled: false,
        label: 'E-mail',
        name: 'email',
        initialValue: 'mp.fortunato88@gmail.com',
        placeholder: 'E-mail'
    },
    argTypes: {
        onInput: { action: 'changed' },
        icon: { type: '' }
    }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
        <TextField {...args} />
    </div>
)

export const withIcon: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
        <TextField {...args} />
    </div>
)
withIcon.args = {
    icon: <Email />
}

export const withError: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
        <TextField {...args} />
    </div>
)
withError.args = {
    icon: <Email />,
    error: 'Opps... invalid field'
}
