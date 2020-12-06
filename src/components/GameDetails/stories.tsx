import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailsProps } from '.'
import mockGames from './mock'

export default {
    title: 'GameDetails',
    component: GameDetails,
    parameters: {
        backgrounds: {
            default: 'won-dark'
        }
    },
    args: mockGames,
    argTypes: {
        genres: {
            control: {
                type: 'inline-check',
                options: ['Role-playing', 'Narrative']
            }
        },
        platforms: {
            control: {
                type: 'inline-check',
                options: ['windows', 'linux', 'mac']
            }
        },
        releaseDate: {
            control: {
                type: 'date'
            }
        }
    }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <GameDetails {...args} />
    </div>
)
