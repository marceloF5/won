import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from '.'

export default {
    title: 'atoms/Logo',
    component: Logo
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
