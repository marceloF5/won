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
        upcommingGames: gameCardMock,
        upcommingHighlight: highlightMock,
        upcommingMoreGames: gameCardMock,
        freeHighlight: highlightMock,
        freeGames: gameCardMock
    },
    argTypes: {
        banners: { type: '' },
        newGames: { type: '' },
        mostPopularHighlight: { type: '' },
        mostPopularGames: { type: '' },
        upcommingGames: { type: '' },
        upcommingHighlight: { type: '' },
        upcommingMoreGames: { type: '' },
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
