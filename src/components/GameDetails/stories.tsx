import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails from '.'

export default {
    title: 'GameDetails',
    component: GameDetails,
    parameters: {
        backgrounds: {
            default: 'won-dark'
        }
    }
} as Meta

export const Default: Story = () => <GameDetails />
