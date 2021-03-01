import { Story, Meta } from '@storybook/react/types-6-0'
import Home, { HomeTemplateProps } from '.'
import bannersMock from 'components/BannerSlider/mock'
import gameCardMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default {
    title: 'Templates/Home',
    component: Home,
    args: {
        banners: bannersMock,
        newGames: gameCardMock,
        mostPopularHighlight: highlightMock,
        mostPopularGames: gameCardMock,
        upcomingGames: gameCardMock,
        upcomingHighlight: highlightMock,
        freeHighlight: highlightMock,
        freeGames: gameCardMock
    },
    argTypes: {
        banners: { type: '' },
        newGames: { type: '' },
        mostPopularHighlight: { type: '' },
        mostPopularGames: { type: '' },
        upcomingGames: { type: '' },
        upcomingHighlight: { type: '' },
        freeHighlight: { type: '' },
        freeGames: { type: '' }
    },
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'won-dark'
        }
    }
} as Meta

export const Default: Story<HomeTemplateProps> = (args) => <Home {...args} />
