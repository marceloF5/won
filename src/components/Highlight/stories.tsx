import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
    title: 'Highlight',
    component: Highlight,
    args: {
        title: 'Read Dead it back',
        subtitle: 'Come see John new adventures',
        backgroundImage:
            'https://source.unsplash.com/user/willianjusten/1042x580',
        buttonLabel: 'Buy Now',
        buttonLink: '/games',
        alignment: 'right'
    }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
    <div style={{ maxWidth: '104rem' }}>
        <Highlight {...args} />
    </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
    <div style={{ maxWidth: '104rem' }}>
        <Highlight {...args} />
    </div>
)

WithFloatImage.args = {
    floatImage: '/img/red-dead-float.png'
}
