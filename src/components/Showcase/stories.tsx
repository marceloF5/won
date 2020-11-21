import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase, { ShowCaseProps } from '.'
import highlightMock from 'components/Highlight/mock'
import GamesMock from 'components/GameCardSlider/mock'

export default {
    title: 'Showcase',
    component: Showcase,
    decorators: [
        (Story) => (
            <div style={{ margin: '0 auto' }}>
                <Story />
            </div>
        )
    ],
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'won-dark'
        }
    }
} as Meta

export const Default: Story<ShowCaseProps> = (args) => <Showcase {...args} />

Default.args = {
    title: 'Most Popular',
    highlight: highlightMock,
    games: GamesMock
}

export const WithoutHighlight: Story<ShowCaseProps> = (args) => (
    <Showcase {...args} />
)

WithoutHighlight.args = {
    title: 'Most Popular',
    games: GamesMock
}

export const WithoutGames: Story<ShowCaseProps> = (args) => (
    <Showcase {...args} />
)

WithoutGames.args = {
    title: 'Most Popular',
    highlight: highlightMock
}
